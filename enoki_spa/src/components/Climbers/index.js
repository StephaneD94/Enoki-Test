import React, { useState } from 'react';

import './styles.css';

import Card from './Card';
import image1 from '../../assets/Image masque.png';
import image2 from '../../assets/Image masque (1).png';
import image3 from '../../assets/Image masque (2).png';

const Climbers = ({ reference }) => {

  /* Local state to handle card array indexes */
  const [index, setIndex] = useState(0);

/* Card data */
  const cardList = [
    <Card
      key="Alex"
      picture={image1}
      title= "Alex Honnold"
      city= "Paris"
      year= "2021"
    />, 
    <Card
      key="Chris"
      picture={image2}
      title= "Chris Sharma"
      city= "Paris"
      year= "2021"
    />,
    <Card
      key="Tommy"
      picture={image3}
      title= "Tommy Caldwell"
      city= "Paris"
      year= "2021"
    />,
]

/* Handling the click on left and right arrows for the carousel */ 
const handleClickLeft = () => {
  const modifiedIndex = index-1;
  setIndex(modifiedIndex % cardList.length)
};

const handleClickRight = () => {
  const modifiedIndex = index+1;
  setIndex(modifiedIndex % cardList.length)
}

// Detect mobile browser and set numbers of pictures to display
const MAX_CLIMBERS_DISPLAY = window.outerWidth <= 375 ? 1 : 3;

// Show the pictures in the carousel by their index
const renderCarousel = (cardList, index) => {
  const finalArray = [...cardList.slice(index, cardList.length),...cardList.slice(0,index)].slice(0,MAX_CLIMBERS_DISPLAY);
  console.log(finalArray);
 return (
    <>
     {finalArray}
    </>
 )
}
    return (
      <div ref={reference} className="climbers">
        <p className="climbers-title">Climbers</p>
        <p className="climbers-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex</p>
        <div className="carousel">
          <svg className="carousel-arrow" onClick={handleClickLeft} width="31" height="50" viewBox="0 0 31 50" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M28 3L6 25L28 47" stroke="#2580BC" stroke-width="8"/>
          </svg>
            {renderCarousel(cardList, index)}
          <svg className="carousel-arrow" onClick={handleClickRight} width="31" height="50" viewBox="0 0 31 50" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M3 47L25 25L3 3" stroke="#2580BC" stroke-width="8"/>
          </svg>
        </div>
        <button type="button" className="climbers-button">More climbers</button>
     </div>
    );
  }
 
export default Climbers;