import React from 'react';
const UserAvatar = (props) => {
    return (
        <table className="table-clear">
            <tbody>
                <tr>
                    <td>
                          {props.avatarUrl ?
                            <div className="user-avatar">
                              <img src={props.avatarUrl} className="img-avatar" alt="admin@bootstrapmaster.com"/>
                            </div>
                            : <div className='icon-avatar'>
                              <i className="fa fa-user-circle-o"></i>
                            </div>}
                    </td>
                    <td>
                        <span className="hidden-xs-down">{props.children}</span>
                    </td>
                </tr>
            </tbody>
        </table>

    )
}
export default UserAvatar
