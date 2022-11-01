import React, { useState, useEffect, useReducer } from "react";
import { useFetch } from "../hooks/useFetch";

const FetchContext = React.createContext();

export const ContextProvider = ({ children }) => {
  const [searchTerm, setSearchTerm] = useState("batman");
  const { loading, error, data: movies } = useFetch(`&s=${searchTerm}`);
  const [gridView, setGridView] = useState(true);
  const gridHandler = () => {
    setGridView(true);
  };

  const listHandler = () => {
    setGridView(false);
  };

  const searchHandler = (value) => {
    setSearchTerm(value);
  };

  return (
    <FetchContext.Provider
      value={{
        movies,
        loading,
        error,
        searchHandler,
        searchTerm,
        gridHandler,
        listHandler,
        gridView,
      }}
    >
      {children}
    </FetchContext.Provider>
  );
};

export default FetchContext;
