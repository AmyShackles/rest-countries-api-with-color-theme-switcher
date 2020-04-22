import React from "react";
import styled from "styled-components";
import { Link } from "@reach/router";

const FlexGrid = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  width: 265px;
  padding-bottom: 20px;
  margin-bottom: 20px;
  & h2 {
    font-size: 18px;
    padding-left: 20px;
    padding-top: 10px;
  }
  & p {
    font-size: 14px;
    margin: 1px;
    line-height: 22px;
    padding-left: 20px;
  }
  & p:last-of-type {
    padding-bottom: 20px;
  }
  & img {
    width: 265px;
    height: 160px;
  }
`;
const Country = ({ flag, name, region, population, capital }) => {
  return (
    <Link to={`/country/${name}`}>
      <FlexGrid className="card">
        <img src={flag} alt={`Flag for ${name}`} width="300" height="150" />
        <h2>{name}</h2>
        <p>
          <b>Population:</b> {population}
        </p>
        <p>
          <b>Region:</b> {region}
        </p>
        <p>
          <b>Capital:</b> {capital}
        </p>
      </FlexGrid>
    </Link>
  );
};

export { Country };
