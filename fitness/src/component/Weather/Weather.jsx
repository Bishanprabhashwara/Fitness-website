import React from 'react';

const Weather = ({ weatherData }) => {
  return (
    <div>
      <h2>Weather Information</h2>
      {weatherData && (
        <div>
          <p>Temperature: {weatherData.main.temp}°C</p>
          <p>Weather: {weatherData.weather[0].description}</p>
          {/* Add more details as needed */}
        </div>
      )}
    </div>
  );
};

export default Weather;