import { Card } from "primereact/card";
import { Image } from "primereact/image";
import PropTypes from "prop-types";

export function CardFestividades(props) {
  
  const cards = props.cards.map((card, index) => {
    const header = (
      <Image
        src={card.imageSrc}
        alt={`CardImage_${index}`}
        width="186"
        preview
      />
    );

    const footer = (
      <div className="flex flex-wrap justify-content-between align-items-center gap-2">
        <div className="destino">
          <i className="pi pi-map-marker"></i>
          <span> </span>
          <span>{card.location}</span>
        </div>
        <div className="date">
          <small>{card.date}</small>
        </div>
      </div>
    );

    return (
      <div key={index} className="card flex justify-content-center">
        <Card
          subTitle={card.title}
          footer={footer}
          header={header}
          style={{ width: "286px" }}
        ></Card>
      </div>
    );
  });

  return <>{cards}</>;
}

CardFestividades.propTypes = {
  cards: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string.isRequired,
      imageSrc: PropTypes.string.isRequired,
      location: PropTypes.string.isRequired,
      date: PropTypes.string.isRequired,
    })
  ).isRequired,
};
