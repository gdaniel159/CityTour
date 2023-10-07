import './App.css'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Homepage from './pages/HomePage';
import { Ofertas } from './pages/OfertasPage';
import { FestividadesPage } from './pages/FestividadesPage';
import 'primereact/resources/themes/lara-light-indigo/theme.css';
import 'primereact/resources/primereact.min.css';
import 'primeicons/primeicons.css';
import 'primeflex/primeflex.css';

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/ofertas" element={<Ofertas />} />
        <Route path="/festividades" element={<FestividadesPage />} />
      </Routes>
    </BrowserRouter>
  );

}

export default App
