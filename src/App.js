import { useState } from "react";
import styled, { ThemeProvider } from "styled-components";
import Menu from "./components/Menu";
import Navbar from "./components/Navbar";
import Video from "../src/pages/Video";
import Home from "../src/pages/Home";
import { darkTheme, lightTheme } from "./utils/Theme";
import {
  // BrowserRouter as Router,
  // Switch,
  Route,
  // Link,
  BrowserRouter,
  Routes,
} from "react-router-dom";

const Container = styled.div`
  display: flex;
  background-color: ${({ theme }) => theme.bgLighter};
`;

const Main = styled.div`
  flex: 7;
  background-color: ${({ theme }) => theme.bg};
`;
const Wrapper = styled.div``;

function App() {
  const [darkMode, setDarkMode] = useState(true);
  return (
    <ThemeProvider theme={darkMode ? darkTheme : lightTheme}>
      <Container>
        <BrowserRouter>
          <Menu darkMode={darkMode} setDarkMode={setDarkMode} />
          <Main>
            <Navbar />

            <Wrapper>
              <Routes>
                <Route path="/" />
                <Route index element={<Home />} />
                <Route path="video" />
                <Route path="id:" element={<Video />} />
              </Routes>
            </Wrapper>
          </Main>
        </BrowserRouter>
      </Container>
    </ThemeProvider>
  );
}

export default App;
