import styled from 'styled-components'

const Card = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  width: 200px;
`

export const MovieCard = ({ poster_path, title, vote_average }: any) => (
  <Card>
    <img src={`https://image.tmdb.org/t/p/w300${poster_path}`} alt={title} />
    <strong>{title}</strong>
    <span>⭐ {vote_average}</span>
  </Card>
)