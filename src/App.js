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
    <div className="App">
      <ThemeProvider theme={darkTheme}>
          <MenuBar />
          <HomePage />
          <AboutPage />
          <LangSkillsPage />
          <Projects/>
          <TechStackPage />
          <MessagePage />
          <Footer />
      </ThemeProvider>
    </div>
  );
}
export default App;
