import React, { useState } from "react";
import { Link } from "react-router-dom";
import { MobileNavStyled, NavMenuStyled } from "./NavStyled";
import { toggleNav } from "../../../features/ui/uiSlice";
import { useAppDispatch, useAppSelector } from "../../../features/store";
import { motion } from "framer-motion";
import AccountIcon from "../../../images/icons/AccountIcon";
import GlobeIcon from "../../../images/icons/GlobeIcon";
import {
  isLoggedInState,
  logout,
} from "../../../features/customer/customerSlice";

const menuItems = [
  {
    title: "GAMING MICE",
    image: "navigation-products-mice.jpg",
  },
  {
    title: "GAMING MOUSE PADS",
    image: "navigation-products-gaming-mouse-pads.jpg",
  },
  {
    title: "GAMING KEYBOARDS",
    image: "navigation-products-keyboard.jpg",
  },
  {
    title: "GAMING AUDIO",
    image: "navigation-products-audio-video.jpg",
  },
  {
    title: "STREAMING GEAR",
    image: "navigation-products-streaming-gear.jpg",
  },
  {
    title: "DRIVING",
    image: "prowheels2-nav.png",
  },
  {
    title: "SPACE",
    image: "navigation-products-space.jpg",
  },
  {
    title: "FLIGHT",
    image: "navigation-products-flight.jpg",
  },
  {
    title: "FARM",
    image: "navigation-products-farm.jpg",
  },
  {
    title: "GAMEPADS",
    image: "navigation-products-gamepads.jpg",
  },
  {
    title: "ACCESSORIES",
    image: "plp-navigation-products-accessories.png",
  },
  {
    title: "CLOUD GAMING",
    image: "navigation-products-cloud-gaming.png",
  },
];

const NavMenu = () => {
  const dispatch = useAppDispatch();
  const [expandProduct, setExpandProduct] = useState(false);
  const isLoggedIn = useAppSelector(isLoggedInState);

  return (
    <>
      {" "}
      <NavMenuStyled
        initial={{ transform: "translateY(-100%)" }}
        animate={{ transform: "translateY(0%)" }}
        exit={{ transform: "translateY(-100%)" }}
        transition={{ type: "just" }}
      >
        <div className='menuGrid'>
          {menuItems.map((item) => (
            <Link
              to={`products/${item.title.replace(/\s/g, "-").toLowerCase()}`}
              onClick={() => dispatch(toggleNav(null))}
            >
              <img
                src={require(`../../../images/navigation/${item.image}`)}
                alt={item.title}
              />
              <p>{item.title}</p>
            </Link>
          ))}
        </div>
      </NavMenuStyled>
      <MobileNavStyled>
        <div className='backDrop' onClick={() => dispatch(toggleNav(null))} />
        <motion.div
          initial={{ transform: "translateX(-120%)" }}
          animate={{ transform: "translateX(0%)" }}
          exit={{ transform: "translateX(-120%)" }}
          transition={{ type: "just" }}
          className='contentWrapper'
        >
          <button
            className='closeBtn'
            onClick={() => dispatch(toggleNav(null))}
          />
          <div className='anotherWrapper'>
            <button
              className='expandableButton'
              onClick={() => setExpandProduct((old) => !old)}
            >
              Products <span>►</span>
            </button>
            <div
              className='listWrapper'
              style={{
                maxHeight: expandProduct ? "450px" : "0px",
                minHeight: expandProduct ? "450px" : "0px",
                opacity: expandProduct ? "1" : "0",
              }}
            >
              {menuItems.map((item) => (
                <Link
                  to={`products/${item.title
                    .replace(/\s/g, "-")
                    .toLowerCase()}`}
                  onClick={() => dispatch(toggleNav(null))}
                >
                  <p>{item.title}</p>

                  <img
                    src={require(`../../../images/navigation/${item.image}`)}
                    alt={item.title}
                  />
                </Link>
              ))}
            </div>
            <div className='icon-container'>
              EN
              <GlobeIcon />
            </div>
            <Link to='my-account' className='icon-container expandableButton'>
              MY ACCOUNT <AccountIcon />
            </Link>

            <Link to='/' className='expandableButton'>
              logicog
            </Link>
            <a href='' className='expandableButton'>
              Synthetic Nation
            </a>
            <a href='' className='expandableButton'>
              Synthetic Nerd
            </a>
            <a href='' className='expandableButton'>
              Lantern Loft
            </a>
            {isLoggedIn && (
              <>
                <button
                  className='icon-container logoutBtn'
                  onClick={() => dispatch(logout(null))}
                >
                  LOG OUT
                </button>
              </>
            )}
          </div>
        </motion.div>
      </MobileNavStyled>
    </>
  );
};

export default NavMenu;
