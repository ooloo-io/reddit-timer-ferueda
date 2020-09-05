import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import GlobalStyle from './styles/globalStyles';

import * as ROUTES from './constants/routes';

import Home from './pages/Home';
import Search from './pages/Search';
import Header from './components/Header/Header';

const App = () => (
  <>
    <GlobalStyle />
    <Router>
      <Header />

      <Route exact path={ROUTES.HOME}>
        <Home />
      </Route>

      <Route path={ROUTES.SEARCH}>
        <Search />
      </Route>
    </Router>
  </>
);

export default App;
