import React from "react";
import { regions } from "../utils/regions.js";
import Select from "react-select";
import { ThemeContext } from "styled-components";

const Filter = ({ countries, setCountries }) => {
  const [region, setRegion] = React.useState("");
  const applicationTheme = React.useContext(ThemeContext);

  const customStyles = {
    menu: (provided, state) => ({
      ...provided,
      marginTop: 0,
      backgroundColor: applicationTheme.cards,
    }),
    option: (provided, state) => ({
      ...provided,
      backgroundColor: state.isSelected
        ? applicationTheme.cards
        : state.isFocused
        ? applicationTheme.inputField
        : "inherit",
      ":active": {
        backgroundColor:
          !state.isDisabled &&
          (state.isSelected
            ? applicationTheme.cards
            : applicationTheme.inputValue),
      },
    }),
    container: (provided, state) => ({
      ...provided,
      width: "200px",
      marginRight: "10px",
      "@media only screen and (max-width: 1250px)": {
        ...provided,
        width: "100%",
      },
    }),
    control: (provided, state) => ({
      ...provided,
      backgroundColor: applicationTheme.cards,
      borderColor: state.isDisabled
        ? state.theme.colors.neutral10
        : state.isFocused
        ? "#BABABA"
        : state.theme.colors.neutral20,
      boxShadow: state.isFocused ? "0 0 0 1px #BABABA" : null,
      "&:hover": {
        borderColor: "#BABABA",
      },
    }),
    valueContainer: (provided, state) => ({
      ...provided,
      height: "60px",
      paddingLeft: "20px",
    }),
  };
  React.useEffect(() => {
    if (region !== "") {
      fetch(`https://restcountries.eu/rest/v2/region/${region}`)
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
  }, [region, setCountries]);

  const handleChange = (selectedOption) => {
    setRegion(selectedOption.value);
  };
  return (
    <Select
      className="dropdown"
      placeholder="Filter by Region"
      id="dropdown"
      options={regions}
      ariaLabel="Region Select"
      styles={customStyles}
      onChange={handleChange}
      value={region}
    />
  );
};

export { Filter };
