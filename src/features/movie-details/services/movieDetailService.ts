import { tmdbClient } from "shared/api/tmdbClient";
import { MovieDetail } from "../types/movieDetail";

export const getMovieDetail = (movieId: number): Promise<MovieDetail> =>
  tmdbClient
    .get(`/movie/${movieId}`, {
      params: { append_to_response: "credits,images" },
    })
    .then((res) => res.data);