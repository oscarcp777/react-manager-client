import {
  LOAD_DEPARTMENTS,
  SAVE_DEPARTMENTS
} from '../actions/types';

export default(state = [], action = {}) => {
  switch (action.type) {
    case LOAD_DEPARTMENTS:
      return [...action.departments]
    case SAVE_DEPARTMENTS:
      return [...state,action.department]
    default:
      return state;
  }
}
