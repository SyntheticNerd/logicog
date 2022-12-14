import React, { useEffect, useState } from "react";
import { BannerStyled } from "./ProductsPageStyled";
import { AnimatePresence, motion, useAnimation } from "framer-motion";
import { JsxElement } from "typescript";
import { useLocation } from "react-router";
import { set } from "immer/dist/internal";

interface FileNameMap {
  [key: string]: { excerpt: any; fileName: string; mobileFileName?: string };
}

const bannerFileNames: FileNameMap = {
  "gaming-mice": {
    excerpt:
      "Logitech G develops award-winning wireless and wired gaming mice. Constantly innovating from sensors to shape, find the right one for you.",
    fileName: "plp-mice-hero-desktop-2.webp",
    mobileFileName: `https://resource.logitechg.com/w_719,ar_9:16,c_limit,q_auto,f_auto,dpr_2.0/d_transparent.gif/content/dam/gaming/en/plp-mice/plp-mice-hero-mobile.png?v=1`,
  },
  "gaming-mouse-pads": {
    excerpt: (
      <>
        From whole-desktop to minimal size, Logitech G has engineered each
        surface for maximum consistency and stability. And with POWERPLAY, your
        compatible LIGHTSPEED wireless gaming mouse never needs to be plugged in
        to charge again.
        <a href='#'> Mouse is not included in the package contents.</a>
      </>
    ),
    fileName: "plp-mousepads-hero-desktop.webp",
    mobileFileName:
      "https://resource.logitechg.com/w_719,ar_9:16,c_limit,q_auto,f_auto,dpr_2.0/d_transparent.gif/content/dam/gaming/en/plp-mousepads/plp-mousepads-hero-mobile.png?v=1",
  },
  "gaming-keyboards": {
    excerpt:
      "Speed. Accuracy. Durability. Logitech G gaming keyboards are designed with the technology and materials required for high performance gaming.",
    fileName: "plp-keyboard-hero-desktop.webp",
  },
  "gaming-audio": {
    excerpt:
      "Immersive sound, crystal-clear mics, customizable EQ and optional 7.1 surround. Everything you need to get into the game and perform with the added benefit of precise audio.",
    fileName: "plp-audio-hero-desktop-g935.webp",
  },
  "streaming-gear": {
    excerpt:
      "Gaming is more fun when you share it. At Logitech G, we innovate so you can look, sound and perform your best.",
    fileName: "plp-streaming-gear-hero-desktop.webp",
  },
  driving: {
    excerpt:
      "Through design, engineering and a love of driving games, Logitech G takes racing simulation to another level.",
    fileName: "plp-g923-hero-desktop.webp",
  },
  space: {
    excerpt:
      "Space simulation games are on the rise. Play with the de facto space flight and combat H.O.T.A.S. (hands-on-throttle-and-stick) from Logitech G.",
    fileName: "plp-space-hero-desktop.webp",
  },
  flight: {
    excerpt:
      "Logitech G professional-grade flight simulation gear is designed to be fully modular and customizable. Build out your favorite cockpit whether you're a starting novice or an advanced air pilot.",
    fileName: "plp-flight-hero-desktop.webp",
  },
  farm: {
    excerpt:
      "Ride the new tractors and reap the big fields with the only simulation gear designed specifically for Farming Simulator. Customize and use with other compatible simulators as well.",
    fileName: "plp-farm-hero-desktop.webp",
  },
  gamepads: {
    excerpt:
      "Logitech G durability and precision available in a gamepad. Get your console-style controller for PC and play your games the way you want.",
    fileName: "plp-gamepads-hero-desktop.webp",
  },
  accessories: {
    excerpt:
      "Customize and personalize your gear to reflect your playstyle. Explore swappable, colorful and comfortable add-ons. Mix, match, and make it all your own.",
    fileName: "plp-accessories-hero-desktop.webp",
  },
  "cloud-gaming": {
    excerpt: "",
    fileName: "plp-gamepads-hero-desktop-1-latest.webp",
  },
};

const ProductBanner = ({ category }: { category?: string }) => {
  const controls1 = useAnimation();
  const controls2 = useAnimation();
  const controls3 = useAnimation();
  const location = useLocation();
  const [trigger, setTrigger] = useState(false);
  const [to, setTo] = useState<NodeJS.Timeout>();

  useEffect(() => {
    setTrigger(false);
    const _to = setTimeout(() => {
      setTrigger(true);
    }, 500);
    setTo(_to);
    return clearTimeout(to);
  }, [location]);

  return (
    <BannerStyled
      backgroundImageFileName={
        category ? bannerFileNames[category].fileName : ""
      }
      mobileBackgroundFileName={
        category && bannerFileNames[category].mobileFileName
          ? bannerFileNames[category].mobileFileName
          : ""
      }
      category={category ? category : ""}
    >
      <AnimatePresence>
        {trigger && (
          <div className='contentWrapper'>
            <div className='grid'>
              <motion.h1
                initial={{ transform: "translateX(2000px)" }}
                animate={{ transform: "translateX(0px)" }}
                // exit={{ transform: "translateX(-2000px)" }}
                transition={{ delay: 0.5 }}
              >
                {category && category.replace(/-/g, " ").toUpperCase()}
              </motion.h1>
              <div className='miniHr'>
                <motion.div
                  initial={{ width: "100%" }}
                  animate={{ width: "86px" }}
                  // exit={{ width: "0px" }}
                  transition={{ delay: 0.5 }}
                  className='after'
                ></motion.div>
              </div>
              <motion.p
                initial={{ transform: "translateX(2000px)" }}
                animate={{ transform: "translateX(0px)" }}
                // exit={{ transform: "translateX(-2000px)" }}
                transition={{ delay: 0.5 }}
              >
                {category && bannerFileNames[category].excerpt}
              </motion.p>
            </div>
          </div>
        )}
      </AnimatePresence>
    </BannerStyled>
  );
};

export default ProductBanner;
