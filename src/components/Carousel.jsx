import { Galleria } from 'primereact/galleria';
import { Image } from "primereact/image";
import "../styles/carousel.css";
import img1 from '../assets/img/slide1.png';
import img2 from '../assets/img/slide2.png';
import img3 from '../assets/img/slide3.png';

export function CarouselComponent() {
  const items = [
    {
      src: img1,
      alt: "Imagen 1",
      description: "Descripción de la imagen 1",
    },
    {
      src: img2,
      alt: "Imagen 2",
      description: "Descripción de la imagen 2",
    },
    {
      src: img3,
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
