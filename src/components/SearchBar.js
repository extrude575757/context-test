import { useContext } from "react";
import { searchValueContext } from "../context/SearchValueContext";

function SearchBar() {
  const { searchValue, setSearchValue } = useContext(searchValueContext);

  return (
    <input
      type="search"
      placeholder="Search"
      value={searchValue}
      onChange={(e) => setSearchValue(e.target.value)}
    />
  );
}

export default SearchBar;
