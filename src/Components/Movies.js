import FetchContext from "../Store/FetchContext";
import { useContext } from "react";
import Movie from "./Movie";
import ListView from "./ListView";
const Movies = () => {
  const { movies, loading, gridView } = useContext(FetchContext);
  if (loading) {
    return <div className="loading"></div>;
  }

  if (!gridView) {
    return <ListView movies={movies} />;
  }
  return (
    <div className="movies">
      {movies &&
        movies.length > 0 &&
        movies.map((movie) => {
          return <Movie key={movie.imdbID} id={movie.imdbID} {...movie} />;
        })}
    </div>
  );
};

export default Movies;
