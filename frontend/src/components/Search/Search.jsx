import React, { useState, useEffect } from 'react';
import './Search.css';

const Search = ({ setSearchTerm }) => {
  const [inputValue, setInputValue] = useState('');

  // Add debounce to prevent rapid firing of state updates
  useEffect(() => {
    const debounceTimer = setTimeout(() => {
      setSearchTerm(inputValue.toLowerCase());
    }, 300);

    return () => clearTimeout(debounceTimer);
  }, [inputValue, setSearchTerm]);

  return (
    <div className="search-container">
      <input
        type="text"
        placeholder="Search food items..."
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
        className="search-input"
      />
    </div>
  );
};

export default Search;