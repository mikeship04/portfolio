import { Link } from "react-router-dom";
import { useContext } from "react";  
import Button from "./Button";
import { ThemeContext } from "./ThemeContext";

const Navbar: React.FC = () => {
  const themeContext = useContext(ThemeContext);

  if (!themeContext) {
    throw new Error("Navbar must be used within a ThemeProvider");
  }

  const { darkMode, toggleDarkMode } = themeContext;

  return (
    <nav className="bg-indigo-900 dark:bg-gray-800 text-white dark:text-white transition-colors duration-300 p-4 shadow-md flex justify-between items-center">
      <ul className="flex space-x-4">
        <li><Link to="/" className="hover:underline">About</Link></li>
        <li><Link to="/projects" className="hover:underline">Projects</Link></li>
        <li><Link to="/contact" className="hover:underline">Contact</Link></li>
      </ul>
      <div>
      <Button
          text={darkMode ? "Light Mode" : "Dark Mode"}
          variant={"primary"}
          onClick={toggleDarkMode} 
        />
      </div>
    </nav>
  );
};

export default Navbar;
