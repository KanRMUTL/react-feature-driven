import { BrowserRouter, Routes, Route } from "react-router-dom";
import { WebLayout } from "./shared/components/layout/WebLayout";
import { MovieListContainer } from "./features/movies-list/containers/MovieListContainer";
import MovieDetailPage from "./app/pages/MovieDetailPage";
const App = () => {
  return (
    <BrowserRouter>
      <WebLayout>
        <Routes>
          <Route path="/" element={<MovieListContainer />} />
          <Route path="/movie/:id" element={<MovieDetailPage />} />
        </Routes>
      </WebLayout>
    </BrowserRouter>
  );
};

export default App;
