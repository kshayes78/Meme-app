import React from "react";

function Search({ searchTerm, setSearchTerm }) {
  return (
    <div>
      <label htmlFor="search">Search Meme By Title</label>
      <input
        type="text"
        id="search"
        placeholder="E.g. Condescending Wonka..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />
    </div>
  );
}

export default Search;
