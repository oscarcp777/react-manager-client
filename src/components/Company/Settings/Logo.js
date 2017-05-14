import React,{Component} from 'react';
import {connect} from 'react-redux';
import isEmpty from 'lodash/isEmpty';
import DropFile from '../../Commons/DropFile'
import * as actions from '../../../actions/Files'
class Logo extends Component{
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
  onDrop(logo){
    const {uploadLogo} = this.props
    console.log('Accepted files: ', logo);
    if(!isEmpty(logo)){
      uploadLogo(logo);
    }
  }
  render(){
    const {deleteLogo} = this.props
    return (
      <DropFile image={this.props.logo} onDrop={this.onDrop} tooltipImg={this.state.tooltipOpen} toggle={this.toggle} deleteImg={deleteLogo} label={"Logo"}/>
    )
  }
}
export default connect((state) => ({logo: state.files.logo}), actions)(Logo);
