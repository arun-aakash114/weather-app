import React from 'react';

const WeatherCard = ({ weatherData, unit }) => {
  if (!weatherData) return null;

  const { temp, weather } = weatherData;

  const convertToFahrenheit = (celsius) => {
    return (celsius * 9) / 5 + 32;
  };

  return (
    <div>
      <h2>Current Weather</h2>
      <p>
        Temperature: {unit === 'celsius' ? temp : convertToFahrenheit(temp)}°{unit.toUpperCase()}
      </p>
      <p>Description: {weather}</p>
      {/* Display weather icon */}
    </div>
  );
};

export default WeatherCard;
