import { Link } from "react-router-dom";
import { CardFestividades } from "./CardFestividades";
import "../styles/festividades.css";

export function FestividadesComponent() {
  const festividadesData = [
    {
      title: "Noveno Aniversario del señor de Luren",
      imageSrc:
        "https://www.ytuqueplanes.com/imagenes/fotos/festividades/principal-novenario-senor-luren.jpg",
      location: "ICA",
      date: "6-OCT",
    },
    {
      title: "Aniversario del distrito de Cayma",
      imageSrc:
        "https://www.ytuqueplanes.com/imagenes/fotos/festividades/Aniversario-del-distrito-de-Cayma-1.jpg",
      location: "AREQUIPA",
      date: "12-NOV",
    },
    {
      title: "483° Aniversario de la fundacion Española de Camaná",
      imageSrc:
        "https://www.ytuqueplanes.com/imagenes/fotos/festividades/camana400x400.jpg",
      location: "AREQUIPA",
      date: "9-NOV",
    },
    {
      title: "Día de la Salchipapa",
      imageSrc:
        "https://www.ytuqueplanes.com/imagenes/fotos/novedades/sh-salchipapa_nota.jpg",
      location: "NACIONAL",
      date: "21-NOV",
    },
  ];

  return (
    <>
      <div style={{ backgroundColor: "#079647" }} className="pt-6 pb-6 pl-4 pr-4">
        <div className="enc2 flex align-items-center w-3 justify-content-center mb-2">
          <h1 className="text-white flex align-items-center">
            <i className="pi pi-ticket text-3xl"></i>
            <Link to="/festividades" className="nav-link text-white ml-3 mr-3">
              Festividades
            </Link>
            <div className="cube">
              <i className="pi pi-chevron-right"></i>
            </div>
          </h1>
        </div>

        <div className="flex flex-wrap justify-content-around festividad-container">
          <CardFestividades cards={festividadesData} />
        </div>
      </div>
    </>
  );
}
