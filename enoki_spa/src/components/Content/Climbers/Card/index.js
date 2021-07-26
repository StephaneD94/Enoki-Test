import React from 'react';

import './styles.css';

const Card = ({ picture, title, city, year }) => {

    return (
      <div className="card_container">
        <img className="card_img" src={picture}></img>
        <div className="card_description">
          <p className="card_infos card_infos-1">{title}</p>
          <p className="card_infos card_infos-2">{city + ", " + year}</p>
        </div>
      </div>
    );
  }
 
export default Card;