import { props } from 'bluebird';
import {React, useRef} from 'react';

import Climbers from '../Content/Climbers';
import News from '../Content/News';

import './styles.css';
import climberImage from '../../assets/climber-on-el-cap-main-page-web.png';


const Content = (props) => {
  const climbersRef = useRef(null);

  const handleClickForScroll = () => {
    climbersRef.current.scrollIntoView({behavior: 'smooth', block: 'start'});   
  };

    return (
      <>
      <div className="header">
      <img className="header" src={climberImage}/>
        <p className="header-text">Rock climbing</p>
        <svg href="climbers" className="header-arrow" width="58" height="39" viewBox="0 0 58 39" fill="none" xmlns="http://www.w3.org/2000/svg" onClick={handleClickForScroll}>
          <g filter="url(#filter0_d)">
          <path d="M7 3L29 25L51 3" stroke="white" stroke-width="8"/>
          </g>
          <defs>
          <filter id="filter0_d" x="0.171572" y="0.17157" width="57.6569" height="38.4853" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
          <feFlood flood-opacity="0" result="BackgroundImageFix"/>
          <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
          <feOffset dy="4"/>
          <feGaussianBlur stdDeviation="2"/>
          <feComposite in2="hardAlpha" operator="out"/>
          <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"/>
          <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow"/>
          <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow" result="shape"/>
          </filter>
          </defs>
        </svg>
      </div>
        <Climbers 
          reference={climbersRef}
        /> 
      </>
    );
  }
 
export default Content;



