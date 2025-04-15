import { useQuery } from "@tanstack/react-query";
import { getPopularMovies, searchMovies } from "../services/movieService";
import { PopularMoviesResponse, SearchMoviesResponse } from "../types/movie";

export const useSearchMovies = (page: number, searchKeyword?: string) => {
  return useQuery<PopularMoviesResponse | SearchMoviesResponse>({
    queryKey: ["movies", searchKeyword, page],
    queryFn: () =>
      searchKeyword
        ? searchMovies(searchKeyword, page)
        : getPopularMovies(page),
  });
};
