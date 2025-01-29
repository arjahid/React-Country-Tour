import { useState } from "react";
import "./country.css";
const Country = ({ country,handleVisitedCountry }) => {
  console.log(country); 

  const { name, flags, capital, timezones, population } = country;

  const [visited, setVisited] = useState(false);

  const handleVidited = () => {
    setVisited(!visited);
  };
  const passedWithParam=()=>{
    handleVisitedCountry(country)
  }
  return (
    <div className={`country ${visited && "visited"}`}>
      <h3 style={{ color: visited ? "purple" : "white" }}>
        Name: {name.common}
      </h3>
      <img src={flags.png} alt="" />
      <p>Capital: {capital}</p>
      <p>Population: {population} </p>
      <p>Time-Zone: {timezones} </p>
      <button onClick={()=>handleVisitedCountry(country)}>Mark visited</button> <br />
      <button onClick={handleVidited}>
        {visited ? "I have visited" : "No i am not visited"}
      </button>
      {visited && " this country"}
      {!visited && " this country"}
    </div>
  );
};

export default Country;
