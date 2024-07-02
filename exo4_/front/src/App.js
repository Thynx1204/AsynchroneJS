import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import UserList from './UserList';
import UserDetail from './UserDetail';
import SearchBar from './SearchBar';
import { fetchUsers } from './api';
import './App.css';

const App = () => {
    const [users, setUsers] = useState([]);
    const [searchTerm, setSearchTerm] = useState('');

    useEffect(() => {
        const getUsers = async () => {
            try {
                const users = await fetchUsers();
                setUsers(users);
            } catch (error) {
                console.error('Error fetching users:', error);
            }
        };

        getUsers();
    }, []);

    const filteredUsers = users.filter(user =>
        `${user.name.first} ${user.name.last}`.toLowerCase().includes(searchTerm.toLowerCase())
    );

    return (
        <Router>
            <div className="container">
                <Routes>
                    <Route 
                        path="/" 
                        element={
                            <>
                                <SearchBar value={searchTerm} onChange={setSearchTerm} />
                                <UserList users={filteredUsers} />
                            </>
                        } 
                    />
                    <Route path="/user/:id" element={<UserDetail users={users} />} />
                </Routes>
            </div>
        </Router>
    );
};

export default App;
