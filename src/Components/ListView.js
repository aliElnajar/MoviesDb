import { Link } from "react-router-dom";
import styled from "styled-components";
import { altImg } from "./Movie";
const ListView = ({ movies }) => {
  return (
    <Wrapper className=" movies">
      {movies.map((movie, index) => {
        const { Poster, Year, Title, Type, imdbID: id } = movie;
        return (
          <section key={id} className="list-container">
            <img src={Poster === "N/A" ? altImg : Poster} alt={Title} />
            <div className="data-container">
              <h3>{Title}</h3>
              <h4>
                <span>Type: </span> {Type}
              </h4>
              <h4>
                <span>Date: </span>
                {Year}
              </h4>
              <Link className="btn" to={`/movies/${id} `}>
                Details
              </Link>
              <hr />
            </div>
          </section>
        );
      })}
    </Wrapper>
  );
};

export default ListView;

const Wrapper = styled.main`
  display: flex;
  flex-direction: column;
  gap: 2rem;
  .list-container {
    display: flex;
    gap: 1rem;
    img {
      height: 300px;
      width: 200px;
    }
    hr {
      margin-top: 6rem;
      width: 200px;
    }

    .data-container {
      padding-left: 1rem;
      display: flex;
      flex-direction: column;
      gap: 1rem;
      align-items: start;
    }
  }
`;
