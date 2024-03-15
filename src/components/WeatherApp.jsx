import React, { useState, useEffect } from 'react';

const WeatherApp = () => {
  const [city, setCity] = useState('');
  const [weatherData, setWeatherData] = useState(null);
  const [error, setError] = useState(null);
  const API_KEY = '6ac8b39f8a5bf219bd91fa82f4e5fdb9';

  useEffect(() => {
    const fetchWeatherData = async () => {
      try {
        if (!city) return;
        const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`);

        if (!response.ok) {
          throw new Error('Failed to fetch weather data');
        }
        const data = await response.json();
        setWeatherData(data);
        setError(null); // Reset error if fetch is successful
      } catch (error) {
        setError(error.message);
      }
    };

    fetchWeatherData();
  }, [city, API_KEY]);

  const handleCityChange = (event) => {
    setCity(event.target.value);
  };

  return (
    <div className="container">
      <h2>Weather App</h2>
      <form onSubmit={(e) => e.preventDefault()} style={{ marginBottom: '20px' }}>
        <label htmlFor="cityInput">Enter City:</label>
        <input
          type="text"
          id="cityInput"
          value={city}
          onChange={handleCityChange}
          placeholder="Enter city name..."
        />
        <button type="submit">Search</button>
      </form>
      {error && <p>Error: {error}</p>}
      {weatherData && (
        <div>
          <h2>{weatherData.name}, {weatherData.sys.country}</h2>
          <p>Temperature: {weatherData.main.temp}°C</p>
          <p>Weather: {weatherData.weather[0].main}</p>
        </div>
      )}
    </div>
  );
};

export default WeatherApp;
