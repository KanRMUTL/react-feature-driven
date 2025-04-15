import { usePopularMovies } from '../hooks/usePopularMovies'
import { MovieCard } from '../components/MovieCard'
import Skeleton from 'react-loading-skeleton'
import styled from 'styled-components'

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
  gap: 1rem;
`

export const MovieListContainer = ({ page }: { page: number }) => {
  const { data, isLoading } = usePopularMovies(page)

  if (isLoading) return <Skeleton count={12} height={320} />

  return (
    <Grid>
      {data.results.map((movie: any) => (
        <MovieCard key={movie.id} {...movie} />
      ))}
    </Grid>
  )
}