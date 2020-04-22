import React from "react";
import { Search } from "./Search.js";
import { Filter } from "./Filter.js";
import styled from "styled-components";

const StyledSearchFilter = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 45px;
  @media (max-width: 1250px) {
    flex-direction: column;
    width: 90%;
    margin: auto;
  }
`;
const SearchFilter = ({
  countries,
  setCountries,
  searchText,
  setSearchText,
}) => {
  return (
    <StyledSearchFilter>
      <Search
        setCountries={setCountries}
        searchText={searchText}
        setSearchText={setSearchText}
      />
      <Filter countries={countries} setCountries={setCountries} />
    </StyledSearchFilter>
  );
};

export { SearchFilter };
