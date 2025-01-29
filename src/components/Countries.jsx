import { useEffect, useState } from "react";
import Country from "./country/Country";
import "./Countries.css";

const Countries = () => {
  const [countries, setCountries] = useState([]);
  const [visited, setVisited] = useState([]);

  useEffect(() => {
    fetch("https://restcountries.com/v3.1/all")
      .then((res) => res.json())
      .then((data) => setCountries(data));
  }, []);

  const handleVisitedCountry = (country) => {
    console.log("added visited country");
    const newVisited =[...visited,country]
    setVisited(newVisited)
  };

  return (
    <div>
      <h3>countries: {countries.length}</h3>
      <div>
        <h5>Visited country: {visited.length}</h5>
        <ul>
            {
                visited.map(country=><li key={country.cca3}>{country.name.common}</li>)
            }
        </ul>
      </div>
      <div className="country-container">
        {countries.map((country) => (
          <Country
            key={country.cca3}
            handleVisitedCountry={handleVisitedCountry}
            country={country}
          ></Country>
        ))}
      </div>
    </div>
  );
};

export default Countries;