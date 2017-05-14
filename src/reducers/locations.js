import {
  LOAD_LOCATIONS,
  SAVE_LOCATIONS
} from '../actions/types';

export default(state = [], action = {}) => {
  switch (action.type) {
    case LOAD_LOCATIONS:
      return [...action.locations]
    case SAVE_LOCATIONS:
      return [...state,action.location]
    default:
      return state;
  }
}
