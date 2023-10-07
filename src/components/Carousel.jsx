import { Galleria } from 'primereact/galleria';
import { Image } from "primereact/image";
import "../styles/carousel.css";

export function CarouselComponent() {
  const items = [
    {
      src: "https://www.peru.travel/Contenido/General/Imagen/es/92/1.1/nor-yauyos-cochas.jpg",
      alt: "Imagen 1",
      description: "Descripción de la imagen 1",
    },
    {
      src: "https://www.machupicchuterra.com/wp-content/uploads/nevados-lima.jpg",
      alt: "Imagen 2",
      description: "Descripción de la imagen 2",
    },
    {
      src: "https://www.machupicchuterra.com/wp-content/uploads/nevado-yerupaja.jpg",
      alt: "Imagen 2",
      description: "Descripción de la imagen 2",
    },
  ];

  const itemTemplate = (item) => {
    return (
      <div className="carousel-item">
        <Image src={item.src} alt={item.alt} className="carousel-image block" />
      </div>
    );
  };

  return (
    <div className="card">
      <Galleria
        value={items}
        numVisible={5}
        circular
        showThumbnails={false}
        showItemNavigators
        item={itemTemplate}
        // showIndicators
      />
    </div>
  );
}
