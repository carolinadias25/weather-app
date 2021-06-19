import React from "react";
import LocationDetails from './LocationDetails';
import "../styles/App.css";



const App = ({location}) => {
    return (
      <div className="location-details">
        <LocationDetails city={location.city} country={location.country} />
      </div>
    );
  };



export default App;
