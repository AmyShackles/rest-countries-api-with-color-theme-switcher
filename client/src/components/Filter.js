import React from "react";
import { regions } from "../utils/regions.js";
import axios from "axios";
import Select from "react-select";
import { ThemeContext } from "styled-components";

const Filter = ({ countries, setCountries }) => {
  const [region, setRegion] = React.useState("");
  const applicationTheme = React.useContext(ThemeContext);

  const customStyles = {
    // menu: (provided, state) => {
    //   ...provided} console.log("Provided menu style", provided),
    // control: (provided, state) => console.log("Provided control style", provided),
    // container: (provided, state) =>
    //   console.log("Provided container style", provided),
    // menuList: (provided, state) =>
    //   console.log("Provided menuList style", provided),
    // option: (provided, state) => console.log("Provided optionstyle", provided),
    menu: (provided, state) => ({
      ...provided,
      marginTop: 0,
      backgroundColor: applicationTheme.cards
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
            : applicationTheme.inputValue)
      }
    }),
    container: (provided, state) => ({
      ...provided,
      width: "33%",
      right: 0
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
        borderColor: "#BABABA"
      }
    })
  };
  React.useEffect(() => {
    if (region !== "") {
      const fetchData = async () => {
        axios
          .get(`https://restcountries.eu/rest/v2/region/${region}`)
          .then(res => {
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
          })
          .catch(err => console.error(err));
      };
      fetchData();
    }
  }, [region, setCountries]);

  const handleChange = selectedOption => {
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
