import React from "react";
import "./Forecast.css";
import {
  Accordion,
  AccordionItemHeading,
  AccordionItem,
  AccordionItemButton,
  AccordionItemPanel,
} from "react-accessible-accordion";

const WEEK_DAYS = [
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
  "Sunday",
];

export const Forecast = ({ data }) => {
  const dayInAWeek = new Date().getDay();
  const forecastDays = WEEK_DAYS.slice(dayInAWeek, WEEK_DAYS.length).concat(
    WEEK_DAYS.slice(0, dayInAWeek)
  );
  console.log(data);

  return (
    <div className='container'>
      <label className='title'>Daily Forecast</label>
      <Accordion allowZeroExpanded allowMultipleExpanded>
        {data.list.splice(0, 7).map((item, index) => (
          <AccordionItem key={index}>
            <AccordionItemHeading>
              <AccordionItemButton>
                <div className='daily-item'>
                  {" "}
                  <img
                    src={`icons/${item.weather[0].icon}.png`}
                    alt=''
                    className='icon-small'
                  />
                  <label className='day'>{forecastDays[index]}</label>
                  <label className='description'>
                    {item.weather[0].description}
                  </label>
                  <label className='min-max'>
                    {Math.round(item.main.temp_min)}°C -{" "}
                    {Math.round(item.main.temp_max)}°C
                  </label>
                </div>
              </AccordionItemButton>
            </AccordionItemHeading>
            <AccordionItemPanel>
              <div className='daily-details-grid'>
                <div className='daily-details-grid-item'>
                  <label className=''>Pressure</label>
                  <label className=''>{item.main.pressure}</label>
                </div>
                <div className='daily-details-grid-item'>
                  <label className=''>Humidity</label>
                  <label className=''>{item.main.humidity}</label>
                </div>
                <div className='daily-details-grid-item'>
                  <label className=''>Clouds</label>
                  <label className=''>{item.clouds.all}</label>
                </div>
                <div className='daily-details-grid-item'>
                  <label className=''>Wind Speed</label>
                  <label className=''>{item.wind.speed} m/s</label>
                </div>
                <div className='daily-details-grid-item'>
                  <label className=''>Sea Level</label>
                  <label className=''>{item.main.sea_level} m</label>
                </div>
                <div className='daily-details-grid-item'>
                  <label className=''>Feels Like</label>
                  <label className=''>
                    {Math.round(item.main.feels_like)} °C
                  </label>
                </div>
              </div>
            </AccordionItemPanel>
          </AccordionItem>
        ))}
      </Accordion>
    </div>
  );
};
