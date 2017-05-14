import {LOAD_ORGANISATION, ADD_POSITION_ORGANISATION} from './types'
import * as api from '../lib/api/sessionApi'

export const loadOrganisation = (users) => ({
  type: LOAD_ORGANISATION,
  users
});
export const addPositionOrg = (user) => ({
  type: ADD_POSITION_ORGANISATION,
  user
});


export const fetchOrganisation = () => dispatch => (
    api.fetchOrganisation().then(data => dispatch(loadOrganisation(data)))
)
