import React from "react";
import { Link } from "react-router-dom";
import { NavMenuStyled } from "./NavStyled";
import { toggleNav } from "../../../features/ui/uiSlice";
import { useAppDispatch } from "../../../features/store";

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
  return (
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
  );
};

export default NavMenu;
