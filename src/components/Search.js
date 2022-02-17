import React from "react";
import { StyledSearch } from "./Styles/Search.styled";

function Search({ searchTerm, setSearchTerm }) {
  return (
    <StyledSearch>
      <div>
        <label className="search" htmlFor="search">
          SEARCH MEME BY TITLE:
        </label>
        <input
          className="searchbar"
          type="text"
          id="search"
          placeholder="e.g. Condescending Wonka..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
      </div>
    </StyledSearch>
  );
}

export default Search;
