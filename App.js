import React, { useState, useEffect } from 'react';
import SearchBar from './SearchBar';
import WeatherCard from './WeatherCard';
import WeatherChart from './WeatherChart';
import UnitToggle from './UnitToggle';
import { getWeatherData } from './weatherService';

const App = () => {
  const [weatherData, setWeatherData] = useState(null);
  const [hourlyForecast, setHourlyForecast] = useState([]);
  const [unit, setUnit] = useState('celsius');

  const handleSearch = async (location) => {
    try {
      const data = await getWeatherData(location);
      setWeatherData(data);
      setHourlyForecast(data.hourlyForecast);
    } catch (error) {
      console.error('Error searching for location:', error);
    }
  };

  const handleUnitChange = (selectedUnit) => {
    setUnit(selectedUnit);
  };

  useEffect(() => {
    handleSearch('Tamil Nadu');
  }, []);

  return (
    <div>
      <h1>Weather App</h1>
      <SearchBar onSearch={handleSearch} />
      <WeatherCard weatherData={weatherData} unit={unit} />
      <WeatherChart hourlyForecast={hourlyForecast} unit={unit} />
      <UnitToggle unit={unit} onChange={handleUnitChange} />
    </div>
  );
};

export default App;
