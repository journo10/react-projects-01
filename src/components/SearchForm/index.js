import React from "react";

const Search = ({ handleChange, search }) => {
  return (
    <div  className="d-flex  ">
      <div className="row col-md-12">
        <form className="input-group mt-1">
          <input
            value={search}
            onChange={handleChange}
            className="form-control me-2"
            name="search"
            placeholder="Kitap Ara"
          />
        </form>
      </div>
    </div>
  );
};

export default Search;
