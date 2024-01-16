import React from 'react';
import './styles.css';
import moment from 'moment';


const Location=({weatherData})=>{
    return (
<div class = 'location'>
<h1>{weatherData.name} </h1>
<p>{moment().format('LL')}  •  {moment().format('LT')} </p>

</div>

    )

}
export default Location;