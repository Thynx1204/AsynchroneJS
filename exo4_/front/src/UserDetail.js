import React from 'react';
import { useParams } from 'react-router-dom';

const UserDetail = ({ users }) => {
    const { id } = useParams();
    const user = users.find(user => user.login.uuid === id);

    if (!user) return <div className="user-detail">User not found</div>;

    return (
        <div className="user-detail">
            <h2>{user.name.first} {user.name.last}</h2>
            <p>Email: {user.email}</p>
            <p>Phone: {user.phone}</p>
            <img src={user.picture.large} alt={`${user.name.first} ${user.name.last}`} />
        </div>
    );
};


export default UserDetail;