import React from "react";
import { NavMenuStyled } from "./NavStyled";

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
    title: "GAMING MICE",
    image: "navigation-products-mice.jpg",
  },
  {
    title: "GAMING MICE",
    image: "navigation-products-mice.jpg",
  },
  {
    title: "GAMING MICE",
    image: "navigation-products-mice.jpg",
  },
  {
    title: "GAMING MICE",
    image: "navigation-products-mice.jpg",
  },
  {
    title: "GAMING MICE",
    image: "navigation-products-mice.jpg",
  },
  {
    title: "GAMING MICE",
    image: "navigation-products-mice.jpg",
  },
  {
    title: "GAMING MICE",
    image: "navigation-products-mice.jpg",
  },
  {
    title: "GAMING MICE",
    image: "navigation-products-mice.jpg",
  },
  {
    title: "GAMING MICE",
    image: "navigation-products-mice.jpg",
  },
];

const NavMenu = () => {
  return (
    <NavMenuStyled
      initial={{ transform: "translateY(-100%)" }}
      animate={{ transform: "translateY(0%)" }}
      exit={{ transform: "translateY(-100%)" }}
      transition={{ type: "just" }}
    >
      <div className='menuGrid'>
        {menuItems.map((item) => (
          <div>
            <img
              src={require(`../../../images/navigation/${item.image}`)}
              alt={item.title}
            />
            {item.title}
          </div>
        ))}
      </div>
    </NavMenuStyled>
  );
};

export default NavMenu;
