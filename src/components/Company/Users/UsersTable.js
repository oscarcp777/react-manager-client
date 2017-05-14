import React, {Component} from 'react';
import sematable from 'sematable';
import SortableHeader from './SortableHeader'
import UserActions from './UserActions'
import UserStatus from './UserStatus'
import UserAvatar from './UserAvatar'
import {USERS_TABLE} from '../../../actions/types'

const columns = [
    {
        key: 'id',
        primaryKey: true,
        header: 'ID'
    }, {
        key: 'name',
        header: 'Name'
    }, {
        key: 'position',
        header: 'Position'
    }, {
        key: 'departments',
        header: 'Departments'
    }, {
        key: 'status',
        header: 'Status'
    }, {
        key: 'actions',
        header: 'Actions'
    }
];
const configs = {
    showFilter: false,
    showPageSize: false,
    sortDirection: 'asc'
}

class UsersTable extends Component {
    render() {
        const {
            headers: {
                name,
                position,
                departments,
                status
            },
            data
        } = this.props;
        return (
                <table className="table table-hover">
                    <thead>
                        <tr>
                            <th className="hidden-sm-down">ID</th>
                            <SortableHeader {...name} />
                            <SortableHeader {...position} className="hidden-sm-down"/>
                            <SortableHeader {...departments} className="hidden-sm-down"/>
                            <SortableHeader {...status}/>
                            <th>Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {data.map((user) => (
                            <tr key={user.id} >
                                <td className="hidden-sm-down">{user.id}</td>
                                <td><UserAvatar avatarUrl={user.avatar_url}>{user.name}</UserAvatar></td>
                                <td className="hidden-sm-down">{user.position}</td>
                                <td className="hidden-sm-down">{user.departments}</td>
                                <td> <UserStatus >{user.status}</UserStatus> </td>
                                <td><UserActions userId={user.id}/></td>
                            </tr>
                        ))}
                    </tbody>
                </table>

        );
    }
}
export default sematable(USERS_TABLE, UsersTable, columns, configs);
