import { Switch, Route, HashRouter, Redirect } from "react-router-dom/cjs/react-router-dom.min";
import MoviesPage from "./features/movies/MoviesPage";
import PeoplePage from "./features/people/PeoplePage";
import Header from "./common/Header";

function App() {
  return (
      <HashRouter>
        <Header />

        <Switch>
          <Route path="/movies">
            <MoviesPage />
          </Route>
          <Route path="/people">
            <PeoplePage />
          </Route>
          <Route path="/">
            <Redirect to="/movies"/>
          </Route>
        </Switch>
      </HashRouter>
  );
}

export default App;
