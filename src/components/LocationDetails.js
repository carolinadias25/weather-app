import React from "react";
import PropTypes from "prop-types";

const LocationDetails = ({ city, country }) => {
  return (
    <h1 className="location-details">
      {city ? `${city}, ${country}` : `Insert a city name`}
    </h1>
  );
};

LocationDetails.propTypes = {
  city: PropTypes.string,
  country: PropTypes.string,
  errorMessage: PropTypes.string,
};

export default LocationDetails;
