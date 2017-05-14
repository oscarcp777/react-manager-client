import {LOAD_ACCOUNT_DETAILS} from '../actions/types';

export default(state = {}, action = {}) => {
    switch (action.type) {
        case LOAD_ACCOUNT_DETAILS:
            return {...action.details}
        default:
            return state;
    }
}
