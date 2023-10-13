import img from "../assets/img/paisaje.png"
import { getDestinos } from "../api/api";
import { useState, useEffect } from "react";

export function DescubreComponent() {

  const [destinos, setDestinos] = useState([]);

  // Destinos 

  useEffect(() => {
    async function loadDestinos() {
      const res = await getDestinos();
      setDestinos(res.data);
    }
    loadDestinos();
  }, []);

  return (
    <>
      <div className="main-ds-container flex flex-wrap justify-content-center align-items-center mt-4 mb-3">
        {destinos.map((destino) => (
          <div key={destino.id}>
            <div className="image-container-ds">
              <img
                src={`http://127.0.0.1:8000/${destino.regiones.imageUrl}`}
                alt={destino.nombre}
                className="imageOferta-ds"
                width="600"
                height="366"
              />
              <div className="overlay-ds">
                <h2>{destino.nombre}</h2>
                <p>
                  <i className="pi pi-map-marker"></i> {destino.regiones.nombre}
                </p>
              </div>
              <div className="overlay-ds-right">
                <div className="cubeDsC">
                  <i className="pi pi-chevron-right"></i>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="rutas m-5">
        <div className="image-container-ds-r">
          <img
            src={img}
            alt="ruta"
            width="100%"
            height="200"
            className="imageOferta-ds-r"
          />
          <div className="overlay-ds-r w-full h-full flex align-items-center justify-content-center flex-column">
            <p>
              <i className="pi pi-map text-2xl mb-3"></i>
            </p>
            <div className="flex justify-content-center align-items-center">
              <h2>Descubre las Rutas Cortas cerca a ti</h2>
              <div className="cubeDsC ml-2">
                <i className="pi pi-chevron-right"></i>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
