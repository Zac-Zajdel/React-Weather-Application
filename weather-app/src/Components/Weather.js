import React from 'react';

const Weather = ({ city, country, temperature, description, error, humidity }) => (
  <div className="weather__info">
    {/*Using the && operator forces React to only display the text if the values exist */}
    {city && country && <p>Location: {city}, {country}</p>}
    {temperature && <p>Temperature: {temperature}</p>}
    {humidity && <p>Humidity: {humidity}</p>}
    {description && <p>Conditions: {description}</p>}
    {error && <p className="weather__error">{error}</p>}
  </div>
);

export default Weather;