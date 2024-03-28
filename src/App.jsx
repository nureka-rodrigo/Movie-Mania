import "./App.css";
import Index from "./pages/Index.jsx";
import { Route, Routes } from "react-router-dom";
import Landing from "./components/Landing.jsx";
import Error404 from "./pages/Error404.jsx";
import MovieList from "./pages/MovieList.jsx";
import TvShowList from "./pages/TvShowList.jsx";
import Movie from "./pages/Movie.jsx";
import TvShow from "./pages/TvShow.jsx";

function App() {
  return (
    <>
      <div className="bg-white dark:bg-black transition duration-500">
        <Routes>
          <Route path={"/"} element={<Landing />} />
          <Route path={"/home"} element={<Index />} />
          <Route path={"/movies"} element={<MovieList />} />
          <Route path={"/tv-shows"} element={<TvShowList />} />
          <Route path={"/movie/:id"} element={<Movie />} />
          <Route path={"/tv-show/:id"} element={<TvShow />} />
          <Route path={"*"} element={<Error404 />} />
        </Routes>
      </div>
    </>
  );
}

export default App;
