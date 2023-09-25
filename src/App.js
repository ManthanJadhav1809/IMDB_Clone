// import logo from './logo.svg';
import './App.css';
import {BrowserRouter as Router,Routes,Route} from "react-router-dom"
import Header from './Components/header/Header';
import Home from './pages/Home/Home';
import MovieList from './Components/MovieList/MovieList';
import Movie from './pages/MovieDetail/Movie';

function App() {
  return (
    <div className="App">
      <Router>
        <Header/>
        <Routes>
          <Route index element={<Home></Home>}></Route>
          <Route path="movie/:id" element={<Movie></Movie>}></Route>
          <Route path="movies/:type" element={<MovieList></MovieList>}></Route>
          <Route path="/*" element={<h1>Error Page</h1>}></Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
