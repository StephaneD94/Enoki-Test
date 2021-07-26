import React from 'react';

import './styles.css';

const Card = ({ picture, title, city, year }) => {

    return (
      <div>
        <img src={picture}></img>
        <div className="description">
          <p>{title}</p>
          <p>{city + ", " + year}</p>
        </div>
      </div>
    );
  }
 
export default Card;