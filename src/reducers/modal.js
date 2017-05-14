import {
  TOOGLE_MDL_CHANGE_PWD,
  TOOGLE_MDL_ADD_LOCATION,
  TOOGLE_MDL_ADD_DEPARTMENT
} from '../actions/types';
let initState = {
  modalChangePwd: false,
  modalAddLocation: false,
  modalAddDepartment: false
}
export default(state = initState, action = {}) => {
  switch (action.type) {
    case TOOGLE_MDL_CHANGE_PWD:
      return {
        ...state,
        modalChangePwd: !state.modalChangePwd
      };
    case TOOGLE_MDL_ADD_LOCATION:
      return {
        ...state,
        modalAddLocation: !state.modalAddLocation
      };
    case TOOGLE_MDL_ADD_DEPARTMENT:
      return {
        ...state,
        modalAddDepartment: !state.modalAddDepartment
      };
    default:
      return state;
  }
}
