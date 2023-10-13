import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { Link } from "react-router-dom";
import { Image } from "primereact/image";
import { useState, useEffect } from "react";
import { getPaquetes } from "../api/api";

export function Ofertas() {
  const [paquetes, setPaquetes] = useState([]);

  // Ofertas

  useEffect(() => {
    async function loadPaquetes() {
      const res = await getPaquetes();
      setPaquetes(res.data);
    }
    loadPaquetes();
  }, []);

  return (
    <>
      <Navbar />
      <div className="banner">
        <div className="image-container-dest">
          <Link to="/" className="nav-link enlace-dest mr-3 ml-3">
            <i className="pi pi-angle-left"></i> Volver al inicio
          </Link>
          <Image
            src="https://www.ytuqueplanes.com/assets/images/oferta.png"
            alt="Image"
            height="380"
            width="100%"
          />
          <div className="dest-cont-info">
            <h2 className="dest-tit">Destinos</h2>
            <p className="dest-p">
              ¡A recorrer el Perú! Descubre todo lo que puedes conocer en cada
              una de las regiones
            </p>
          </div>
        </div>
      </div>
      <div className="consulta-viajes">
        <h2 className="ml-4 text-800 mt-4 mb-4">
          Los más consultados por viajeros
        </h2>
        <div className="flex justify-content-center align-items-center main-container">
          {paquetes.map((paquete) => (
            <div key={paquete.id} className="">
              <Link to={`/ofertas/${paquete.id}`}>
                <div className="image-container">
                  <img
                    src={`http://127.0.0.1:8000/${paquete.destino.imageUrl}`}
                    alt={paquete.descripcion}
                    className="imageOferta"
                    width="281"
                    height="418"
                  />
                  <div className="overlay">
                    <p>{paquete.duracion}</p>
                    <h4>{paquete.destino.nombre}</h4>
                  </div>
                  <div className="prices">
                    <p className="main-price">{paquete.precio}</p>
                    <p className="before-price">Antes S/. 220</p>
                  </div>
                </div>
              </Link>
            </div>
          ))}
        </div>
      </div>
      <Footer />
    </>
  );
}
