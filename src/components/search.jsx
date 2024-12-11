import { useRef } from "react";

const Search = ({ handleSearch }) => {
  const city = useRef("");
  return (
    <>
      <div className="search-section">
        <input type="text" placeholder="Enter city" ref={city} />
        <button onClick={() => handleSearch(city)} className="btn btn-success">
          Search
        </button>
      </div>
    </>
  );
};

export default Search;
