import React from "react";
import styled from "styled-components";
import { countryCodes } from "../utils/countryCodes.js";
import { BackButton } from "./BackButton.js";
import { Link } from "@reach/router";

const StyledCountryDetail = styled.div`
  display: flex;
  margin: 80px 10px 0 10px;
  justify-content: space-between;
  & h1 {
    margin-top: 40px;
  }
  @media (max-width: 1250px) {
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
  @media (min-width: 1251px) {
    width: 47%;
  }
`;
const StyledSecondColumn = styled.div``;

const StyledFirstColumn = styled.div`
  line-height: 16px;
`;
const StyledFlex = styled.div`
  display: flex;
  justify-content: space-between;
  @media (max-width: 1250px) {
    flex-direction: column;
  }
`;

const StyledCountryButtonWrapper = styled.p`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  @media (max-width: 1250px) {
    display: flex;
    flex-direction: column;
    margin: 5px;
  }
`;
const StyledCountryButton = styled(Link)`
  background-color: ${({ theme }) => theme.cards};
  box-shadow: ${({ theme }) => `1px 1px 7px -1px  ${theme.inputField}`};
  color: ${({ theme }) => theme.text};
  border: none;
  font-size: 14px;
  padding: 5px 25px;
  margin: 5px 5px 0 0;
`;
const CountryDetail = (props) => {
  const [country, setCountry] = React.useState({});

  React.useEffect(() => {
    fetch(`https://restcountries.eu/rest/v2/name/${props.name}`)
      .then((res) => res.json())
      .then(([country]) => {
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
      <BackButton goBack={() => props.navigate("/")} />

      <StyledCountryDetail>
        <img src={flag} alt={`Flag for ${name}`} width="500" height="360" />
        <StyledColumns>
          <h1>{name}</h1>
          <StyledFlex>
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
          </StyledFlex>
          <div
            style={{
              marginTop: "60px",
            }}
          >
            <StyledCountryButtonWrapper>
              <span style={{ marginRight: "15px" }}>
                <b>Border Countries:</b>
              </span>
              {borders &&
                borders.map((country, index) => {
                  return (
                    <StyledCountryButton key={index} to={`/country/${country}`}>
                      {country}
                    </StyledCountryButton>
                  );
                })}
            </StyledCountryButtonWrapper>
          </div>
        </StyledColumns>
      </StyledCountryDetail>
    </>
  );
};

export { CountryDetail };
