import React from 'react';
import './styles.css';
import moment from 'moment';
import Winter from './images/winter.jpg'
import Spring from './images/spring.jpg'

const CardExampleCard = ({ weatherData }) => {
    const backgroundImage = weatherData.main.temp < 50 ? Winter : Spring;
    const bgColor = weatherData.main.temp < 50 ? "rgb(201, 243, 255)" : "rgb(220, 255, 188)";

  
    return (
        <div className="container" style={{ backgroundImage: `url(${backgroundImage})` }}>
        <div className="main" style = {{backgroundColor: bgColor}}>
          <p className="header">{weatherData.name}</p>
          <div>
            <p className="info">Day: {moment().format('dddd')}</p>
          </div>
          <div>
            <p className="info">Temperature: {weatherData.main.temp} &deg;F</p>
          </div>
        </div>
      </div>
    );
  };
  

export default CardExampleCard;