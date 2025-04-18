import { useParams } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import { getMovieDetail } from "../services/movieDetailService";
import { MovieDetail } from "../types/movieDetail";

export const useMovieDetail = () => {
  const { id } = useParams();
  const { data, isLoading } = useQuery<MovieDetail>({
    queryKey: ["movie", id],
    queryFn: () => getMovieDetail(Number(id)),
    enabled: !!id,
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
