import React, {Component} from 'react'
import OrgChart from './OrganisationChart'
import AddPosition from './AddPosition'
import * as actions from '../../../actions/Organisation'
import {connect} from 'react-redux';

class Organisation extends Component {
  componentDidMount() {
      this.fetchData();
  }

  fetchData() {
      const {fetchOrganisation} = this.props;
      fetchOrganisation();
  }
    render() {
      const {usersOrg} =this.props;
        return (
            <div className="animated fadeIn">
                <div className="card card-default">
                    <div className="card-header main-header">
                        Organisation
                    </div>
                    <div className="card-block">
                        <div className="row">
                            <div className="offset-md-1 col-md-11 ">
                                <AddPosition usersOrg={usersOrg}/>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-md-12">
                                <OrgChart usersOrg={usersOrg}/>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        )
    }
}
export default connect(state => ({usersOrg:state.organisation}), actions)(Organisation);
