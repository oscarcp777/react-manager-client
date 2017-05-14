import {
  TOOGLE_MDL_CHANGE_PWD,
  TOOGLE_MDL_ADD_LOCATION,
  TOOGLE_MDL_ADD_DEPARTMENT
} from './types'

export const toogleChangePwd = () => ({type: TOOGLE_MDL_CHANGE_PWD});
export const toogleAddLocation = () => ({type: TOOGLE_MDL_ADD_LOCATION});
export const toogleAddDepartment = () => ({type: TOOGLE_MDL_ADD_DEPARTMENT});
