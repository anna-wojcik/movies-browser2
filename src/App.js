import { ThemeProvider } from "styled-components";
import { GlobalStyle } from "./GlobalStyle";
import { Switch, Route, HashRouter, Redirect } from "react-router-dom/cjs/react-router-dom.min";
import MoviesListPage from "./feature/MoviesListPage";
import { themeLight } from "./theme";
import PeopleListPage from "./feature/PeopleListPage";
import Header from "./feature/Header";


function App() {
  return (
    <ThemeProvider theme={themeLight}>
      <GlobalStyle />

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
    </ThemeProvider>
  );
}

export default App;
