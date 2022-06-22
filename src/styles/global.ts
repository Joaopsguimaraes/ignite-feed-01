import { createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle`

@import url("https://fonts.googleapis.com/css2?family=Poppins:wght@100;400;500;700&family=Roboto:wght@400;500;700&display=swap");

:root {
  --white: #fff;
  --gray-100: #e1e1e6;
  --gray-300: #c4c4cc;
  --gray-400: #8d8d99;
  --gray-600: #323238;
  --gray-700: #29292e;
  --gray-800: #202024;
  --gray-900: #121214;

  --green-300: #00b37e;
  --green-500: #00875f;

  --font-base: "Roboto", sans-serif;
}

:focus{
  outline: transparent;
  box-shadow: 0 0 0 2px var(--green-500);
}

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

body {
  background: var(--gray-900);
  color: var(--gray-300);
  -webkit-font-smoothing: antialiased;
}

body,
input,
textarea,
button {
  font-family: var(--font-base);
  font-weight: 400;
  font-size: 1rem;
}
`;
