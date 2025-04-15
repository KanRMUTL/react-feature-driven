import { MovieCard,MovieCardProps } from "../MovieCard";

interface Movie extends MovieCardProps {
  id: number;
}

interface MovieListProps {
  onClick: (id: number) => void;
  movieList: Movie[]
}

export const MovieList = ({onClick, movieList}: MovieListProps) => {
  return movieList.map((movie) => (
    <MovieCard key={movie.id} {...movie} onClick={() => onClick(movie.id)}
    />
  ));
};