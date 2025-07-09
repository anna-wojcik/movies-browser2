import { Switch, Route, HashRouter, Redirect } from "react-router-dom/cjs/react-router-dom.min";
import MoviesListPage from "./features/moviesList/MoviesListPage";
import PeopleListPage from "./features/peopleList/PeopleListPage";
import Header from "./common/Header";

function App() {
  return (
      <HashRouter>
        <Header />

        <Switch>
          <Route path="/movies">
            <MoviesListPage />
          </Route>
          <Route path="/people">
            <PeopleListPage />
          </Route>
          <Route path="/">
            <Redirect to="/movies"/>
          </Route>
        </Switch>
      </HashRouter>
  );
}

export default App;
