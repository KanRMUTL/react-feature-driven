import { useSearchParams } from "react-router-dom";
import { useSearchMovies } from "../hooks/useSearchMovies";
import { useMovieNavigation } from "../hooks/useMovienavigation";
import { MovieCard } from "../components/MovieCard";
import { SearchBar } from "../components/SearchBar";
import styled from "styled-components";
import { Box } from "../../../shared/components/ui/Box";
import { Pagination } from "../../../shared/components/ui/Pagination";

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
  gap: ${({ theme }) => theme.spacing.md};
  margin-bottom: ${({ theme }) => theme.spacing.xl};
`;

export const MovieListContainer = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const searchKeyword = searchParams.get("q") || "";
  const currentPage = Number(searchParams.get("page")) || 1;
  const { data, isLoading } = useSearchMovies(currentPage, searchKeyword);
  const { handleMovieClick } = useMovieNavigation();

  const handleSearch = (keyword: string) => {
    setSearchParams({ q: keyword, page: "1" });
  };

  const handlePageChange = (page: number) => {
    setSearchParams((prev) => {
      prev.set("page", page.toString());
      return prev;
    });
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  if (isLoading || !data) return null;

  const totalPages = Math.min(data.total_pages, 500);


  return (
    <Box>
      <SearchBar onSearch={handleSearch} initialValue={searchKeyword} />
      <Grid>
        {data.results.map((movie) => (
          <MovieCard
            key={movie.id}
            {...movie}
            onClick={() => handleMovieClick(movie.id)}
          />
        ))}
      </Grid>
      <Pagination
        currentPage={currentPage}
        totalPages={totalPages}
        onPageChange={handlePageChange}
      />
    </Box>
  );
};
