import React from "react";
import "./search-box.styles.css";

export const SearchBox = ({ searchField, placeholder, handleChange }) => (
  <input
    type="search"
    className="search"
    placeholder={placeholder}
    value={searchField}
    onChange={handleChange}
  />
);
