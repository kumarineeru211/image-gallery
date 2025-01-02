
import React from 'react';

const SearchBar = ({ onSearch }) => {
  const handleKeyDown = (e) => {
    if (e.key === 'Enter') {
      onSearch(e.target.value);
    }
  };

  return (
    <input
      type="text"
      placeholder="Search images..."
      onKeyDown={handleKeyDown}
      style={{ padding: '10px', width: '30%', fontSize: '16px', marginBottom:"20px",borderRadius:"30px" }}
    />
  );
};

export default SearchBar;
