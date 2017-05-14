import {sessionService} from 'redux-react-session';
import * as sessionApi from '../lib/api/sessionApi';
import setAuthorizationToken from '../lib/setAuthorizationToken'

const saveUserSession = (user, history) => {
  sessionService.saveUser(user).then(() => {
    history.push('/');
  }).catch(err => console.error(err));
}
export const login = (user, history) => {
  return () => {
    return sessionApi.login(user.email, user.password)
    .then(response => {
        sessionService.saveSession(response.data.access_token)
        .then(() =>{sessionApi.getUser(response.data.access_token)
            .then(resp => {
                  saveUserSession(resp.data, history)
                 })
            .catch(err => console.error(err));
        })
     .catch(err => console.error(err));
      });
  };
};

export const register = (customer, history) => {
  return () => {
    return sessionApi.register(customer).then((response) => {
      console.log('################################');
      console.log(response);
      console.log('################################');
      history.push('/mail/register');
    }).catch(err => {
      throw(err);
    });
  };
};
export const forgotPassword = (mail, history) => {
  return () => {
    return sessionApi.forgotPassword(mail).then((response) => {
      console.log('################################');
      console.log(response);
      console.log('################################');
      history.push('/mail/forgot');
    }).catch(err => {
      throw(err);
    });
  };
};
export const changePassword = (passwords, history) => {
  return () => {
    return sessionApi.changePassword(passwords).then((response) => {
      console.log('################################');
      console.log(response);
      console.log('################################');
      history.push('/mail/forgot');
    }).catch(err => {
      throw(err);
    });
  };
};
export const logout = (history) => {
  return sessionApi.logout().then(() => {
    sessionService.deleteSession();
    sessionService.deleteUser();
    setAuthorizationToken(null);
    history.push('/login');
  }).catch(err => {
    throw(err);
  });
};
