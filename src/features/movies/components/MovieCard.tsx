import styled from "styled-components";
import { Card, Box } from "../../../shared/components/ui/Box";

const MovieCardContainer = styled(Card)`
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacing.sm};
  width: 200px;
  cursor: pointer;
  background: ${({ theme }) => theme.colors.background.main};
  border-radius: ${({ theme }) => theme.borderRadius.md};
  overflow: hidden;
  box-shadow: ${({ theme }) => theme.shadows.md};
`;

const MovieImage = styled.img`
  width: 100%;
  height: 300px;
  object-fit: cover;
  border-radius: ${({ theme }) => theme.borderRadius.sm}
    ${({ theme }) => theme.borderRadius.sm} 0 0;
`;

const MovieInfo = styled(Box)`
  padding: ${({ theme }) => theme.spacing.sm};
`;

const MovieTitle = styled.h3`
  font-size: ${({ theme }) => theme.typography.body.size};
  font-weight: ${({ theme }) => theme.typography.body.weight};
  margin: 0;
  color: ${({ theme }) => theme.colors.text.primary};
`;

const Rating = styled.div`
  display: flex;
  align-items: center;
  gap: ${({ theme }) => theme.spacing.xs};
  color: ${({ theme }) => theme.colors.secondary.main};
  font-weight: 500;
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
  <MovieCardContainer onClick={onClick}>
    <MovieImage
      src={
        poster_path
          ? `https://image.tmdb.org/t/p/w300${poster_path}`
          : "/placeholder.jpg"
      }
      alt={title}
    />
    <MovieInfo>
      <MovieTitle>{title}</MovieTitle>
      <Rating>
        <span>⭐</span>
        <span>{vote_average.toFixed(1)}</span>
      </Rating>
    </MovieInfo>
  </MovieCardContainer>
);
