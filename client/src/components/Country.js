import React from "react";

const Country = ({ flag, name, region, population, capital }) => {
  return (
    <>
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
    </>
  );
};

export { Country };
