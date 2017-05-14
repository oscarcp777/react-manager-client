import axios from 'axios';
import {
  users,
  userDetails,
  userLogin,
  locations,
  departments
} from '../../config/data/dataMocks'
import setAuthorizationToken from '../setAuthorizationToken'

axios.defaults.baseURL = 'http://dev.work.management/api/';
// axios.defaults.baseURL = 'http://localhost:9677/api/';

const delay = (ms) => new Promise(resolve => setTimeout(resolve, ms));

export const login = (username, password) => {
    // return axios.post('login', {username, password});
     return delay(500).then(() => ({data:{username,password,'access_token':'alalala'}}))
}
export const getUser = (token) => {
  setAuthorizationToken(token);
// return axios.post('LoginForAPI/auth',{username:'ususrios'});
  return delay(500).then(() => ({data:userLogin}))
}

export const fetchDetails = (id, token) => {
    setAuthorizationToken(token);
  // return axios.get('customerREST/showCustomer', {id:id},config);
   return delay(500).then(() => userDetails);
};
export const register = (token,customer) => {
  let newCustomer={
      firstName: customer.firstName,
      email: customer.email,
      confirmEmail: customer.emailConfirmation,
      companyName: customer.Organisation,
      webAddress: customer.webAddress,
      teamSize: customer.teamSize.value,
      lastName: customer.lastName,
      fullCompanyName: customer.Sector
  };
  setAuthorizationToken(token);
  return axios.post('customerREST/createCustomer',newCustomer );
};
export const forgotPassword = (mail) => {
  return delay(500).then(() => ({data:'OK'}))
  // return axios.post('customerREST/forgotPassword',{username:mail} );
};
export const changePassword = (passwords) => {
  return delay(500).then(() => ({data:'OK'}))
  // return axios.post('customerREST/forgotPassword',{username:mail} );
};
export const fetchUsers = () => {
  return delay(500).then(() => users);
};
export const fetchLocations = () => {
  return delay(500).then(() => locations);
};
export const fetchDepartments = () => {
  return delay(500).then(() => departments);
};
export const fetchOrganisation = () => {
  let data = {
      'id': '1',
      'name': 'Oscar Caceres',
      'title': 'CEO',
      'children': [
          {
              'id': '2',
              'name': 'Jhon Hammond',
              'title': 'Manager'
          }
      ]
  };

    // return axios.post('customerREST/showCustomer', {id:'1'},config);
    return delay(500).then(() => data);
};
export const logout = () => {
  return new Promise(resolve => setTimeout(resolve, 1000));
};
