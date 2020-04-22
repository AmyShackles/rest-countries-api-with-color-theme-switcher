import React from "react";
import { Countries } from "./components/Countries.js";
import { ThemeProvider } from "styled-components";
import { lightTheme, darkTheme } from "./utils/theme.js";
import { GlobalStyles } from "./utils/global.js";
import { Header } from "./components/Header.js";
import { Router } from "@reach/router";
import "./App.css";
import { CountryDetail } from "./components/CountryDetail.js";

function App() {
  const [theme, setTheme] = React.useState("light");
  const toggleTheme = () => {
    if (theme === "light") {
      setTheme("dark");
    } else {
      setTheme("light");
    }
  };
  return (
    <ThemeProvider theme={theme === "light" ? lightTheme : darkTheme}>
      <>
        <GlobalStyles />
        <Header toggleTheme={toggleTheme} theme={theme} />
        <main role="main">
          <Router>
            <Countries path="/" />
            <CountryDetail path="/country/:name"></CountryDetail>
          </Router>
        </main>
      </>
    </ThemeProvider>
  );
}

export default App;
