import React from "react";
import PropTypes from "prop-types";
import WeatherIcon from "react-icons-weather";
import moment from "moment";
import "../styles/ForecastSummary.css";
/* eslint-disable  no-unused-vars */

const ForecastSummary = ({ date, icon, temperature, onSelect }) => {
  const today = String(moment(new Date()).format("ddd Do MMM"));
  let forecastDate = String(moment(date).format("ddd Do MMM"));
  if (forecastDate === today) {
    forecastDate = "Today";
  }

  return (
    <div className="forecast-summary" data-testid="forecast-summary">
      <div className="forecast-summary__date">
        {moment(date).format("ddd Do MMM")}
      </div>
      <div className="forecast-summary__icon" data-testid="forecast-icon">
        <WeatherIcon name="owm" iconId={icon} />
      </div>
      <div className="forecast-summary__temperature">
        {temperature.max}
        &deg;C
      </div>
      <button class="Info_Button" type="button" onClick={() => onSelect(date)}>
        More info
      </button>
    </div>
  );
};

export default ForecastSummary;

ForecastSummary.propTypes = {
  date: PropTypes.number.isRequired,
  description: PropTypes.string.isRequired,
  icon: PropTypes.string.isRequired,
  onSelect: PropTypes.func.isRequired,
  temperature: PropTypes.shape({
    min: PropTypes.number,
    max: PropTypes.number,
  }).isRequired,
};
