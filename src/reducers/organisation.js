import {LOAD_ORGANISATION, ADD_POSITION_ORGANISATION} from '../actions/types';
import cloneDeep from 'lodash/cloneDeep';
let index = 10;
const updateNodeChild = (root, id, newUser) => {
    let stack = [];
    stack.push(root);
    while (stack.length !== 0) {
        let node = stack.pop();
        if (id === node.id) {
            node.children = node.children?[...node.children,newUser]:[newUser]
            return
        } else {
            if (node.children) {
                for (var i = node.children.length - 1; i >= 0; i--) {
                    stack.push(node.children[i]);
                }
            }
        }
    }
}

export default(state = {}, action = {}) => {
    switch (action.type) {
        case LOAD_ORGANISATION:
            return {
                ...action.users
            };
        case ADD_POSITION_ORGANISATION:
            let newState = cloneDeep(state);
            let id = index++;
            let newUser = {
                'id': id.toString(),
                'name': `${action.user.firstName} ${action.user.lastName} `,
                'title': action.user.position
            }
            updateNodeChild(newState, action.user.reportTo.value.toString(), newUser);
            return newState
        default:
            return state;
    }
}
