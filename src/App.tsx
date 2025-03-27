import { BrowserRouter } from "react-router-dom";
import { ThemeProvider } from "./components/ThemeContext";
import AppRoutes from "./AppRoutes";
import Footer from './components/Footer';

const App: React.FC = () => {
  const basename = import.meta.env.PROD ? '/portfolio' : '';
  
  return (
    <BrowserRouter basename={basename}>
      <ThemeProvider>
        <div className="min-h-screen flex flex-col">
          <AppRoutes />
          <Footer />
        </div>
      </ThemeProvider>
    </BrowserRouter>
  );
};

export default App;
