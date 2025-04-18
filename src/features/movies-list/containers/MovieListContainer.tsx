import { useSearchParams, useLocation } from "react-router-dom";
import { useSearchMovies } from "../hooks/useSearchMovies";
import { useMovieNavigation } from "../hooks/useMovienavigation";
import { SearchBar } from "../components/SearchBar";
import styled from "styled-components";
import { Box } from "shared/components/ui/Box";
import { Pagination } from "shared/components/ui/Pagination";
import { MovieListWithLoading } from "../components/MovieListWithLoading";
import { Navigation } from "../components/MovieNavigation";
import { CATEGORY_MAP } from "../constant/category";

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
  gap: ${({ theme }) => theme.spacing.md};
  margin-bottom: ${({ theme }) => theme.spacing.xl};
`;

export const MovieListContainer = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const { pathname } = useLocation();
  const searchKeyword = searchParams.get("q") || "";
  const currentPage = Number(searchParams.get("page")) || 1;
  const category = CATEGORY_MAP[pathname] || 'popular';

  const { data, isLoading } = useSearchMovies(
    currentPage,
    searchKeyword,
    category
  );
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

  const totalPages = Math.min(data?.total_pages || 0, 500);
  const movieList = data?.results || [];

  return (
    <Box $flex $direction="column" $gap="sm">
      <Navigation />
      <SearchBar onSearch={handleSearch} initialValue={searchKeyword} />
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
    </Box>
  );
};
