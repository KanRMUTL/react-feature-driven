import { useMovieDetail } from "../hooks/useMovieDetail";
import styled from "styled-components";
import { Box } from "../../../shared/components/ui/Box";

const DetailContainer = styled(Box)`
  max-width: 1200px;
  margin: 0 auto;
  padding: ${({ theme }) => theme.spacing.xl};
`;

const MovieHeader = styled(Box)`
  display: flex;
  gap: ${({ theme }) => theme.spacing.xl};
  margin-bottom: ${({ theme }) => theme.spacing.xl};
`;

const MoviePoster = styled.img`
  width: 300px;
  height: 450px;
  object-fit: cover;
  border-radius: ${({ theme }) => theme.borderRadius.lg};
  box-shadow: ${({ theme }) => theme.shadows.md};
`;

const MovieContent = styled(Box)`
  flex: 1;
`;

const MovieTitle = styled.h1`
  font-size: ${({ theme }) => theme.typography.h1.size};
  font-weight: ${({ theme }) => theme.typography.h1.weight};
  margin: 0 0 ${({ theme }) => theme.spacing.md};
  color: ${({ theme }) => theme.colors.text.primary};
`;

const MovieMeta = styled(Box)`
  display: flex;
  align-items: center;
  gap: ${({ theme }) => theme.spacing.md};
  margin-bottom: ${({ theme }) => theme.spacing.lg};
`;

const Rating = styled.div`
  display: flex;
  align-items: center;
  gap: ${({ theme }) => theme.spacing.sm};
  color: ${({ theme }) => theme.colors.secondary.main};
  font-weight: ${({ theme }) => theme.typography.h2.weight};
  font-size: ${({ theme }) => theme.typography.h2.size};
`;

const Overview = styled.p`
  font-size: ${({ theme }) => theme.typography.body.size};
  line-height: ${({ theme }) => theme.typography.body.lineHeight};
  color: ${({ theme }) => theme.colors.text.secondary};
  margin-bottom: ${({ theme }) => theme.spacing.xl};
`;

const CastSection = styled(Box)`
  margin-top: ${({ theme }) => theme.spacing.xl};
`;

const SectionTitle = styled.h2`
  font-size: ${({ theme }) => theme.typography.h2.size};
  font-weight: ${({ theme }) => theme.typography.h2.weight};
  margin: 0 0 ${({ theme }) => theme.spacing.md};
  color: ${({ theme }) => theme.colors.text.primary};
`;

const CastList = styled.div`
  display: flex;
  gap: ${({ theme }) => theme.spacing.md};
  flex-wrap: wrap;
`;

const CastItem = styled(Box)`
  background: ${({ theme }) => theme.colors.background.surface};
  padding: ${({ theme }) => theme.spacing.sm};
  border-radius: ${({ theme }) => theme.borderRadius.md};
  font-weight: ${({ theme }) => theme.typography.body.weight};
`;

export const MovieDetailContainer = () => {
  const { data, isLoading, director, actors } = useMovieDetail();

  if (isLoading || !data) return null;

  return (
    <DetailContainer>
      <MovieHeader>
        <MoviePoster
          src={`https://image.tmdb.org/t/p/w500${data.poster_path}`}
          alt={data.title}
        />
        <MovieContent>
          <MovieTitle>{data.title}</MovieTitle>
          <MovieMeta>
            <Rating>
              <span>⭐</span>
              <span>{data.vote_average.toFixed(1)}</span>
            </Rating>
            <span>📅 {data.release_date}</span>
          </MovieMeta>
          <Overview>{data.overview}</Overview>
          {director && (
            <Box>
              <strong>🎬 Director:</strong> {director.name}
            </Box>
          )}
        </MovieContent>
      </MovieHeader>

      <CastSection>
        <SectionTitle>Cast</SectionTitle>
        <CastList>
          {actors.map((actor) => (
            <CastItem key={actor.id}>{actor.name}</CastItem>
          ))}
        </CastList>
      </CastSection>
    </DetailContainer>
  );
};
