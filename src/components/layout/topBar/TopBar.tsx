import React from "react";
import { Link } from "react-router-dom";
import AccountIcon from "../../../images/icons/AccountIcon";
import GlobeIcon from "../../../images/icons/GlobeIcon";
import { TopBarStyled } from "./TopBarStyled";
import { useAppSelector, useAppDispatch } from "../../../features/store";

import {
  logout,
  isLoggedInState,
} from "../../../features/customer/customerSlice";

const TopBar = () => {
  const isLoggedIn = useAppSelector(isLoggedInState);
  const dispatch = useAppDispatch();
  return (
    <TopBarStyled>
      <div>
        <div>
          <Link to='/'>logicog</Link>
          <hr />
          <a href=''>Synthetic Nation</a>
          <hr />
          <a href=''>Synthetic Nerd</a>
          <hr />
          <a href=''>Lantern Loft</a>
        </div>
        <div>
          <div className='icon-container'>
            <GlobeIcon />
            EN
          </div>
          <hr />
          <Link to='my-account' className='icon-container'>
            <AccountIcon /> MY ACCOUNT
          </Link>

          {isLoggedIn && (
            <>
              <hr />
              <button
                className='icon-container'
                onClick={() => dispatch(logout(null))}
              >
                LOG OUT
              </button>
            </>
          )}
        </div>
      </div>
    </TopBarStyled>
  );
};

export default TopBar;
