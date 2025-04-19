import { LoadingMovieCard } from "shared/components/movie/MovieCard";

export const MovieLoading = () => {
  return Array.from({ length: 20 }).map((_, index) => (
    <LoadingMovieCard key={index} />
  ));
};
