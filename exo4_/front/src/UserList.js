import React from 'react';
import { Link } from 'react-router-dom';

const UserList = ({ users, onSelectUser }) => {
    
    return (
        <ul className="user-list">
            {users.map(user => (
                <li key={user.login.uuid}>
                    <Link to={`/user/${user.login.uuid}`} className='user-list-link'>
                        {user.name.first} {user.name.last}
                    </Link>
                </li>
            ))}
        </ul>
    );

};

export default UserList;
