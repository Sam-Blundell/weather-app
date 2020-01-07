import React from "react";

const Search = props => {
  return (
    <form onSubmit={props.handleSubmit}>
      <input
        type="text"
        placeholder="city name"
        onChange={props.handleChange}
      />
      <button type="submit">Search</button>
    </form>
  );
};

export default Search;
