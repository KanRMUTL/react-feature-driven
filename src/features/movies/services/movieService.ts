import { tmdbClient } from "../../../shared/api/tmdbClient";
import {
  PopularMoviesResponse,
  SearchMoviesResponse,
  MovieDetail,
} from "../types/movie";

export const getPopularMovies = (page = 1): Promise<PopularMoviesResponse> =>
  tmdbClient
    .get("/movie/popular", { params: { page } })
    .then((res) => res.data);

export const searchMovies = (
  query: string,
  page = 1
): Promise<SearchMoviesResponse> =>
  tmdbClient
    .get("/search/movie", { params: { query, page } })
    .then((res) => res.data);

export const getMovieDetail = (movieId: number): Promise<MovieDetail> =>
  tmdbClient
    .get(`/movie/${movieId}`, {
      params: { append_to_response: "credits,images" },
    })
    .then((res) => res.data);
