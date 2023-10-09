import { Image } from "primereact/image";
import { Link } from "react-router-dom";
import img1 from "../assets/img/nevado.png";
import img2 from "../assets/img/nevado2.png";
import img3 from "../assets/img/colores.png";
import img4 from "../assets/img/oasis.png";
import "../styles/OfertasComponent.css";

export function OfertasComponent() {
  const ofertas = [
    {
      id: 1,
      titulo: "Oferta 1",
      imagenUrl: img1,
      precio: "$10.00",
    },
    {
      id: 2,
      titulo: "Oferta 2",
      imagenUrl: img2,
      precio: "$10.00",
    },
    {
      id: 3,
      titulo: "Oferta 3",
      imagenUrl: img3,
      precio: "$10.00",
    },
    {
      id: 4,
      titulo: "Oferta 4",
      imagenUrl: img4,
      precio: "$10.00",
    },
  ];

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
        {ofertas.map((oferta) => (
          <div key={oferta.id} className="">
            <div className="image-container">
              <img
                src={oferta.imagenUrl}
                alt={oferta.titulo}
                className="imageOferta"
                width="281"
                height="418"
              />
              <div className="overlay">
                <p>Full day (Dia completo)</p>
                <h4>Aventuras y adrenalina en el nevado</h4>
              </div>
              <div className="prices">
                <p className="main-price">S/. 490</p>
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
