import './App.css'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Homepage from './pages/HomePage';
import { Ofertas } from './pages/OfertasPage';
import { FestividadesPage } from './pages/FestividadesPage';
import { Destinos } from './pages/DestinosPage';
import { AdminSite } from './pages/AdminPage';
import { OfertaFormComponent } from './pages/OfertaForm';
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
        <Route path="/destinos" element={<Destinos />} />
        <Route path="/admin" element={<AdminSite/>} />
        <Route path="/ofertas/:id" element={<OfertaFormComponent />} />
      </Routes>
    </BrowserRouter>
  );

}

export default App
