import React,{Component} from 'react';
import {connect} from 'react-redux';
import isEmpty from 'lodash/isEmpty';
import DropFile from '../../Commons/DropFile'
import * as actions from '../../../actions/Files'
class Profile extends Component{
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
  onDrop(profile){
    const {uploadProfile} = this.props
    console.log('Accepted files: ', profile);
    if(!isEmpty(profile)){
      uploadProfile(profile);
    }
  }
  render(){
    const {deleteProfile,profile} = this.props
    return (
      <DropFile image={profile} onDrop={this.onDrop} tooltipImg={this.state.tooltipOpen} toggle={this.toggle} deleteImg={deleteProfile} label={"Profile Image"}/>
    )
  }
}
export default connect((state) => ({profile: state.files.profile}), actions)(Profile);
