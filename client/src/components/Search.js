import React from "react";
import styled from "styled-components";
import { ReactComponent as SearchIcon } from "./search-outline.svg";

const StyledSearch = styled.div`
  margin-left: 10px;
  width: 37%;
  position: relative;
  @media (max-width: 1250px) {
    width: 100%;
    margin-left: 0;
    margin-bottom: 5px;
  }
`;

const StyledSearchInput = styled.input`
  font-size: 14px;
  height: 56px;
  width: 100%;
  padding-left: 75px;
`;
const Search = ({ setCountries, searchText, setSearchText }) => {
  const handleChange = (event) => {
    setSearchText(event.target.value);
  };
  return (
    <StyledSearch>
      <SearchIcon
        style={{ position: "absolute", marginLeft: "30px", top: "20px" }}
      />
      <StyledSearchInput
        aria-label="search"
        placeholder="Search for a country..."
        id="searchBox"
        type="text"
        onChange={handleChange}
      />
    </StyledSearch>
  );
};

export { Search };
