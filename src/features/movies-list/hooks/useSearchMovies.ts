import { useQuery } from "@tanstack/react-query";
import { getMoviesByCategory, searchMovies } from "../services/movieService";
import {
  PopularMoviesResponse,
  SearchMoviesResponse,
} from "features/movies-list/types/movie";
import { MovieCategory } from "../services/movieService";

export const useSearchMovies = (
  page: number,
  searchKeyword?: string,
  category: MovieCategory = "popular"
) => {
  return useQuery<PopularMoviesResponse | SearchMoviesResponse>({
    queryKey: ["movies", searchKeyword, page, category],
    queryFn: () =>
      searchKeyword
        ? searchMovies(searchKeyword, page)
        : getMoviesByCategory(category, page),
  });
};
