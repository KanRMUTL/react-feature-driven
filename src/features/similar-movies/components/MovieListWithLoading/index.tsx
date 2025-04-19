import { withLoading } from "shared/components/hoc/withLoading";
import { SimilarMovies } from "./SimilarMovies";
import { MovieLoading } from "./MovieLoading";

export const MovieListWithLoading = withLoading(SimilarMovies, MovieLoading);