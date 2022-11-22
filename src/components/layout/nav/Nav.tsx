import React from "react";
import Logo from "../../../images/Logo";
import CartBtn from "./navButtons/CartBtn";
import NavBtn from "./navButtons/NavBtn";
import SearchBtn from "./navButtons/SearchBtn";
import { NavStyled } from "./NavStyled";

const Nav = () => {
  return (
    <NavStyled>
      <div className='left'>
        <NavBtn />
      </div>

      <Logo />
      <div className='right'>
        <CartBtn />
        <SearchBtn />
      </div>
    </NavStyled>
  );
};

export default Nav;
