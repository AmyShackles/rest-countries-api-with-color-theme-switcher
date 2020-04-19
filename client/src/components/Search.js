import React from "react";
import styled from "styled-components";
import { ReactComponent as SearchIcon } from "./search-outline.svg";

const StyledSearch = styled.div`
  margin-left: 10px;
  width: 37%;
  position: relative;
`;

const StyledSearchInput = styled.input`
  font-size: 14px;
  height: 56px;
  width: 100%;
  padding-left: 75px;
`;
const Search = props => {
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
      />
    </StyledSearch>
  );
};

export { Search };
