import { useEffect } from "react";
import { useState } from "react";
import Couontry from "../Country/Couontry";
import "./Countries.css";
const Countries = () => {
  const [countries, setCountries] = useState([]);
  const [visitedCountries, setVisitedCountries] = useState([]);
  const handleVisitedCountry = (country) => {
    console.log(country);
    const newVisitedCountry = [...visitedCountries, country];
    setVisitedCountries(newVisitedCountry);
  };
  const [flags, setFlags] = useState([]);
  const handleVisitedFlags = (flag) => {
    const newVisitedFlags = [...flags, flag];
    setFlags(newVisitedFlags);
  };
  useEffect(() => {
    fetch("https://restcountries.com/v3.1/all")
      .then((res) => res.json())
      .then((data) => setCountries(data));
  }, []);
  return (
    <div className="">
      <h3 className="text">Countries: {countries.length}</h3>
      <div className="">
        <h3>Visited Country: {visitedCountries.length}</h3>
        <ul>
          {visitedCountries.map((country) => (
            <li key={country.name.common}>{country.name.common}</li>
          ))}
        </ul>
      </div>
      <div className="img">
        <h3>Visited Coutry flags: {flags.length}</h3>
        {flags.map((flag, idx) => (
          <img key={idx} src={flag}></img>
        ))}
      </div>
      <div className="country-container">
        {countries.map((country) => (
          <Couontry
            handleVisitedCountry={handleVisitedCountry}
            handleVisitedFlags={handleVisitedFlags}
            key={country.name.common}
            country={country}
          ></Couontry>
        ))}
      </div>
    </div>
  );
};

export default Countries;
