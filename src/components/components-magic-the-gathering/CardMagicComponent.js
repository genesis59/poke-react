import React from "react";

const CardMagicComponent = ({ card }) => {
  return (
    <div className="card-magic-container">
      <a href={card.imageUrl} target="blank">
        <img src={card.imageUrl} alt={card.name} />
      </a>
    </div>
  );
};

export default CardMagicComponent;
