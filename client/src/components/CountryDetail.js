import React from "react";
import styled from "styled-components";
import { countryCodes } from "../utils/countryCodes.js";
import { Link } from "@reach/router";

const StyledCountryDetail = styled.div`
  display: flex;
  margin: 80px 10px 0 10px;
  & h1 {
    margin-top: 40px;
    margin-left: 43px;
  }
  @media (max-width: 1250px) {
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
    width: 100%;
    & img {
      margin-right: 0;
      width: 80%;
      max-width: 500px;
      height: auto;
    }
  }
  @media (min-width: 1251px) {
    & img {
      width: 560px;
      height: 400px;
    }
  }
`;
const StyledColumns = styled.div`
  display: flex;
  margin-left: 42px;
  margin-top: -34px;
  justify-content: space-between;
`;
const StyledSecondColumn = styled.div`
  margin-top: 30px;
`;
const StyledButton = styled.button`
  margin-top: 60px;
  margin-left: 10px;
  height: 40px;
  width: 136px;
  background-color: ${({ theme }) => theme.cards};
  box-shadow: ${({ theme }) => `1px 1px 7px -1px  ${theme.inputField}`};
  color: ${({ theme }) => theme.text};
  border: none;
`;

const StyledFirstColumn = styled.div`
  margin: 33px 0;
  line-height: 16px;
`;

const StyledCountryButton = styled(Link)`
  background-color: ${({ theme }) => theme.cards};
  box-shadow: ${({ theme }) => `1px 1px 7px -1px  ${theme.inputField}`};
  color: ${({ theme }) => theme.text};
  border: none;
  font-size: 14px;
  padding: 5px 25px;
  margin-right: 5px;
`;
const CountryDetail = (props) => {
  const [country, setCountry] = React.useState({});

  React.useEffect(() => {
    fetch(`https://restcountries.eu/rest/v2/name/${props.name}`)
      .then((res) => res.json())
      .then(([country]) => {
        console.log("Country", country);
        setCountry({
          flag: country.flag,
          name: country.name,
          nativeName: country.nativeName,
          population: country.population,
          region: country.region,
          capital: country.capital,
          subregion: country.subregion,
          currencies: country.currencies,
          languages: country.languages,
          borders: country.borders.map((country) => countryCodes[country]),
          topLevelDomain: country.topLevelDomain,
        });
      })
      .catch((err) => console.error(err));
  }, [props.name]);
  const {
    name,
    nativeName,
    capital,
    flag,
    population,
    region,
    subregion,
    currencies,
    languages,
    borders,
    topLevelDomain,
  } = country;

  return (
    <>
      <StyledButton>Back</StyledButton>

      <StyledCountryDetail>
        <img src={flag} alt={`Flag for ${name}`} width="500" height="360" />
        <div>
          <h1>{name}</h1>
          <StyledColumns>
            <StyledFirstColumn>
              <p>
                <b>Native Name:</b> {nativeName}
              </p>
              <p>
                <b>Population:</b> {population}
              </p>
              <p>
                <b>Region:</b> {region}
              </p>
              <p>
                <b>Sub Region:</b> {subregion}
              </p>
              <p>
                <b>Capital:</b> {capital}
              </p>
            </StyledFirstColumn>
            <StyledSecondColumn>
              <p>
                <b>Top Level Domain:</b> {topLevelDomain}
              </p>
              <p>
                <b>Currencies:</b>{" "}
                {currencies &&
                  currencies
                    .reduce((prev, curr) => [...prev, curr.name], [])
                    .join(", ")}
              </p>
              <p>
                <b>Languages:</b>{" "}
                {languages &&
                  languages
                    .reduce((prev, curr) => [...prev, curr.name], [])
                    .join(", ")}
              </p>
            </StyledSecondColumn>
          </StyledColumns>
          <div
            style={{
              marginTop: "30px",
              marginLeft: "42px",
            }}
          >
            <p style={{ display: "flex", flexWrap: "wrap" }}>
              <span style={{ marginRight: "15px" }}>
                <b>Border Countries:</b>
              </span>
              {borders &&
                borders.map((country, index) => {
                  return (
                    <StyledCountryButton to={`/country/${country}`}>
                      {country}
                    </StyledCountryButton>
                  );
                })}
            </p>
          </div>
        </div>
      </StyledCountryDetail>
    </>
  );
};

export { CountryDetail };
