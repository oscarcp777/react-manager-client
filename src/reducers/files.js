import {
  DELETE_PROFILE,
  UPLOAD_PROFILE,
  DELETE_LOGO,
  UPLOAD_LOGO,
  UPLOAD_LOCATION_PHOTO,
  DELETE_LOCATION_PHOTO,
  DELETE_DEPARTMENT_PHOTO,
  UPLOAD_DEPARTMENT_PHOTO
} from '../actions/types'

export default(state = {}, action = {}) => {
  switch (action.type) {
    case UPLOAD_LOGO:
      return {
        ...state,
        logo: action.logo
      };
    case DELETE_LOGO:
      return {
        ...state,
        logo: null
      };
    case DELETE_PROFILE:
      return {
        ...state,
        profile: null
      };
    case UPLOAD_PROFILE:
      return {
        ...state,
        profile: action.profile
      };
    case DELETE_LOCATION_PHOTO:
      return {
        ...state,
        location: null
      };
    case UPLOAD_LOCATION_PHOTO:
      return {
        ...state,
        location: action.location
      };
    case DELETE_DEPARTMENT_PHOTO:
      return {
        ...state,
        location: null
      };
    case UPLOAD_DEPARTMENT_PHOTO:
      return {
        ...state,
        location: action.location
      };
    default:
      return state;
  }
}
