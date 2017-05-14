import {TOOGLE_MDL_CHANGE_PWD, LOAD_ACCOUNT_DETAILS} from './types'
import * as api from '../lib/api/sessionApi'
export const toggleChangePwd = () => ({
  type: TOOGLE_MDL_CHANGE_PWD
})
const loadAccountDetails = (details) => ({
  type: LOAD_ACCOUNT_DETAILS,
  details
});

export const fetchAccountDetails = (user) => ( dispatch =>(
       api.fetchDetails(1, user.access_token).then(data => dispatch(loadAccountDetails(data)))
     )
  )
