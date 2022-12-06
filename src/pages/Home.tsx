import React from "react";
import AdvancedGear from "../components/home/advancedGamingGear/AdvancedGear";
import HeroSlideShow from "../components/home/heroSlideShow/HeroSlideShow";
import Layout from "../components/layout/Layout";
import SignUp from "../components/myAccount/signUp/SignUp";

const Home = () => {
  return (
    <div>
      <HeroSlideShow />
      <AdvancedGear />
    </div>
  );
};

export default Home;
