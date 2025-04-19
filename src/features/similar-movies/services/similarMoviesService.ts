import { tmdbClient } from "shared/api/tmdbClient";
import { SimilarMoviesResponse } from "../types/similarMovies";

export const getSimilarMovies = (
  movieId: number
): Promise<SimilarMoviesResponse> =>
  tmdbClient.get(`/movie/${movieId}/similar`).then((res) => res.data);
