import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  :root {
    --titles-font: 'Bitter', sans-serif;
    --main-font: 'Montserrat', sans-serif;
    --bg--color: #fff;
    --container-width: 1440px;
    --main-black: #000;
    --gray-base: #93918f;
    --primary-color: #fdb755;
    --link-color: #0087ff;
    --brownish-grey: #636363;
    --main-header: 38px;
    --section-header: 24px;
  }

  html {
    box-sizing: border-box;
    font-size: 16px;
  }

  body {
    font-family: var(--main-font);
  }

  *, *:before, *:after {
    box-sizing: inherit;
  }

  body, h1, h2, h3, h4, h5, h6, p, ol, ul {
    margin: 0;
    padding: 0;
    font-weight: normal;
  }

  ol, ul {
    list-style: none;
  }

  img {
    max-width: 100%;
    height: auto;
  }
`;

export default GlobalStyle;
