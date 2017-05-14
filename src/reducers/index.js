import { combineReducers } from 'redux';
import { reducer as form } from 'redux-form';
import { sessionReducer } from 'redux-react-session';
import { reducer as sematable } from 'sematable';
import dropdowns from './dropdowns'
import modal from './modal'
import files from './files'
import tooltips from './tooltips'
import accountDetails from './accountDetails'
import organisation from './organisation'
import users from './users'
import locations from './locations'
import departments from './departments'

const rootReducer = combineReducers({
  form,
  sematable,
  session : sessionReducer,
  dropdowns,
  modal,
  files,
  tooltips,
  accountDetails,
  organisation,
  users,
  locations,
  departments
});

export default rootReducer;
