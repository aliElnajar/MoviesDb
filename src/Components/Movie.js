import { Link } from "react-router-dom";
export const altImg =
  "https://upload.wikimedia.org/wikipedia/commons/f/fc/No_picture_available.png";

const Movie = ({ Poster, Year, Title, id, Type }) => {
  return (
    <Link to={`/movies/${id}`} className="movie">
      <img src={Poster === "N/A" ? altImg : Poster} />
      <div className="movie-info">
        <h4 className="title">{Title}</h4>
        <p>{Type}</p>
        <p>{Year}</p>
      </div>
    </Link>
  );
};

export default Movie;
