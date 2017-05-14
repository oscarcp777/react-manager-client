import {FETCH_USERS,ADD_USER,DELETE_USER,CHANGE_STATUS_USER} from './types'
import * as api from '../lib/api/sessionApi'

export const loadUsers = (users) => ({
  type: FETCH_USERS,
  users,
});
export const deleteUser = (userId) => ({
  type: DELETE_USER,
  userId,
});
export const changeStatusUser = (userId,status) => ({
  type: CHANGE_STATUS_USER,
  userId,
  status
});
export const addUser = (user) => ({
  type: ADD_USER,
  user,
});

export const fetchUsers = () => ( dispatch =>(api.fetchUsers().then(data => dispatch(loadUsers(data)))))
