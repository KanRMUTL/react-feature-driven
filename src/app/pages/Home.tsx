import { useSearchParams } from "react-router-dom";
import { MovieListContainer } from "features/movies-list/containers/MovieListContainer";
import { Box } from "shared/components/ui/Box";
import { Navigation } from "features/movies-list/components/MovieNavigation";
import { SearchBar } from "shared/components/ui/SearchBar";
import { CATEGORY_MAP } from "features/movies-list/constant/category";

const Home = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const searchKeyword = searchParams.get("q") || "";
  const currentPage = Number(searchParams.get("page")) || 1;
  const category =
    CATEGORY_MAP[searchParams.get("category") || ""] || "popular";

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

  const handleSelectCategory = (_category: string) => {
    setSearchParams({ category: _category, page: "1" });
  };

  return (
    <Box $flex $direction="column" $gap="sm" $bg="surface">
      <Navigation category={category} onClick={handleSelectCategory} />
      <SearchBar onSearch={handleSearch} initialValue={searchKeyword} />
      <MovieListContainer
        currentPage={currentPage}
        searchKeyword={searchKeyword}
        category={category}
        handlePageChange={handlePageChange}
      />
    </Box>
  );
};

export default Home;
