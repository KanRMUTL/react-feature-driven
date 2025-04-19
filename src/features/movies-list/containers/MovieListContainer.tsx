import { useSearchMovies } from "../hooks/useSearchMovies";
import { useMovieNavigation } from "shared/hooks/useMovienavigation";
import styled from "styled-components";
import { MovieListWithLoading } from "../components/MovieListWithLoading";
import { Pagination } from "shared/components/ui/Pagination";
import { MovieCategory } from "../services/movieService";

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
  gap: ${({ theme }) => theme.spacing.md};
  margin-bottom: ${({ theme }) => theme.spacing.xl};
`;

interface MovieListContainerProps {
  currentPage: number;
  searchKeyword: string;
  category: MovieCategory;
  handlePageChange: (page: number) => void;
}

export const MovieListContainer = ({
  currentPage,
  searchKeyword,
  category,
  handlePageChange,
}: MovieListContainerProps) => {
  const { data, isLoading } = useSearchMovies(
    currentPage,
    searchKeyword,
    category
  );

  const movieList = data?.results || [];
  const totalPages = Math.min(data?.total_pages || 0, 500);
  const { handleMovieClick } = useMovieNavigation();

  return (
    <>
      <Grid>
        <MovieListWithLoading
          movieList={movieList}
          onClick={handleMovieClick}
          isLoading={isLoading}
        />
      </Grid>
      <Pagination
        currentPage={currentPage}
        totalPages={totalPages}
        onPageChange={handlePageChange}
      />
    </>
  );
};
