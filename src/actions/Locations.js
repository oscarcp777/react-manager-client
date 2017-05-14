import {
  LOAD_LOCATIONS,
  SAVE_LOCATIONS
} from './types'
import * as api from '../lib/api/sessionApi'

export const loadLocations = (locations) => ({
  type: LOAD_LOCATIONS,
  locations
});
export const saveLocation = (location) => ({
  type: SAVE_LOCATIONS,
  location
});
export const fetchLocations = () => ( dispatch =>(
       api.fetchLocations().then(
         locations => dispatch(loadLocations(locations))
       )
     )
  )
