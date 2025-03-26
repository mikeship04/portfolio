import { BrowserRouter } from "react-router-dom";
import { ThemeProvider } from "./components/ThemeContext";
import AppRoutes from "./AppRoutes";

const App: React.FC = () => {
  const basename = import.meta.env.PROD ? '/portfolio' : '';
  
  return (
    <BrowserRouter basename={basename}>
      <ThemeProvider>
        <AppRoutes />
      </ThemeProvider>
    </BrowserRouter>
  );
};

export default App;
