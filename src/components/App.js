import React from "react";
import LocationDetails from './LocationDetails';
import ForecastSummaries from './ForecastSummaries';
import "../styles/App.css";



const App = ({location, forecasts}) => (
  <div className="weather-app">
    <LocationDetails
      city={location.city}
      country={location.country}
    />

    <ForecastSummaries forecasts={forecasts} />
  </div>
);



export default App;
