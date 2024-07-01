/* import React, { useState, useEffect } from 'react';
import './App.css';

function App() {
    const [users, setUsers] = useState([]);
    const [searchTerm, setSearchTerm] = useState('');
    const [selectedUser, setSelectedUser] = useState(null);

    useEffect(() => {
        fetch('/users')
            .then(response => response.json())
            .then(data => setUsers(data));
    }, []);

    const handleSearch = (event) => {
        setSearchTerm(event.target.value);
    };

    const filteredUsers = users.filter(user => 
        `${user.name.first} ${user.name.last}`.toLowerCase().includes(searchTerm.toLowerCase())
    );

    return (
        <div className="App">
            <h1>User search and display</h1>
            <input 
                type="text" 
                placeholder="Search for users" 
                value={searchTerm}
                onChange={handleSearch}
            />
            <ul>
                {filteredUsers.map(user => (
                    <li key={user.login.uuid} onClick={() => setSelectedUser(user)}>
                        {user.name.first} {user.name.last}
                    </li>
                ))}
            </ul>
            {selectedUser && (
                <div className="user-details">
                    <h2>{selectedUser.name.first} {selectedUser.name.last}</h2>
                    <p><strong>Email:</strong> {selectedUser.email}</p>
                    <p><strong>Phone:</strong> {selectedUser.phone}</p>
                    <p><strong>Location:</strong> {selectedUser.location.city}, {selectedUser.location.country}</p>
                    <img src={selectedUser.picture.large} alt={`${selectedUser.name.first} ${selectedUser.name.last}`} />
                </div>
            )}
        </div>
    );
}

export default App; 
 */