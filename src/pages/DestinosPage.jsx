// import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { Link } from "react-router-dom";
import { Image } from "primereact/image";

import "../styles/destino.css"; // Importa el archivo CSS
export function Destinos() {
  return (
    <>
      <Navbar />
      <div className="banner">
        <div className="image-container-dest">
          <Link to="/" className="nav-link enlace-dest mr-3 ml-3">
            <i className="pi pi-angle-left"></i> Volver al inicio
          </Link>
          <Image
            src="https://www.ytuqueplanes.com/imagenes/images/banners/destinos-laptop.jpg"
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
      <div className="mas-buscado">
        <h2 className="mt-5 text-center text-bluegray-600">Lo más buscado por los viajeros</h2>
      </div>
      <div className="mas-buscado text-center">
        <h2 className="mt-5 text-blue-700">Vive al mejor precio</h2>
        <p>Aprovecha estas promociones para tu próximo viaje.</p>
      </div>
      <Footer />
    </>
  );
}
