import React from "react";
import AdvancedGear from "../components/home/advancedGamingGear/AdvancedGear";
import FeaturedQuote from "../components/home/featuredQuote/FeaturedQuote";
import HeroSlideShow from "../components/home/heroSlideShow/HeroSlideShow";
import Innovation from "../components/home/innovation/Innovation";
import Latest from "../components/home/latest/Latest";
import LevelToPlay from "../components/home/levelsToPlay/LevelToPlay";
import StandardArticle from "../components/home/standardArticle/StandardArticle";

const Home = () => {
  return (
    <div>
      <HeroSlideShow />
      <AdvancedGear />
      <LevelToPlay />
      <StandardArticle
        title='Play to Win'
        article='Designed with and for the world’s leading esports professionals.'
        button='Shop Pro Gear'
        link='#'
        image={`${require("../images/home/pro-series-logo.webp")}`}
        backgroundImage={`${require("../images/home/home-banner-new-de.webp")}`}
      />
      <FeaturedQuote />
      <StandardArticle
        title='Supporting Teams, Athletes and Fans'
        article='Logitech G proudly sponsor hundreds of esports professionals to advance gaming through collaboration.'
        button='More on Esports'
        link='#'
        image={`${require("../images/home/G-esports-logo.webp")}`}
        backgroundImage={`${require("../images/home/home-esports-tout.webp")}`}
      />
      <Latest />
      <Innovation />
    </div>
  );
};

export default Home;
