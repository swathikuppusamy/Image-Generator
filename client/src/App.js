import styled, { ThemeProvider } from "styled-components";
import { darkTheme } from "./utils/themes";

function App() {
  return <ThemeProvider theme={darkTheme}>Hello</ThemeProvider>;
}

export default App;
