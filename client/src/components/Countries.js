import React from "react";
import axios from "axios";
import { Country } from "./Country.js";
import { SearchFilter } from "./SearchFilter.js";
import styled from "styled-components";

const GridDiv = styled.div`
  margin-top: 45px;
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(265px, 1fr));
  grid-gap: 60px;
  justify-items: center;
`;

const Countries = () => {
  const [countries, setCountries] = React.useState([]);
  const [searchText, setSearchText] = React.useState("");

  React.useEffect(() => {
    if (searchText) {
      fetch(`https://restcountries.eu/rest/v2/name/${searchText}`)
        .then(res => res.json())
        .then(data => {
          if (data && data.length) {
            setCountries(data);
          } else {
            setCountries([]);
          }
        })
        .catch(err => console.error(err));
    } else {
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
    }
  }, [setCountries, searchText]);

  return (
    <>
      <SearchFilter
        countries={countries}
        setCountries={setCountries}
        searchText={searchText}
        setSearchText={setSearchText}
      />
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
    </>
  );
};

export { Countries };
