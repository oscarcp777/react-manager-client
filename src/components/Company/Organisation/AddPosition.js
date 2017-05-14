import React, {Component} from 'react';
import AddPositionForm from './AddPositionForm'
import {connect} from 'react-redux';
import {reset} from 'redux-form';
import {addPositionOrg} from '../../../actions/Organisation'

class AddPosition extends Component {

    convertTreeToList(root) {
        let stack = [],
            array = [],
            hashMap = {};
        stack.push(root);

        while (stack.length !== 0) {
            var node = stack.pop();
            if (!node.children) {
                this.visitNode(node, hashMap, array);
            } else {
                this.visitNode(node, hashMap, array);
                for (var i = node.children.length - 1; i >= 0; i--) {
                    stack.push(node.children[i]);
                }
            }
        }
        return array;
    }

    visitNode(node, hashMap, array) {
        if (!hashMap[node.id]) {
            hashMap[node.id] = true;
            array.push({label: node.name, value: node.id});
        }
    }
    render() {
        const {usersOrg, onSubmit} = this.props;
        const users =usersOrg?this.convertTreeToList(usersOrg):[];
        return (
            <div className="mb-3 mt-3">
                <h5>Organisation Chart</h5>
                <p className="text-muted">Quick Add</p>
                <AddPositionForm onSubmit={onSubmit} users={users}/>
            </div>
        )
    }
}
const mapDispatchToProps = (dispatch) => {
    return {
        onSubmit: (user) => {
          console.log('####### onSubmit');
            dispatch(addPositionOrg(user));
            dispatch(reset('addPositionForm'));
        }
    };
};
export default connect(null, mapDispatchToProps)(AddPosition);
