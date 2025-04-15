import { withLoading } from "shared/components/hoc/withLoading";
import { MovieList } from "./MovieList";
import { MovieLoading } from "./MovieLoading";

export const MovieListWithLoading = withLoading(MovieList, MovieLoading);