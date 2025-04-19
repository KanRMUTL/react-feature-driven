import styled from "styled-components";
import { useMovieNavigation } from "shared/hooks/useMovienavigation";
import { useSimilarMovies } from "../hooks/useSimilarMovies";
import { Box } from "shared/components/ui/Box";
import { MovieListWithLoading } from "../components/MovieListWithLoading";

type SimilarMoviesContainer = {
  movieId: number;
};

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
  gap: ${({ theme }) => theme.spacing.md};
  margin-top: ${({ theme }) => theme.spacing.xl};
`;

const Title = styled.h2`
  color: ${({ theme }) => theme.colors.text.primary};
  margin-bottom: ${({ theme }) => theme.spacing.md};
`;

interface SimilarMoviesContainerProps {
  movieId: number;
}

const SimilarMoviesContainer = ({ movieId }: SimilarMoviesContainerProps) => {
  const { data, isLoading } = useSimilarMovies(movieId);
  const { handleMovieClick } = useMovieNavigation();
  const movies = data?.results || [];

  return (
    <Box>
      <Title>Similar Movies</Title>
      <Grid>
        <MovieListWithLoading
          movies={movies}
          onClickMovie={handleMovieClick}
          isLoading={isLoading}
        />
      </Grid>
    </Box>
  );
};

export default SimilarMoviesContainer;
