import { usePopularMovies } from "../hooks/usePopularMovies";
import { useMovieNavigation } from "../hooks/useMovienavigation";
import { MovieCard } from "../components/MovieCard";
import styled from "styled-components";

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
  gap: 1rem;
`;

export const MovieListContainer = () => {
  const { data, isLoading } = usePopularMovies(1);
  const { handleMovieClick } = useMovieNavigation();
  if (isLoading || !data) return null;

  return (
    <Grid>
      {data.results.map((movie) => (
        <MovieCard
          key={movie.id}
          {...movie}
          onClick={() => handleMovieClick(movie.id)}
        />
      ))}
    </Grid>
  );
};
