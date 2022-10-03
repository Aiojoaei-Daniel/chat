import React from "react";
import PropTypes from "prop-types";

import "./searchBar.css";

const SearchBar = ({ search, setSearchValue }) => {
  return (
    <div className="search-bar">
      <input
        type="text"
        name="search-bar"
        className="search-input"
        placeholder="Search here"
        onChange={(event) => setSearchValue(event.target.value)}
      />
      <div className="search-icon">
        <img src={search} alt="search" />
      </div>
    </div>
  );
};

SearchBar.prototype = {
  search: PropTypes.string,
  setSearchValue: PropTypes.func,
};

export default SearchBar;
