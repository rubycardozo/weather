import React, { useEffect, useState } from "react";
import Misty from './images/701.jpg'

const Info = ({ weatherData }) => {
  const [condition, setCondition] = useState("Unknown");
  const [icon, setIcon] = useState(null);
  useEffect(() => {
    const getId = (weatherId) => {
      if (weatherId >= 200 && weatherId < 300) {
        return "Thunderstorm";
      } else if (weatherId >= 300 && weatherId < 500) {
        return "Drizzle";
      } else if (weatherId >= 500 && weatherId < 600) {
        return "Rain";
      } else if (weatherId >= 600 && weatherId < 700) {
        return "Snow";
      } else if (weatherId === 800) {
        return "Clear Sky";
      } else if (weatherId === 701) {
        return "Misty";
      } 
      else if (weatherId > 800) {
        return "Clouds";
       
      } else {
        return "Unknown";
      }
    };
    
      const weatherId = weatherData.weather[0].id;
      const currentCondition = getId(weatherId);
      setCondition(currentCondition);




  }, [weatherData]);

  return (
    <div className='weathercard'>
      <div  src={icon}></div>
      <h2>{weatherData.main?.temp} &deg;</h2>
      <p>{condition}</p>
      <p>Wind Speed: {weatherData.wind?.speed} mph</p>
    </div>
  );
}

export default Info;
