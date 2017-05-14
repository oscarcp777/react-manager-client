import React, {Component} from 'react';
import {connect} from 'react-redux';
import { bindActionCreators } from 'redux'
import DepartmentActions from './DepartmentActions'
import DepartmentTable from './DepartmentTable'
import * as actionsDepartments from '../../../actions/Departments'
import { fetchUsers } from '../../../actions/Users'
import {toogleAddDepartment} from '../../../actions/Modals'
class Departments extends Component {
  componentDidMount() {
      const { fetchDepartments} = this.props.actions;
      const {fetchUsers} = this.props;
      fetchDepartments();
      fetchUsers();
  }
  componentWillReceiveProps(nextProps){
    const { users} = this.props;
    console.log('#############');
    console.log(nextProps);
    console.log(this.props);
    console.log('#############');
    if(nextProps.users !== users){
      this.forceUpdate();
    }
  }
  render() {
    const { departments, toggle } = this.props

    return (
      <div className="animated fadeIn">
        <div className="card card-default">
          <DepartmentActions addDepartment={toggle}/>
          <DepartmentTable data={departments} />
        </div>
      </div>
    );
  }

}
const  mapStateToProps = (state) => (
  {
    departments:state.departments
  }
)
const mapDispatchToProps = (dispatch) => ({
  toggle: () => (dispatch(toogleAddDepartment())),
  actions : bindActionCreators(actionsDepartments,dispatch),
  fetchUsers : bindActionCreators(fetchUsers,dispatch)
})

export default connect(mapStateToProps, mapDispatchToProps)(Departments);
