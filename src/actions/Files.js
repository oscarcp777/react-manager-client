import {
  DELETE_PROFILE,
  UPLOAD_PROFILE,
  DELETE_LOGO,
  UPLOAD_LOGO,
  DELETE_LOCATION_PHOTO,
  UPLOAD_LOCATION_PHOTO,
  DELETE_DEPARTMENT_PHOTO,
  UPLOAD_DEPARTMENT_PHOTO
} from './types'

export const deleteLogo = () => ({type: DELETE_LOGO});
export const uploadLogo = (logo) => ({type: UPLOAD_LOGO, logo});

export const uploadProfile = (profile) => ({type: UPLOAD_PROFILE, profile});
export const deleteProfile = () => ({type: DELETE_PROFILE});

export const uploadLocationPhoto = (location) => ({type: UPLOAD_LOCATION_PHOTO, location});
export const deleteLocationPhoto = () => ({type: DELETE_LOCATION_PHOTO});

export const uploadDepartmentPhoto = (department) => ({type: UPLOAD_DEPARTMENT_PHOTO, department});
export const deleteDepartmentPhoto = () => ({type: DELETE_DEPARTMENT_PHOTO});
