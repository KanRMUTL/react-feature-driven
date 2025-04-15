import { useQuery } from '@tanstack/react-query'
import { getPopularMovies } from '../services/movieService'

export const usePopularMovies = (page: number) => {
  return useQuery({
    queryKey: ['popular-movies', page],
    queryFn: () => getPopularMovies(page),
  })
}

