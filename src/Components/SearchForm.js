import FetchContext from "../Store/FetchContext";
import { useContext } from "react";
import { BsFillGridFill, BsList } from "react-icons/bs";
import styled from "styled-components";
const SearchForm = () => {
  const {
    searchHandler,
    error,
    searchTerm,
    gridHandler,
    listHandler,
    gridView,
  } = useContext(FetchContext);

  const changeHandler = (e) => {
    searchHandler(e.target.value);
  };
  const submitHandler = (event) => {
    event.preventDefault();
  };

  return (
    <div className="section form-container">
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
      <Wrapper>
        <button onClick={listHandler} className={gridView ? "" : "active"}>
          <BsList />
        </button>
        <button onClick={gridHandler} className={gridView ? "active" : ""}>
          <BsFillGridFill />
        </button>
      </Wrapper>
    </div>
  );
};

export default SearchForm;

const Wrapper = styled.div`
  display: flex;
  gap: 0.5rem;
  margin-top: 10rem;
  .active {
    background: #248888;
    color: #fff;
  }

  button {
    background: transparent;
    border: 0.5px solid transparent;
    text-align: center;

    color: #248888;
    width: 1.5rem;
    border-radius: 4px;
    height: 1.5rem;
    cursor: pointer;
  }
`;
