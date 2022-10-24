import { useState, useEffect, useCallback } from "react";
const API_ENDPOINT = `https://www.omdbapi.com/?apikey=${process.env.REACT_APP_MOVIE_API_KEY}`;

export const useFetch = (param) => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useStat e(true);
  const [error, setError] = useState({ show: false, msg: "" });

  const fetchMovie = useCallback(async () => {
    setLoading(true);
    try {
      const response = await fetch(`${API_ENDPOINT}${param}`);
      const data = await response.json();
      if (data.Response === "False") {
        throw new Error(data.Error);
      }
      data.Search ? setData(data.Search) : setData(data);

      setError({ show: false, msg: "" });
    } catch (err) {
      setError({ show: true, msg: err.message });
    }
    setLoading(false);
  }, [param]);

  useEffect(() => {
    fetchMovie();
  }, [param]);
  return { loading, error, data };
};
