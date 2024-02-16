import { useState, useEffect } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  useLocation,
} from "react-router-dom";
import Layout from "./components/Layout";
import AcercaDe from "./components/AcercaDe";
import Blog from "./components/Blog";
import Contacto from "./components/Contacto";
import NoPage from "./components/NoPage";
import NavBar from "./router/NavBar";
import "./styles/loader.css";

function App() {
  const [isLoading, setIsLoading] = useState(false);
  const location = useLocation();

  useEffect(() => {
    // Muestra el loader al cambiar de ruta
    setIsLoading(true);

    // Simular un tiempo de carga
    const loadingTimeout = setTimeout(() => {
      setIsLoading(false);
    }, 500); // Cambia esto al tiempo que desees

    // Limpiar el timeout al desmontar el componente
    return () => clearTimeout(loadingTimeout);
  }, [location]); // Ejecutar el efecto al cambiar de ruta

  return (
    <Router>
      <div>
        {isLoading && (
          <div className="page-loading active">
            <div className="page-loading-inner">
              <div className="page-spinner"></div>
              <span>Cargando...</span>
            </div>
          </div>
        )}

        <NavBar />

        <Routes>
          <Route path="/" element={<Layout />} />
          <Route path="/acerca-de" element={<AcercaDe />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/contacto" element={<Contacto />} />
          <Route path="*" element={<NoPage />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
