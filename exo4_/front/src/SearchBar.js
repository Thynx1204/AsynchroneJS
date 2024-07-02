import React from 'react';

const SearchBar = ({ value, onChange }) => {
    return (
        <input
            className='search-bar'
            type="text"
            placeholder="Search users"
            value={value}
            onChange={e => onChange(e.target.value)}
        />
    );
};

export default SearchBar;
