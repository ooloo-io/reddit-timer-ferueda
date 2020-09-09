import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  @font-face {
    font-family: 'Montserrat';
    font-weight: 400;
    font-style: normal;
    src: url("/fonts/Montserrat-Regular.woff") format("woff"),
      url("/fonts/Montserrat-Regular.woff2") format("woff2");
  }

  @font-face {
    font-family: 'Montserrat';
    font-weight: 500;
    font-style: normal;
    src: url("/fonts/Montserrat-Medium.woff") format("woff"),
      url("/fonts/Montserrat-Medium.woff2") format("woff2");
  }

  @font-face {
    font-family: 'Montserrat';
    font-weight: 600;
    font-style: normal;
    src: url("/fonts/Montserrat-SemiBold.woff") format("woff"),
      url("/fonts/Montserrat-SemiBold.woff2") format("woff2");
  }

  @font-face {
    font-family: 'Montserrat';
    font-weight: 700;
    font-style: normal;
    src: url("/fonts/Montserrat-Bold.woff") format("woff"),
      url("/fonts/Montserrat-Bold.woff2") format("woff2");
  }

  @font-face {
    font-family: 'Bitter';
    font-weight: 400;
    font-style: normal;
    src: url("/fonts/Bitter-Regular.woff") format("woff"),
      url("/fonts/Bitter-Regular.woff2") format("woff2");
  }

  html {
    box-sizing: border-box;
  }

  body {
    font-family: ${({ theme }) => theme.font.family.default};
    font-size: ${({ theme }) => theme.font.size.default};
    line-height: ${({ theme }) => theme.font.lineHeight.default};
    color: ${({ theme }) => theme.color.grayBase};
  }

  *, *:before, *:after {
    box-sizing: inherit;
  }

  body, h1, h2, h3, h4, h5, h6, p, ol, ul {
    margin: 0;
    padding: 0;
    font-weight: normal;
  }

  h1, h2, h3, h4, h5, h6 {
    font-family: ${({ theme }) => theme.font.family.headline};
    color: ${({ theme }) => theme.color.black};
  }

  a {
    color: ${({ theme }) => theme.color.brownishGray};
    text-decoration: none;
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
