import React from "react";
import { ReactComponent as SearchIcon } from "../../../../images/icons/search.svg";
import { SearchBtnStyled } from "./ButtonsStyled";

const SearchBtn = () => {
  return (
    <SearchBtnStyled>
      <SearchIcon />
    </SearchBtnStyled>
  );
};

export default SearchBtn;
