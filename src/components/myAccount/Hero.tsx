import React from "react";
import { Link } from "react-router-dom";
import { HeroStyled } from "./HeroStyled";

const Hero = () => {
  return (
    <HeroStyled>
      <h1>MY ACCOUNT</h1>
      <div>
        <Link to='/login' className='login'>
          LOGIN
        </Link>
        <Link to='/create-account' className='create'>
          CREATE AN ACCOUNT
        </Link>
      </div>
    </HeroStyled>
  );
};

export default Hero;
