import { withLoading } from "shared/components/hoc/withLoading";
import { MovieDetails, MovieDetailsLoading } from "./MovieDetails";

export const MovieDetailWithLoading = withLoading(
  MovieDetails,
  MovieDetailsLoading
);
