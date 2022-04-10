import { createGlobalStyle } from 'styled-components';
import './App.css';
import Pages from './Pages';

const GlobalStyle = createGlobalStyle`
  html {
    height: 100%
  }

  body {
    font-family: Arial, Helvetica, sans-serif;
    background: linear-gradient(to bottom, #f05053, #e1eec3);
    margin: 0;
    color: #555;
  }
`;

function App() {
  return (
    <>
      <GlobalStyle />
      <Pages />
    </>
  );
}
export default App;
