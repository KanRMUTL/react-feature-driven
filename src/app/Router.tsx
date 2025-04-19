import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import MovieDetailPage from "./pages/MovieDetailPage";

const Router = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/movie/:id" element={<MovieDetailPage />} />
    </Routes>
  );
};

export default Router;
