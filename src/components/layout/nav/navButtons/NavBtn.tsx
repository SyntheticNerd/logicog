import React from "react";
import { NavBtnStyled } from "./ButtonsStyled";
import { useAppDispatch, useAppSelector } from "../../../../features/store";

import { navOpenState, toggleNav } from "../../../../features/ui/uiSlice";

const NavBtn = () => {
  const navOpen = useAppSelector(navOpenState);
  const dispatch = useAppDispatch();
  return (
    <NavBtnStyled onClick={() => dispatch(toggleNav(null))} navOpen={navOpen}>
      <div className='line1'></div>
      <div className='line2'></div>
      <div className='line3'></div>
    </NavBtnStyled>
  );
};

export default NavBtn;
