import React from "react";
import Logo from "../../../images/Logo";
import CartBtn from "./navButtons/CartBtn";
import NavBtn from "./navButtons/NavBtn";
import SearchBtn from "./navButtons/SearchBtn";
import NavMenu from "./NavMenu";
import { NavStyled } from "./NavStyled";
import { AnimatePresence } from "framer-motion";
import { useAppSelector } from "../../../features/store";
import { navOpenState } from "../../../features/ui/uiSlice";

const Nav = () => {
  const navOpen = useAppSelector(navOpenState);
  return (
    <>
      <NavStyled navOpen={navOpen}>
        <div className='nav'>
          <div className='left'>
            <NavBtn />
          </div>
          <span>
            <Logo />
          </span>
          <div className='right'>
            <CartBtn />
            <SearchBtn />
          </div>
        </div>
      </NavStyled>
      <AnimatePresence>{navOpen && <NavMenu />}</AnimatePresence>
    </>
  );
};

export default Nav;
