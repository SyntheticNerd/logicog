import React from "react";
import { Link } from "react-router-dom";
import { HeroStyled } from "./HeroStyled";
import { useAppSelector } from "../../features/store";

import { customerState } from "../../features/customer/customerSlice";

const Hero = () => {
  const customer = useAppSelector(customerState);
  return (
    <HeroStyled>
      {customer.isLoggedIn ? (
        <>
          <h1>HI, {customer.firstName.toUpperCase()}</h1>
          <div className='columnContainer'>
            <Link to='/login' className='editProfileLink'>
              EDIT PROFILE
            </Link>
            <button className='logOutBtn'>LOG OUT</button>
          </div>
        </>
      ) : (
        <>
          <h1>MY ACCOUNT</h1>
          <div className='flex-container'>
            <Link to='/login' className='login'>
              LOGIN
            </Link>
            <Link to='/create-account' className='create'>
              CREATE AN ACCOUNT
            </Link>
          </div>
        </>
      )}
    </HeroStyled>
  );
};

export default Hero;
