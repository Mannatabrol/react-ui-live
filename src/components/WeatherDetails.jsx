import React from 'react';

function WeatherDetails({ data }) {
  return (
    <div className="weather-details">
      <h2>Weather Details</h2>
      {data && (
        <div>
          <p>Temperature: {data.main.temp}°C</p>
          <p>Humidity: {data.main.humidity}%</p>
          <p>Wind Speed: {data.wind.speed} m/s</p>
          <p>Weather Condition: {data.weather[0].description}</p>
        </div>
      )}
    </div>
  );
}

export default WeatherDetails;
