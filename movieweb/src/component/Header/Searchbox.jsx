import React, { useState } from 'react';
import {FaSearch} from 'react-icons/fa';

const SearchBar = () => {
  const [searchText, setSearchText] = useState('');

  const handleSearchChange = (event) => {
    setSearchText(event.target.value);
  };

  const handleSearchSubmit = (event) => {
    event.preventDefault();
    console.log('Search submitted:', searchText);
 
  };

  return (
    <div style={styles.container_search}>
      <form onSubmit={handleSearchSubmit}>
        <input
          type="text"
          placeholder="Search movie"
          value={searchText}
          onChange={handleSearchChange}
          style={styles.input_search}
        />
        <button type="submit" style={styles.button_search}>
          <FaSearch />
        </button>
      </form>
    </div>
  );
};

const styles = {
  container_search: {
    
    padding: '10px',
  },
  input_search: {
    padding: '5px',
    marginRight: '5px',
    width: '200px',
    borderRadius: '5px',
    border: 'none',
  },
  button_search: {
    backgroundColor: 'transparent',
    border: 'none',
    cursor: 'pointer',
    color: 'white',
  },
};

export default SearchBar;