import React, {Component} from 'react';
import {connect} from 'react-redux';
import { bindActionCreators } from 'redux'
import LocationActions from './LocationActions'
import LocationsTable from './LocationsTable'
import * as actionsLocations from '../../../actions/Locations'
import {toogleAddLocation} from '../../../actions/Modals'
class Locations extends Component {
  componentDidMount() {
      const { fetchLocations} = this.props.actions;
      fetchLocations();
  }
  render() {
    const { locations, toggle } = this.props
    return (
      <div className="animated fadeIn">
        <div className="card card-default">
          <LocationActions addLocation={toggle}/>
          <LocationsTable data={locations}/>
        </div>
      </div>
    );
  }

}
const  mapStateToProps = (state) => (
  {
    locations:state.locations
  }
)
const mapDispatchToProps = (dispatch) => ({
  toggle: () => (dispatch(toogleAddLocation())),
  actions : bindActionCreators(actionsLocations,dispatch)
})

export default connect(mapStateToProps, mapDispatchToProps)(Locations);
