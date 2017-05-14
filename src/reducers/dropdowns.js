import {TOOGLE_DD_HEADER, TOOGLE_DD_TABLE_USER} from '../actions/types';

let header = {
    toogleDDHeader: false,
    toogleDDTableUser: false
}
export default(state = header, action = {}) => {
    switch (action.type) {
        case TOOGLE_DD_HEADER:
            return {
                ...state,
                toogleDDHeader: !state.toogleDDHeader
            };
        case TOOGLE_DD_TABLE_USER:
            return {
                ...state,
                toogleDDTableUser: !state.toogleDDTableUser
            };
        default:
            return state;
    }
}
