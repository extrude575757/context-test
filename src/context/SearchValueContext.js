import { createContext, useState } from "react";

const searchValueContext = createContext();

function SearchValueProvider({ children }) {
  const [searchValue, setSearchValue] = useState("");

  return (
    <searchValueContext.Provider value={{ searchValue, setSearchValue }}>
      {children}
    </searchValueContext.Provider>
  );
}

export default SearchValueProvider;
export { searchValueContext };
