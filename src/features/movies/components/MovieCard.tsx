import styled from "styled-components";

const Card = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  width: 200px;
`;

interface MovieCardProps {
  poster_path: string | null;
  title: string;
  vote_average: number;
  onClick?: () => void;
}

export const MovieCard = ({
  poster_path,
  title,
  vote_average,
  onClick,
}: MovieCardProps) => (
  <Card onClick={onClick}>
    <img
      src={
        poster_path
          ? `https://image.tmdb.org/t/p/w300${poster_path}`
          : "/placeholder.jpg"
      }
      alt={title}
    />
    <strong>{title}</strong>
    <span>⭐ {vote_average}</span>
  </Card>
);
