import { LoadingMovieCard } from "../MovieCard";

export const MovieLoading = () => {
  return Array.from({ length: 20 }).map((_, index) => (
    <LoadingMovieCard key={index} />
  ));
};