import React from "react";
import { GMBannerStyled } from "./GamingMiceStyled";
import { motion } from "framer-motion";

const GMBanner = () => {
  return (
    <GMBannerStyled>
      <div className='contentWrapper'>
        <div className='grid'>
          <h1>GAMING MICE</h1>
          <div className='miniHr'>
            <motion.div
              animate={{ width: "86px" }}
              transition={{ delay: 0.5 }}
              className='after'
            ></motion.div>
          </div>
          <p>
            Logitech G develops award-winning wireless and wired gaming mice.
            Constantly innovating from sensors to shape, find the right one for
            you.
          </p>
        </div>
      </div>
    </GMBannerStyled>
  );
};

export default GMBanner;
