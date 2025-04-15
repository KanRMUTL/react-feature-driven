import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { MovieListContainer } from './features/movies/containers/MovieListContainer'
import { MovieDetailContainer } from './features/movies/containers/MovieDetailContainer'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<MovieListContainer page={1} />} />
        <Route path='/movie/:id' element={<MovieDetailContainer />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App