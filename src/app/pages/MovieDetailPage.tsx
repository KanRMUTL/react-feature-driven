import { MovieDetailContainer } from "features/movie-details/containers/MovieDetailContainer";
import SimilarMoviesContainer from "features/similar-movies/containers/SimilarMoviesContainer";
import { Box } from "shared/components/ui/Box";
import { useParams } from "react-router-dom";
import { Divider } from "shared/components/ui/Divider";

const MovieDetailPage = () => {
  const { id } = useParams();

  return (
    <Box $flex $direction="column">
      <MovieDetailContainer />
      <Divider $variant="solid"/>
      <SimilarMoviesContainer movieId={Number(id)} />
    </Box>
  );
}

export default MovieDetailPage