import React from 'react';
import PropTypes from "prop-types";
import ForecastSummary from './ForecastSummary';
import '../styles/ForecastSummaries.css';

const ForecastSummaries = ({forecasts}) => (
    <div className="forecast-summaries">
      {forecasts.map(forecast => (
        <ForecastSummary
          key={forecast.date}
          date={forecast.date}
          description={forecast.description}
          icon={forecast.icon}
          temperature={forecast.temperature}
        />
      ))}
    </div>
  );

ForecastSummaries.propTypes = {
    forecasts: PropTypes.arrayOf(
      PropTypes.shape({
        date: PropTypes.number,
        description: PropTypes.string,
        icon: PropTypes.number,
        temperature: PropTypes.shape({
          max: PropTypes.number,
          min: PropTypes.number,
        }),
      })
    ).isRequired,
    location: PropTypes.shape({
      city: PropTypes.string,
      country: PropTypes.string,
    }).isRequired,
  };

  export default ForecastSummaries;
