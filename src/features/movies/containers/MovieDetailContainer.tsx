import styled from "styled-components";
import { Title, Text } from "../../../shared/components/ui/Typography";
import { useMovieDetail } from "../hooks/useMovieDetail";

const Wrapper = styled.div`
  padding: 1rem;
`;

const Poster = styled.img`
  width: 300px;
  border-radius: 8px;
`;

export const MovieDetailContainer = () => {
  const { data, isLoading, director, actors } = useMovieDetail();

  if (isLoading || !data) return null;
  const directorName = director?.name || "";
  return (
    <Wrapper>
      <Poster
        src={`https://image.tmdb.org/t/p/w500${data.poster_path}`}
        alt={data.title}
      />
      <Title>{data.title}</Title>
      <Text>⭐ {data.vote_average}</Text>
      <Text>📝 {data.overview}</Text>
      <Text>🎬 Director: {directorName}</Text>
      <Text>🎭 นักแสดง: {actors.map((a) => a.name).join(", ")}</Text>
      <Text>📅 เข้าฉาย: {data.release_date}</Text>
    </Wrapper>
  );
};
