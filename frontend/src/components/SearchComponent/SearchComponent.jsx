import React, { useContext } from 'react';
import { StoreContext } from '../../Context/StoreContext';
import { assets } from '../../assets/assets';
import './SearchComponent.css';

const SearchComponent = () => {
  const { searchQuery, setSearchQuery } = useContext(StoreContext);

  return (
    <div className="search-container">
      <img src={assets.search_icon} alt="Search" className="search-icon" />
      <input
        type="text"
        placeholder="Search food items..."
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
        className="search-input"
      />
      {searchQuery && (
        <button className="clear-search" onClick={() => setSearchQuery('')}>
          ×
        </button>
      )}
    </div>
  );
};

export default SearchComponent;