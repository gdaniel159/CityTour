import { Galleria } from 'primereact/galleria';
import { Image } from "primereact/image";
import "../styles/carousel.css";

export function CarouselComponent() {
  const items = [
    {
      src: "https://res.cloudinary.com/weekendesk/images/s--LI1oG4hm--/c_fill,f_auto,g_auto,h_400,q_50,w_1920/nbc3b3pc2fdeekr5ij9l/naranjo-de-bulnes.jpg",
      alt: "Imagen 1",
      description: "Descripción de la imagen 1",
    },
    {
      src: "https://res.cloudinary.com/weekendesk/images/s--LI1oG4hm--/c_fill,f_auto,g_auto,h_400,q_50,w_1920/nbc3b3pc2fdeekr5ij9l/naranjo-de-bulnes.jpg",
      alt: "Imagen 2",
      description: "Descripción de la imagen 2",
    },
    {
      src: "https://res.cloudinary.com/weekendesk/images/s--LI1oG4hm--/c_fill,f_auto,g_auto,h_400,q_50,w_1920/nbc3b3pc2fdeekr5ij9l/naranjo-de-bulnes.jpg",
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
