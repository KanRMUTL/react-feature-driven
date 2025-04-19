import { MovieCard } from "shared/components/movie/MovieCard";
import { Movie } from "shared/types/movie";

interface SimilarMoviesProps {
  movies: Movie[];
  onClickMovie: (movieId: number) => void;
}

export const SimilarMovies = ({ movies, onClickMovie }: SimilarMoviesProps) => {
  return (
    <>
      {movies.slice(0, 6).map((movie) => (
        <MovieCard
          key={movie.id}
          {...movie}
          onClick={() => onClickMovie(movie.id)}
        />
      ))}
    </>
  );
};
