import React from "react";
import { Countries } from "./components/Countries.js";
import { ThemeProvider } from "styled-components";
import { lightTheme, darkTheme } from "./utils/theme.js";
import { GlobalStyles } from "./utils/global.js";
import styled from "styled-components";
import "./App.css";

const HeaderDiv = styled.div`
  width: 100vw;
  height: 80px;
`;

const ThemeToggle = styled.button`
  padding: 20px;
  color: ${({ theme }) => theme.cards};
`;
function App() {
  const [theme, setTheme] = React.useState("light");
  const [label, setLabel] = React.useState("dark");

  const toggleTheme = () => {
    if (theme === "light") {
      setTheme("dark");
      setLabel("light");
    } else {
      setTheme("light");
      setLabel("dark");
    }
  };
  return (
    <ThemeProvider theme={theme === "light" ? lightTheme : darkTheme}>
      <>
        <GlobalStyles />
        <header role="banner">
          <HeaderDiv>
            <ThemeToggle onClick={toggleTheme}></ThemeToggle>
          </HeaderDiv>
        </header>
        <main role="main">
          <Countries />
        </main>
      </>
    </ThemeProvider>
  );
}

export default App;
