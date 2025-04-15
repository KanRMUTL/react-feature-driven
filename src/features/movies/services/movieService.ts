import { tmdbClient } from "../../../shared/api/tmdbClient"

export const getPopularMovies = (page = 1) =>
  tmdbClient.get('/movie/popular', { params: { page } }).then(res => res.data)

export const searchMovies = (query: string, page = 1) =>
  tmdbClient.get('/search/movie', { params: { query, page } }).then(res => res.data)

export const getMovieDetail = (movieId: number) =>
  tmdbClient.get(`/movie/${movieId}`, { params: { append_to_response: 'credits,images' } }).then(res => res.data)
