import React from 'react';

import './styles.css';

import underImage from '../../assets/Image externe.png';

const News = () => {
    return (
      <div className="news-container">
        <p className="news-title">Climbing News</p>
        <p className="news-description">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco taboris nisi ut aliquip ex</p>
        <div className="news-article">
          <div className="news_over"></div>
          <p className="news-name">Rock climbing in Yosemite</p>
          <p className="news-content">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et...</p>
          <img className="news_image" src={underImage}></img>
        </div>
        <button type="button" className="news-button">More news</button>
      </div>
    );
  }
 
export default News;