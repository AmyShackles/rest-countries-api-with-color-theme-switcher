import React from "react";
import { Country } from "./Country.js";
import { SearchFilter } from "./SearchFilter.js";
import styled from "styled-components";
import { useDebounce } from "../utils/useDebounce.js";

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
  const [errorMessage, setErrorMessage] = React.useState("");
  const debouncedSearchText = useDebounce(searchText, 500);

  React.useEffect(() => {
    if (searchText && debouncedSearchText) {
      fetch(`https://restcountries.eu/rest/v2/name/${debouncedSearchText}`)
        .then((res) => {
          if (res.status === 404) {
            setErrorMessage("No countries found");
            return;
          } else {
            setErrorMessage("");
            return res.json();
          }
        })
        .then((data) => {
          if (data && data.length) {
            setCountries(data);
          } else {
            setCountries([]);
          }
        })
        .catch((err) => console.error(err));
    } else {
      fetch("https://restcountries.eu/rest/v2/all")
        .then((res) => res.json())
        .then((data) => {
          setCountries(
            data.map((country) => {
              return {
                flag: country.flag,
                name: country.name,
                population: country.population,
                region: country.region,
                capital: country.capital,
              };
            })
          );
        })
        .catch((err) => console.error(err));
    }
  }, [setCountries, debouncedSearchText]);

  return (
    <>
      <SearchFilter
        countries={countries}
        setCountries={setCountries}
        searchText={searchText}
        setSearchText={setSearchText}
      />
      {errorMessage ? (
        <p>No countries found</p>
      ) : (
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
      )}
    </>
  );
};

export { Countries };
