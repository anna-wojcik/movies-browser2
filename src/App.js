import { Switch, Route, HashRouter, Redirect } from "react-router-dom/cjs/react-router-dom.min";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import MoviesPage from "./features/movies/MoviesPage";
import PeoplePage from "./features/people/PeoplePage";
import Header from "./common/Header";
import { toMovie, toMovies, toPeople, toPerson } from "./routes";
import PersonPage from "./features/people/PersonPage";
import MoviePage from "./features/movies/MoviePage";
import { fetchGenres } from "./common/Genres/genresSlice";

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchGenres());
  }, [dispatch]);

  return (
    <HashRouter>
      <Header />

      <Switch>
        <Route path={toMovie()}>
          <MoviePage />
        </Route>
        <Route path={toPerson()}>
          <PersonPage />
        </Route>
        <Route path={toMovies()}>
          <MoviesPage />
        </Route>
        <Route path={toPeople()}>
          <PeoplePage />
        </Route>
        <Route path="/">
          <Redirect to={toMovies()} />
        </Route>
      </Switch>
    </HashRouter>
  );
}

export default App;
