import React from "react";
import Logo from "../../../images/Logo";
import CartBtn from "./navButtons/CartBtn";
import NavBtn from "./navButtons/NavBtn";
import SearchBtn from "./navButtons/SearchBtn";
import NavMenu from "./NavMenu";
import { NavStyled } from "./NavStyled";
import { AnimatePresence } from "framer-motion";
import { useAppSelector } from "../../../features/store";
import {
  navOpenState,
  peakState,
  topState,
} from "../../../features/ui/uiSlice";
import { Link } from "react-router-dom";

const Nav = () => {
  const navOpen = useAppSelector(navOpenState);
  const peak = useAppSelector(peakState);
  const top = useAppSelector(topState);
  return (
    <>
      <NavStyled
        navOpen={navOpen}
        peak={peak && !navOpen}
        top={top}
        animate={{
          transform:
            peak || top || navOpen ? "translateY(0)" : "translateY(-100%)",
        }}
      >
        <div className='nav'>
          <div className='left'>
            <NavBtn />
          </div>
          <span>
            <Link to='/'>
              <Logo />
            </Link>
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
