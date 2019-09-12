import React from 'react';

const Weather = (props) => {
    
    return(
        <div className="result">
            {props.country && props.city && <p><b>Location:</b> {props.city},    {props.country}</p>}
            {props.temperature && <p><b>Temperature:</b> {props.temperature}</p>}
            {props.humidity && <p><b>Humidity:</b> {props.humidity}</p>}
            {props.description && <p><b>Conditions:</b>  {props.description}</p>}
            {props.error && <p>{props.error}</p>}
        </div>
    )
}

export default Weather;