import "./country.css";
const Country = ({ country }) => {
  console.log(country);
  const { name, flags, capital, timezones, population } = country;
  return (
    <div className="country">
      <h3>Name: {name.common}</h3>
      <img src={flags.png} alt="" />
      <p>Capital: {capital}</p>
      <p>Population: {population} </p>
      <p>Time-Zone: {timezones} </p>
    </div>
  );
};

export default Country;
