import { Switch, Route, HashRouter, Redirect } from "react-router-dom/cjs/react-router-dom.min";
import MoviesPage from "./features/movies/MoviesPage";
import PeoplePage from "./features/people/PeoplePage";
import Header from "./common/Header";
import { toMovies, toPeople, toPerson } from "./routes";
import PersonPage from "./features/people/PersonPage";

function App() {
  return (
      <HashRouter>
        <Header />

        <Switch>
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
            <Redirect to={toMovies()}/>
          </Route>
        </Switch>
      </HashRouter>
  );
}

export default App;
