import { useState } from "react";

const Search = ( {setQuery} ) => {
  const [searchInput, setSearchInput] = useState("");

  const handleChange = (e) => {
    setSearchInput(e.target.value);
  }

  return (
  <div>
    <input type="text" name="username" value={searchInput} onChange={handleChange} />
    <button type="button" onClick={() => setQuery(searchInput)}>Search</button>
  </div>
  )
}

export default Search;
