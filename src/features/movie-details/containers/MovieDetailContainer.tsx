import { useMovieDetail } from "../hooks/useMovieDetail";
import { MovieDetailWithLoading } from "../components/MovieDetailWithLoading";
import { useParams } from "react-router-dom";

export const MovieDetailContainer = () => {
  const { id } = useParams();
  const { data, director, actors, isLoading } = useMovieDetail(Number(id));

  return (
    <MovieDetailWithLoading
      movie={data}
      director={director}
      actors={actors}
      isLoading={isLoading}
    />
  );
};
