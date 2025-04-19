import styled from "styled-components";
import Skeleton from "react-loading-skeleton";
import { Box } from "shared/components/ui/Box";
import { MovieDetail, CastMember, CrewMember } from "../../types/movieDetail";

const DetailContainer = styled(Box)`
  width: 100%;
  max-width: 900px;
  margin: 0 auto;
  padding: ${({ theme }) => theme.spacing.xl};
`;

const Content = styled(Box)`
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
type MovieDetailsProps = {
  movie?: MovieDetail;
  director?: CrewMember;
  actors?: CastMember[];
};

export const MovieDetails = ({
  movie,
  director,
  actors,
}: MovieDetailsProps) => {
  if (!movie || !director || !actors) return null;
  
  return (
    <>
      <DetailContainer>
        <Content>
          <MoviePoster
            src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
            alt={movie.title}
          />
          <MovieContent>
            <MovieTitle>{movie.title}</MovieTitle>
            <MovieMeta>
              <Rating>
                <span>⭐</span>
                <span>{movie.vote_average.toFixed(1)}</span>
              </Rating>
              <span>📅 {movie.release_date}</span>
            </MovieMeta>
            {director && (
              <Box>
                <strong>🎬 Director:</strong> {director.name}
              </Box>
            )}
            <Overview>{movie.overview}</Overview>
            <CastSection>
              <SectionTitle>Cast</SectionTitle>
              <CastList>
                {actors.map((actor) => (
                  <CastItem key={actor.id}>{actor.name}</CastItem>
                ))}
              </CastList>
            </CastSection>
          </MovieContent>
        </Content>
      </DetailContainer>
    </>
  );
};

export const MovieDetailsLoading = () => {
  return (
    <DetailContainer>
      <Content>
        <Skeleton
          width={300}
          height={450}
          style={{ borderRadius: "var(--border-radius-lg)" }}
        />
        <MovieContent>
          <Skeleton
            height={40}
            width="60%"
            style={{ marginBottom: "var(--spacing-md)" }}
          />
          <MovieMeta>
            <Skeleton
              height={32}
              width={100}
              style={{ marginRight: "var(--spacing-md)" }}
            />
            <Skeleton height={24} width={100} />
          </MovieMeta>
          <Box style={{ marginBottom: "var(--spacing-lg)" }}>
            <Skeleton height={24} width={200} />
          </Box>
          <Overview>
            <Skeleton
              height={100}
              style={{ marginBottom: "var(--spacing-xl)" }}
            />
          </Overview>
          <CastSection>
            <Skeleton
              height={32}
              width={100}
              style={{ marginBottom: "var(--spacing-md)" }}
            />
            <CastList>
              {Array.from({ length: 5 }).map((_, index) => (
                <Skeleton
                  key={index}
                  height={32}
                  width={100}
                  style={{ borderRadius: "var(--border-radius-md)" }}
                />
              ))}
            </CastList>
          </CastSection>
        </MovieContent>
      </Content>
    </DetailContainer>
  );
};
