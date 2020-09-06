import React from 'react';
import { Switch, Route } from 'react-router-dom';
import styled, { ThemeProvider } from 'styled-components';
import GlobalStyle from './styles/globalStyles';

import * as ROUTES from './constants/routes';
import theme from './styles/theme';

import Home from './pages/Home';
import Search from './pages/Search';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';

const AppContainer = styled.div`
  max-width: var(--container-width);
  margin: 0 auto;
`;

const MainContainer = styled.main`
  height: ${(props) => `calc(100vh - ${props.theme.header.height} - ${props.theme.footer.height})`};
  width: 100%;
`;

const App = () => (
  <ThemeProvider theme={theme}>
    <GlobalStyle />
    <AppContainer>
      <Header />

      <MainContainer>
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
      </MainContainer>

      <Footer />
    </AppContainer>
  </ThemeProvider>
);

export default App;
