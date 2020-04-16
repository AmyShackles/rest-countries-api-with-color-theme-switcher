import React from "react";
import axios from "axios";
import { Country } from "./Country.js";
import styled from "styled-components";

const GridDiv = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  /* This is better for small screens, once min() is better supported */
  /* grid-template-columns: repeat(auto-fill, minmax(min(200px, 100%), 1fr)); */
  grid-gap: 1rem;
`;

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
    <GridDiv>
      {countries.map((country, index) => (
        <Country
          key={index}
          flag={country.flag}
          name={country.name}
          population={country.population}
          region={country.region}
          capital={country.capital}
        />
      ))}
    </GridDiv>
  );
};

export { Countries };
