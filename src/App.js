import "./App.css";
import React from "react";
import HomePage from "./Pages/Home";
import MenuBar from "./extras/MenuBar";
import AboutPage from "./Pages/About";
import MessagePage from "./Pages/Message";
import TechStackPage from "./Pages/TechStack.jsx";
import LangSkillsPage from "./Pages/LangSkills";
import Projects from "./Pages/Projects";
import Footer from "./extras/Footer";
import { ThemeProvider, createTheme } from "@mui/material/styles";
function App() {
  const darkTheme = createTheme({
    palette: {
      mode: "dark",
    },
  });
  return (
    <ThemeProvider theme={darkTheme}>
      <MenuBar />
      <div className="App">
        <HomePage />
        <AboutPage />
        <TechStackPage />
        <Projects />
        <LangSkillsPage />
        <MessagePage />
        <Footer />
      </div>
    </ThemeProvider>
  );
}
export default App;
