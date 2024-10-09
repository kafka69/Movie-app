import "./App.css";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Login from "./components/Login";
import HomePage from "./pages/HomePage";
import Header from "./components/Header";
import { MovieProvider } from "./contexts/MovieContext";
import Movies from "./components/Movies";
import MovieDetail from "./pages/MovieDetail";
import CategoryPage from "./pages/CategoryPage";
import SearchPage from "./pages/SearchPage";

function App() {
  return (
    <MovieProvider>
    <Router>
      <Header/>
      <Routes>
        <Route path="/" element={<Login/>} />
        <Route path="/home" element={<HomePage />} />
        <Route path="/movies" element={<Movies />} />
        <Route path="/detail/:id" element={<MovieDetail />} />
        <Route path="/category" element={<CategoryPage />} />
        <Route path="/search" element={<SearchPage/>}/>
      </Routes>
    </Router>
    </MovieProvider>
  );
}

export default App;
