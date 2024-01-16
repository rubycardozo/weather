import React, { useEffect, useState } from "react";
import './styles.css';
import moment from 'moment';
import Location from './location';
import Info from './info';
import './setupEnv'; 

function Weather() {

  const [lat, setLat] = useState([]);
  const [long, setLong] = useState([]);
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      navigator.geolocation.getCurrentPosition(function(position) {
        setLat(position.coords.latitude);
        setLong(position.coords.longitude);
      });

      await fetch(`https://api.openweathermap.org/data/2.5/weather/?lat=${lat}&lon=${long}&units=imperial&APPID=${process.env.REACT_APP_API_KEY}`)
      .then(res => res.json())
      .then(result => {
        setData(result)
        console.log(result);
      });
    }
    fetchData();
  }, [lat,long])
  
  
    return (
        <div className="container">{(typeof data.main != 'undefined') ? (
          <Location weatherData={data}/>
        ): (
          <div></div>
        )}
    
          {(typeof data.main != 'undefined') ? (
        <Info weatherData={data}/>
      ): (
        <div></div>
      )}
      
      </div>
    );
  };
  

export default Weather;