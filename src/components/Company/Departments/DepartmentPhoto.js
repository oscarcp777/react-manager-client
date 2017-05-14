import React,{Component} from 'react';
import {connect} from 'react-redux';
import isEmpty from 'lodash/isEmpty';
import DropFile from '../../Commons/DropFile'
import * as actions from '../../../actions/Files'
class DepartmentPhoto extends Component{
  constructor(props) {
    super(props);
    this.toggle = this.toggle.bind(this);
    this.onDrop = this.onDrop.bind(this);
    this.state = {
      tooltipOpen: false
    };
  }
  toggle() {
    this.setState({
      tooltipOpen: !this.state.tooltipOpen
    });
  }
  onDrop(department){
    const {uploadDepartmentPhoto} = this.props
    console.log('Accepted files: ', department);
    if(!isEmpty(department)){
      uploadDepartmentPhoto(department);
    }
  }
  render(){
    const {deleteDepartmentPhoto,department} = this.props
    return (
      <DropFile image={department} onDrop={this.onDrop} tooltipImg={this.state.tooltipOpen} toggle={this.toggle} deleteImg={deleteDepartmentPhoto} label="Photo"/>
    )
  }
}
export default connect((state) => ({department: state.files.department}), actions)(DepartmentPhoto);
