import { Box } from "@chakra-ui/react";
import "./App.css";
import Navbar from "./components/Navbar";
import About from "./components/About";
import Resume from "./components/Resume";
import Projects from "./components/Projects";
import Contact from "./components/Contact";

function App() {
  return (
    <Box className="App">
      <Navbar />
      <About />
      <Resume />
      <Projects />
      <Contact />
    </Box>
  );
}

export default App;
