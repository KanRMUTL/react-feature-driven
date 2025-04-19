import { useQuery } from "@tanstack/react-query";
import { getSimilarMovies } from "../services/similarMoviesService";

export const useSimilarMovies = (movieId: number) => {
  return useQuery({
    queryKey: ["similar-movies", movieId],
    queryFn: () => getSimilarMovies(movieId),
  });
};