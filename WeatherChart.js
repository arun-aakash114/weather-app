import React from 'react';

const WeatherChart = ({ hourlyForecast, unit }) => {
  if (!hourlyForecast || hourlyForecast.length === 0) {
    return <p>No hourly forecast available.</p>;
  }

  return (
    <div>
      <h2>Hourly Forecast</h2>
      <ul>
        {hourlyForecast.map((forecast) => (
          <li key={forecast.time}>
            <p>Time: {forecast.time}</p>
            <p>Temperature: {forecast.temp}°{unit}</p>
            <p>Chance of Precipitation: {forecast.chanceOfPrecipitation}%</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default WeatherChart;
