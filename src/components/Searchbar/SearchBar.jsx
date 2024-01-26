// SearchBar.js
import React from 'react';
import CloseIcon from '@mui/icons-material/Close';
import SearchIcon from '@mui/icons-material/Search';
import './SearchBar.css';

const SearchBar = ({ toggleSearchVisibility }) => {
  return (
    <div className="search-bar">
      <div className='search_icon'>
        <div>
            <input type="text" placeholder="Search..." />
        </div>
        <div>
            <span><SearchIcon/></span>
        </div>
      </div>
      <div className='Search_close'>
        <div onClick={toggleSearchVisibility}><CloseIcon /></div>
      </div>
    </div>
  );
};

export default SearchBar;
