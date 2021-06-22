import React, { useState, useEffect } from "react";
import LocationDetails from './LocationDetails';
import ForecastSummaries from './ForecastSummaries';
import ForecastDetails from './ForecastDetails';
import getForecast from '../requests/getForecast';
import SearchForm from '../components/SearchForm';
import "../styles/App.css";



const App = () => {
  const [forecasts, setForecasts] = useState([]);
  const [location, setLocation] = useState({ city: "", country: "" });
  const [selectedDate, setSelectedDate] = useState(0);
  
  const [searchText, setSearchText] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const selectedForecast = forecasts.find(
    (forecast) => forecast.date === selectedDate
  );

  const handleForecastSelect = (date) => {
    setSelectedDate(date);
  };

  const handleCitySearch = () => {
    getForecast(
      searchText,
      setSelectedDate,
      setForecasts,
      setLocation,
    );
  };

  useEffect(() => {
    getForecast(
      setSelectedDate,
      setForecasts,
      setLocation,
      setSearchText
    );
  }, []);

  return (
    <div className="weather-app">
      <LocationDetails city={location.city} country={location.country} errorMessage={errorMessage} />
      <SearchForm searchText={searchText}
        setSearchText={setSearchText}
        onSubmit={handleCitySearch}/>
      <ForecastSummaries
        forecasts={forecasts}
        onForecastSelect={handleForecastSelect}
      />
      {selectedForecast && (<ForecastDetails forecast={selectedForecast} />)}
    </div>
  );
};



export default App;
