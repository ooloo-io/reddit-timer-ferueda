import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import GlobalStyle from './styles/globalStyles';

import { HOME, SEARCH } from './constants/routes';

import Home from './pages/Home';
import Search from './pages/Search';

const App = () => (
  <>
    <GlobalStyle />
    <Router>
      <Route exact path={HOME}>
        <Home />
      </Route>

      <Route path={SEARCH}>
        <Search />
      </Route>
    </Router>
  </>
);

export default App;
