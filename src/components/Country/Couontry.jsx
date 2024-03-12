import { useState } from "react";
import "./Country.css";
import CountryData from "../Countrydata/CountryData";
const Couontry = ({ country, handleVisitedCountry, handleVisitedFlags }) => {
  console.log(country);
  const { name, flags, population } = country;
  const capital = country.capital;
  const [visited, setvisited] = useState(false);
  const handleVisited = () => {
    setvisited(!visited);
  };
  const passWithParams = () => {
    handleVisitedCountry(country);
  };
  return (
    <div className={`country ${visited && "visited"}`}>
      <h4 style={{ color: visited ? "purple" : "white" }}>{name.common}</h4>
      <img src={flags.png} alt="" />
      <h5>Capital: {capital}</h5>
      <p>Population: {population}</p>
      <div className="button">
        <button onClick={passWithParams}>Mark visited</button>
        <button onClick={() => handleVisitedFlags(country.flags.png)}>
          Add Flag
        </button>
      </div>
      <br />
      <button onClick={handleVisited}>{visited ? "visited" : "going"}</button>
      {visited ? "I have visite this country" : "I want to go here"}
      <hr />
      <CountryData
        country={country}
        handleVisitedCountry={handleVisitedCountry}
        handleVisitedFlags={handleVisitedFlags}
      ></CountryData>
    </div>
  );
};

export default Couontry;
