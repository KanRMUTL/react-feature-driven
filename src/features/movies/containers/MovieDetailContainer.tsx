import { useParams } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import { getMovieDetail } from "../services/movieService";
import Skeleton from "react-loading-skeleton";
import styled from "styled-components";
import { Title, Text } from "../../../shared/components/ui/Typography";

const Wrapper = styled.div`
  padding: 1rem;
`;

const Poster = styled.img`
  width: 300px;
  border-radius: 8px;
`;

export const MovieDetailContainer = () => {
  const { id } = useParams();
  const { data, isLoading } = useQuery({
    queryKey: ["movie", id],
    queryFn: () => getMovieDetail(Number(id)),
    enabled: !!id, // ป้องกันไม่ให้ fetch ถ้ายังไม่มี id
  });

  if (isLoading || !data) return <Skeleton count={10} />;

  const director = data.credits.crew.find((p: any) => p.job === "Director");
  const actors = data.credits.cast.slice(0, 5);

  return (
    <Wrapper>
      <Poster
        src={`https://image.tmdb.org/t/p/w500${data.poster_path}`}
        alt={data.title}
      />
      <Title>{data.title}</Title>
      <Text>⭐ {data.vote_average}</Text>
      <Text>📝 {data.overview}</Text>
      <Text>🎬 Director: {director?.name}</Text>
      <Text>🎭 นักแสดง: {actors.map((a: any) => a.name).join(", ")}</Text>
      <Text>📅 เข้าฉาย: {data.release_date}</Text>
    </Wrapper>
  );
};
