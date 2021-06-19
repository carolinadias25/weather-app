import React from "react";
import PropTypes from "prop-types";

const LocationDetails = (location) => (
  <div>
    <h1 className="location-details">
      {location.city}, {location.country}
    </h1>
  </div>
);

LocationDetails.propTypes = {
  city: PropTypes.string,
  country: PropTypes.string,
};

export default LocationDetails;