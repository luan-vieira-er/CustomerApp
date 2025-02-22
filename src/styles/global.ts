import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

body {
  background-color: #18181B;
  color: var(--gray-900);
}

body,
input,
textarea,
select,
button {
  font-family: 'Inter';
  font-style: normal;
  font-weight: 400;
  font-size: 11.24px;
  line-height: 14px;
}

:root {
  --white: #ffffff;
  --gray-100: #e1e1e6;
  --gray-300: #a8a8b3;
  --gray-500: #504F51
  --gray-800: #29292e;
  --gray-900: #121214;
  --cyan-500: #61dafb;
  --yellow-500: #eba417;
}


@media (max-width: 1080px) {
  html {
    font-size: 93.75%;
  }
}

@media (max-width: 720px) {
  html {
    font-size: 87.5%;
  }
}

input:-webkit-autofill,
input:-webkit-autofill:hover,
input:-webkit-autofill:focus,
input:-webkit-autofill:active{
  -webkit-text-fill-color: #000000 !important;
  -webkit-box-shadow: 0 0 0 30px #ffffff inset !important;
}

/* Chrome, Safari, Edge, Opera */
input::-webkit-outer-spin-button,
input::-webkit-inner-spin-button {
  -webkit-appearance: none;
  margin: 0;
}

/* Firefox */
input[type=number] {
  -moz-appearance: textfield;
}

button {
  cursor: pointer;
}

a {
  color: inherit;
  text-decoration: none;
}

h1, h2, h3, h4 {
  font-family: 'Inter'
}

p, span {
  font-family: 'Inter'
}

.MuiPaper-root {
  padding: 12px;
}

whereby-embed { height: 500px; width: 860px; }

.MuiModal-root {
  z-index: 10000 !important;
}

.ck-editor__editable_inline:not(.ck-comment__input *) {
  min-height: 300px;
  max-height: 360px;
  overflow-y: auto;
}
`;
