import React from 'react';
import { Switch, Route } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import GlobalStyle from './styles/globalStyles';

import * as ROUTES from './constants/routes';
import theme from './styles/theme';

import Home from './pages/Home';
import Search from './pages/Search';
import Header from './components/Header/Header';

const App = () => (
  <>
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <Header />

      <Switch>
        <Route exact path={ROUTES.HOME}>
          <Home />
        </Route>

        <Route path={ROUTES.SEARCH}>
          <Search />
        </Route>

        <Route>
          <h1>Page not found</h1>
        </Route>
      </Switch>
    </ThemeProvider>
  </>
);

export default App;
