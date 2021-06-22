import React from "react";
import PropTypes from "prop-types";

const LocationDetails = (props) => {
  const { city, country, errorMessage } = props;
  return errorMessage ? (
    <h1>{errorMessage}</h1>
  ) : (
    <h1 className="location-details">{`${city}, ${country}`}</h1>
  );
};

LocationDetails.defaultProps = {
  errorMessage: "",
};

LocationDetails.propTypes = {
  city: PropTypes.string,
  country: PropTypes.string,
  errorMessage: PropTypes.string,
};

export default LocationDetails;