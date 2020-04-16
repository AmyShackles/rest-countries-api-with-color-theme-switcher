import React from "react";
import axios from "axios";

const Countries = () => {
  const [countries, setCountries] = React.useState([]);

  React.useEffect(() => {
    axios
      .get("https://restcountries.eu/rest/v2/all")
      .then(res => {
        if (res.status === 200) {
          setCountries(
            res.data.map(country => {
              return {
                flag: country.flag,
                name: country.name,
                population: country.population,
                region: country.region,
                capital: country.capital
              };
            })
          );
        } else {
          console.error(res.statusText);
        }
      })
      .catch(err => console.error(err));
  }, []);

  return (
    <ul>
      {countries.map((country, index) => (
        <li key={index}>
          <ul>
            <img src={country.flag} alt={`Flag for ${country.name}`} />
            <h1>{country.name}</h1>
            <h2>Population: {country.population}</h2>
            <h2>Region: {country.region}</h2>
            <h2>Capital: {country.capital}</h2>
          </ul>
        </li>
      ))}
    </ul>
  );
};

export { Countries };
