import axios from 'axios';

export default function setAuthorizationToken(token) {
    if (token) {
        axios.defaults.headers.common['X-Auth-Token'] = `Bearer ${token}`;
    } else {
        delete axios.defaults.headers.common['X-Auth-Token'];
    }
}
