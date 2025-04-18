import { Movie } from "shared/types/movie";
export interface PaginatedResponse<T> {
  page: number;
  results: T[];
  total_pages: number;
  total_results: number;
}

export type PopularMoviesResponse = PaginatedResponse<Movie>;

export type SearchMoviesResponse = PaginatedResponse<Movie>;