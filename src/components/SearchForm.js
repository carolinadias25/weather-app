import React from "react";
import PropTypes from "prop-types";
import "../styles/SearchForm.css";

const SearchForm = ({ searchText, setSearchText, onSubmit }) => {
  const handleInputChange = (event) => setSearchText(event.target.value);

  return (
    <div className="search-form">
      <input
        type="text"
        onChange={handleInputChange}
        value={searchText}
        className="search-form__input"
        placeholder="e.g. Manchester"
      />
      <button type="submit" onClick={onSubmit} className="search-form__button">
        Search
      </button>
    </div>
  );
};

export default SearchForm;

SearchForm.propTypes = {
  searchText: PropTypes.string.isRequired,
  setSearchText: PropTypes.func.isRequired,
  onSubmit: PropTypes.func.isRequired,
};
