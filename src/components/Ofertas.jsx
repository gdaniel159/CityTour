import { Image } from "primereact/image";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import { getPaquetes } from "../api/api";
import "../styles/OfertasComponent.css";

export function OfertasComponent() {
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
      <div className="enc1 ml-4 mr-3 mt-3 w-3">
        <h1 className="flex align-items-center">
          <i className="pi pi-ticket text-2xl color-oferta"></i>
          <Link
            to="/ofertas"
            className="nav-link enlace color-oferta mr-3 ml-3"
          >
            Ofertas
          </Link>
          <div className="cubeOf">
            <i className="pi pi-chevron-right"></i>
          </div>
        </h1>
      </div>
      <div className="flex justify-content-center align-items-center main-container">
        {paquetes.map((paquete) => (
          <div key={paquete.id} className="">
            <div className="image-container">
              <img
                src={`http://127.0.0.1:8000/${paquete.destino.imageUrl}`}
                alt={paquete.titulo}
                className="imageOferta"
                width="281"
                height="418"
              />
              <div className="overlay">
                <p>{paquete.duracion}</p>
                <h4>{paquete.destino.nombre}</h4>
              </div>
              <div className="prices">
                <p className="main-price">S/. {paquete.precio}</p>
                <p className="before-price">Antes S/. 220</p>
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className="flex banner-container mt-5 mb-5">
        <Image
          src="https://www.ytuqueplanes.com/imagenes//fotos/bannersOfertas/banner-oferta-Escapate-rutina.png"
          alt="Banner 1"
          width="95%"
          height="auto"
        />
        <Image
          src="https://www.ytuqueplanes.com/imagenes//fotos/bannersOfertas/banner-oferta-Disfruta-Loreto.png"
          alt="Banner 1"
          width="95%"
          height="auto"
        />
      </div>
    </>
  );
}
