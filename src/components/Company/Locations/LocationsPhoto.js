import React,{Component} from 'react';
import {connect} from 'react-redux';
import isEmpty from 'lodash/isEmpty';
import DropFile from '../../Commons/DropFile'
import * as actions from '../../../actions/Files'
class LocationPhoto extends Component{
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
  onDrop(location){
    const {uploadLocationPhoto} = this.props
    console.log('Accepted files: ', location);
    if(!isEmpty(location)){
      uploadLocationPhoto(location);
    }
  }
  render(){
    const {deleteLocationPhoto,location} = this.props
    return (
      <DropFile image={location} onDrop={this.onDrop} tooltipImg={this.state.tooltipOpen} toggle={this.toggle} deleteImg={deleteLocationPhoto} label="Photo"/>
    )
  }
}
export default connect((state) => ({location: state.files.location}), actions)(LocationPhoto);
