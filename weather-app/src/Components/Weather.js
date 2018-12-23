import React from 'react';

const Weather = props => (
  <div className="weather__info">
    {/*Using the && operator forces React to only display the text if the values exist */}
    {props.city && props.country && <p>Location: {props.city}, {props.country}</p>}
    {props.temperature && <p>Temperature: {props.temperature}</p>}
    {props.humidity && <p>Humidity: {props.humidity}</p>}
    {props.description && <p>Conditions: {props.description}</p>}
    {props.error && <p className="weather__error">{props.error}</p>}
  </div>
);

export default Weather;