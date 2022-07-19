import React from "react";
import "./CurrentWeather.css";
export const CurrentWeather = ({ data }) => {
  const { city, weather, main, wind } = data;
  return (
    <div className='weather'>
      <div className='top'>
        <div>
          <p className='city'>{city}</p>
          <p className='weather-description'>{weather[0].main}</p>
        </div>
        <img
          className='weather-icon'
          src={`icons/${weather[0].icon}.png`}
          alt='weather'
        />
      </div>
      <div className='bottom'>
        <p className='temperature'>{Math.round(main.temp)}°C</p>
        <div className='details'>
          <div className='details-label'>
            <div className='parameter-row'>
              <span className='parameter-label'>Details</span>
              <span className='details-line' />
            </div>
          </div>
          <div className='parameter-row'>
            <span className='parameter-label'>Feels Like</span>
            <span className='parameter-value'>
              {Math.round(main.feels_like)}°C
            </span>
          </div>
          <div className='parameter-row'>
            <span className='parameter-label'>Wind</span>
            <span className='parameter-value'>{wind.speed}m/s</span>
          </div>
          <div className='parameter-row'>
            <span className='parameter-label'>Humidity</span>
            <span className='parameter-value'>{main.humidity}%</span>
          </div>
          <div className='parameter-row'>
            <span className='parameter-label'>Pressure</span>
            <span className='parameter-value'>{main.pressure} pHa</span>
          </div>
        </div>
      </div>
    </div>
  );
};
