// src/App.tsx
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import About from "./pages/About";
import Projects from "./pages/Projects";
import Contact from "./pages/Contact";
import { ThemeProvider } from "./components/ThemeContext";

const App: React.FC = () => {
  return (
    <ThemeProvider>
      <Router>
        <Navbar />
        <div className="p-6 dark:bg-gray-900 dark:text-white">
          <Routes>
            <Route path="/" element={<About />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </div>
      </Router>
    </ThemeProvider>
  );
};

export default App;
