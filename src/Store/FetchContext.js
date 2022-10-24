import React, { useState, useEffect } from "react";
import { useFetch } from "../hooks/useFetch";

const FetchContext = React.createContext();

export const ContextProvider = ({ children }) => {
  const [searchTerm, setSearchTerm] = useState("batman");

  const searchHandler = (value) => {
    setSearchTerm(value);
  };
  const { loading, error, data: movies } = useFetch(`&s=${searchTerm}`);
  useEffect(() => {}, []);

  return (
    <FetchContext.Provider
      value={{
        movies,
        loading,
        error,
        searchHandler,
        searchTerm,
      }}
    >
      {children}
    </FetchContext.Provider>
  );
};

export default FetchContext;
