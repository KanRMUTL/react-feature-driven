import { MovieDetailContainer } from "features/movie-details/containers/MovieDetailContainer";
import SimilarMoviesContainer from "features/similar-movies/containers/SimilarMoviesContainer";
import { Box } from "shared/components/ui/Box";
import { useParams } from "react-router-dom";
import { Divider } from "shared/components/ui/Divider";
import { useEffect } from "react";

const MovieDetailPage = () => {
  const { id } = useParams();

  // scroll to top when id update
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [id]);

  return (
    <Box $flex $direction="column">
      <MovieDetailContainer />
      <Divider $variant="solid" />
      <SimilarMoviesContainer movieId={Number(id)} />
    </Box>
  );
};

export default MovieDetailPage;
