import React from 'react';
import classnames from 'classnames'
const getClassType = (state) => {
    switch (state) {
        case 'ACTIVE':
            return 'success';
        case 'PENDING':
            return 'primary';
        case 'SUSPENDED':
            return 'warning';
        default:
            return 'danger';
    }
}
const UserStatus = (props) => {
    const classType = getClassType(props.children);
    return (
        <span className={classnames(`btn btn-${classType} btn-sm`)}>
            {props.children}
        </span>
    )
}
export default UserStatus
