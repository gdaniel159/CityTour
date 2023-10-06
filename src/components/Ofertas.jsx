import { Image } from "primereact/image";
import { Link } from "react-router-dom";
import "../styles/OfertasComponent.css";

export function OfertasComponent() {
  const ofertas = [
    {
      id: 1,
      titulo: "Oferta 1",
      imagenUrl:
        "https://www.ytuqueplanes.com/imagenes/Fotos/ofertas/oferta-p-ayacucho-ayacucho-magico.jpg",
      precio: "$10.00",
    },
    {
      id: 2,
      titulo: "Oferta 2",
      imagenUrl:
        "https://www.ytuqueplanes.com/imagenes/Fotos/ofertas/oferta-p-moquegua-full-day-moquegua.jpg",
      precio: "$10.00",
    },
    {
      id: 3,
      titulo: "Oferta 3",
      imagenUrl:
        "https://www.ytuqueplanes.com/imagenes/Fotos/ofertas/oferta-p-lima-canon-autisha-aventureros.jpg",
      precio: "$10.00",
    },
    {
      id: 4,
      titulo: "Oferta 4",
      imagenUrl:
        "https://www.ytuqueplanes.com/imagenes//fotos/ofertas/Pucallpa-encantadora_30032023_P.jpg",
      precio: "$10.00",
    },
  ];

  return (
    <>
      <div className="enc1 flex align-items-center w-2 justify-content-center mb-3">
        <i className="pi pi-ticket text-2xl"></i>
        <h2 className="mr-3 ml-3">
          <Link to="/ofertas" className="nav-link">
            Ofertas
          </Link>
        </h2>
        <i className="pi pi-arrow-circle-right text-2xl"></i>
      </div>
      <div className="p-grid flex flex-wrap justify-content-around align-items-center">
        {ofertas.map((oferta) => (
          <div key={oferta.id} className="p-col-12 p-md-4">
            <div className="image-container">
              <Image
                src={oferta.imagenUrl}
                alt={oferta.titulo}
                className="carousel-image"
                width="299"
                height="418"
              />
              <div className="overlay">
                <div className="overlay-content">
                  <p className="overlay-title">{oferta.titulo}</p>
                  <p className="overlay-price">{oferta.precio}</p>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className="flex banner-container mt-4">
        <Image src="https://www.ytuqueplanes.com/imagenes//fotos/bannersOfertas/banner-oferta-Escapate-rutina.png" alt="Banner 1" width="95%" height="auto"/>
        <Image src="https://www.ytuqueplanes.com/imagenes//fotos/bannersOfertas/banner-oferta-Disfruta-Loreto.png" alt="Banner 1" width="95%" height="auto"/>
      </div>
    </>
  );
}
