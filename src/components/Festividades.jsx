import { Link } from "react-router-dom";
import { CardFestividades } from "./CardFestividades";

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
      <div style={{ backgroundColor: "#079647" }} className="p-5">
        <div
          className="enc2 flex align-items-center justify-content-center mb-3 text-white"
          style={{ width: "20%" }}
        >
          <i className="pi pi-ticket text-2xl"></i>
          <h2 className="mr-3 ml-3">
            <Link to="/festividades" className="nav-link text-white">
              Festividades
            </Link>
          </h2>
          <i className="pi pi-arrow-circle-right text-2xl"></i>
        </div>

        <div className="flex flex-wrap justify-content-around">
          <CardFestividades cards={festividadesData} />
        </div>
      </div>
    </>
  );
}
