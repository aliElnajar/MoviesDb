import FetchContext from "../Store/FetchContext";
import { useContext } from "react";
const SearchForm = () => {
  const { searchHandler, error, searchTerm } = useContext(FetchContext);

  const changeHandler = (e) => {
    searchHandler(e.target.value);
  };
  const submitHandler = (event) => {
    event.preventDefault();
  };
  return (
    <form className="search-form" onSubmit={submitHandler}>
      <h2>Search Movies</h2>
      <input
        type="text"
        className="form-input"
        placeholder="start searching"
        onChange={changeHandler}
        value={searchTerm}
      />
      {error.show && <p className="error">{error.msg}</p>}
    </form>
  );
};

export default SearchForm;
