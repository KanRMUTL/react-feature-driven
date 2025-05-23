import { tmdbClient } from "shared/api/tmdbClient";
import { PopularMoviesResponse, SearchMoviesResponse } from "../types/movie";

export type MovieCategory =
  | "popular"
  | "top_rated"
  | "upcoming"
  | "now_playing";

export const getMoviesByCategory = (
  category: MovieCategory,
  page = 1
): Promise<PopularMoviesResponse> =>
  tmdbClient
    .get(`/movie/${category}`, { params: { page } })
    .then((res) => res.data);

export const searchMovies = (
  query: string,
  page = 1
): Promise<SearchMoviesResponse> =>
  tmdbClient
    .get("/search/movie", { params: { query, page } })
    .then((res) => res.data);
