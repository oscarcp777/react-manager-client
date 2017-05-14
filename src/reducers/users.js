import {FETCH_USERS, ADD_USER, DELETE_USER, CHANGE_STATUS_USER} from '../actions/types'
let index = 0
export default(state = [], action = {}) => {
    switch (action.type) {
        case FETCH_USERS:
            return [...action.users];
        case ADD_USER:
            return [
                ...state, {
                    id: index++,
                    name: `${action.user.firstName} ${action.user.lastName}`,
                    position: action.user.position,
                    teams: action.user.team,
                    departments: action.user.department,
                    status: 'PENDING',
                    avatar_url:null
                }
            ]
        case DELETE_USER:
            return state.filter(user => user.id !== action.userId);
        case CHANGE_STATUS_USER:
            return state.map(user => {
                if (user.id === action.userId)
                    return {
                        ...user,
                        status: action.status
                    };
                return user;
            })
        default:
            return state;
    }
}
