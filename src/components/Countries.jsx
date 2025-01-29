import { useEffect, useState } from "react";
import Country from "./country/Country";
import "./Countries.css";

const Countries = () => {
  const [countries, setCountries] = useState([]);
  const [visited, setVisited] = useState([]);
  const [visitedFlag,setVisitedFlag]=useState([])

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
  const handleVisitedFlag=(flag)=>{
    console.log('added visited flag')
    const newVisitedFlag=[...visitedFlag,flag]
    setVisitedFlag(newVisitedFlag)
  }

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
        <div>
            <p>Flag</p>
            {
                visitedFlag.map(flag=><img src={flag} alt="" />)
            }

        </div>
      </div>
      <div className="country-container">
        {countries.map((country) => (
          <Country
            key={country.cca3}
            handleVisitedCountry={handleVisitedCountry}
            handleVisitedFlag={handleVisitedFlag}
            country={country}
          ></Country>
        ))}
      </div>
    </div>
  );
};

export default Countries;