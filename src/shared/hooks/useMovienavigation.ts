import { useNavigate } from "react-router-dom";

export const useMovieNavigation = () => {
  const navigate = useNavigate();

  const handleMovieClick = (movieId: number) => {
    navigate(`/movie/${movieId}`);
  };

  return {
    handleMovieClick,
  };
};