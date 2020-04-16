import React from "react";
import styled from "styled-components";

const FlexGrid = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 300px;
  font-size: 14px;
`;
const Country = ({ flag, name, region, population, capital }) => {
  return (
    <FlexGrid className="card">
      <img src={flag} alt={`Flag for ${name}`} width="300" height="150" />
      <h1>{name}</h1>
      <h2>
        <b>Population:</b> {population}
      </h2>
      <h2>
        <b>Region:</b> {region}
      </h2>
      <h2>
        <b>Capital:</b> {capital}
      </h2>
    </FlexGrid>
  );
};

export { Country };
