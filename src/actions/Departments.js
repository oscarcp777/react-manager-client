import {
  LOAD_DEPARTMENTS,
  SAVE_DEPARTMENTS
} from './types'
import * as api from '../lib/api/sessionApi'

export const loadDepartments = (departments) => ({
  type: LOAD_DEPARTMENTS,
  departments
});
export const saveDepartments = (department) => ({
  type: SAVE_DEPARTMENTS,
  department
});
export const fetchDepartments = () => ( dispatch =>(
       api.fetchDepartments().then(
         departments => dispatch(loadDepartments(departments))
       )
     )
  )
