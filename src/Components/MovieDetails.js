import { useParams, Link } from "react-router-dom";
import { useFetch } from "../hooks/useFetch";
const MovieDetails = () => {
  const { id } = useParams();

  const { data: movie, loading, error } = useFetch(`&i=${id}`);

  {
    loading && <div className="loading"></div>;
  }
  {
    error.show && (
      <div className="page-error">
        <h1>{error.msg}</h1>
        <Link to="/" className="btn">
          back to movies
        </Link>
      </div>
    );
  }
  const {
    Title: title,
    Year: year,
    Plot: plot,
    Poster: poster,
    Actors,
  } = movie;
  return (
    <section className="single-movie">
      <img src={poster} alt={title} />
      <div className="single-movie-info">
        <h2>
          <span>Title</span>
          {title}
        </h2>
        <h3>
          <span>Actors:</span> {Actors}
        </h3>
        <p>
          <span>movie line : </span>
          {plot}
        </p>
        <h4>
          <span>Release year:</span>
          {year}
        </h4>
        <Link className="btn" to="/">
          back home
        </Link>
      </div>
    </section>
  );
};

export default MovieDetails;
