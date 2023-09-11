import { Box } from "@chakra-ui/react";
import "./App.css";
import Navbar from "./components/Navbar";
import About from "./components/About";
import Resume from "./components/Resume";
import Projects from "./components/Projects";

function App() {
  return (
    <Box className="App">
      <Navbar />
      <About />
      <Resume />
      <Projects />
    </Box>
  );
}

export default App;
