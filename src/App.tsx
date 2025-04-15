import { BrowserRouter, Routes, Route } from "react-router-dom";
import { WebLayout } from "./shared/components/layout/WebLayout";
import { MovieListContainer } from "./features/movies/containers/MovieListContainer";
import { MovieDetailContainer } from "./features/movies/containers/MovieDetailContainer";

const App = () => {
  return (
    <BrowserRouter>
      <WebLayout>
        <Routes>
          <Route path="/" element={<MovieListContainer />} />
          <Route path="/movie/:id" element={<MovieDetailContainer />} />
        </Routes>
      </WebLayout>
    </BrowserRouter>
  );
};

export default App;
