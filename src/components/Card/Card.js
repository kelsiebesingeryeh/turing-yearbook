import React from 'react';
import './Card.css';

const Card = ({ human }) => {
    return (
      <div className="staffCards">
        <img className="birdImage" src={human.image} alt={`${human.name}`} />
        <p style={{ color: "red", fontWeight: "bold" }}>{human.name}</p>
        <p style={{ fontStyle: "italic" }}>Species: {human.species}</p>
        <p style={{ color: "blue", fontWeight: "bold" }}>
          House: {human.house}
        </p>
      </div>
    );
}

export default Card;
