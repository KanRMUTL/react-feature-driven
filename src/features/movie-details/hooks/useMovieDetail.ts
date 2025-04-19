import { useQuery } from "@tanstack/react-query";
import { getMovieDetail } from "../services/movieDetailService";
import { MovieDetail } from "../types/movieDetail";

export const useMovieDetail = (movieId: number) => {
  const { data, isLoading } = useQuery<MovieDetail>({
    queryKey: ["movie", movieId],
    queryFn: () => getMovieDetail(movieId),
    enabled: !!movieId,
  });

  const director = data?.credits.crew.find((p) => p.job === "Director");
  const actors = data?.credits.cast.slice(0, 5) || [];

  return {
    data,
    isLoading,
    director,
    actors,
  };
};
