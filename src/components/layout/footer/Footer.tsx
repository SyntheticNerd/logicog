import React, { useState } from "react";
import { FooterStyled } from "./FooterStyled";

import { ReactComponent as Twitter } from "../../../images/icons/social/twitter.svg";
import { ReactComponent as Facebook } from "../../../images/icons/social/facebook.svg";
import { ReactComponent as Youtube } from "../../../images/icons/social/youtube.svg";
import { ReactComponent as Instagram } from "../../../images/icons/social/instagram.svg";

const footerItems = [
  ["ABOUT", "WEB PRIVACY POLICY", "INVESTORS", "PRESS", "ACCESSABILITY"],
  [
    "CONTACT",
    "PRODUCT PRIVACY POLICY",
    "TERMS OF USE",
    "RETURN POLICY",
    "EMAIL PREFERENCE",
  ],
  [
    "CAREERS",
    "COOKIE SETTINGS",
    "SUSTAINABILITY",
    "REFURBISHED PRODUCTS",
    "EMAIL SIGN UP PAGE",
  ],
  ["PARTNER DEVELOPER LAB", "SITEMAP", "RECYCLING", "STUDENT DISCOUNT"],
];

const Footer = () => {
  const [email, setEmail] = useState("");
  const emailChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value);
  };
  return (
    <FooterStyled>
      <div className='contentWrapper'>
        <div className='top'>
          {footerItems.map((list, i) => (
            <ul key={i}>
              {list.map((item) => (
                <li>
                  <a key={item} href='#'>
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          ))}
        </div>
        <div className='bottom'>
          <p className='copyright'>© 2022 Logitech. All rights reserved</p>
          <form action='' className='subscribe'>
            {" "}
            <div className='mainInput'>
              <input type='text' value={email} onChange={emailChangeHandler} placeholder="EMAIL ADDRESS*"/>
              <button>SUBSCRIBE</button>
            </div>
            <div className='checkBox'>
              <input type='checkbox' />
              <label htmlFor=''>
                Yes, I want to receive news and product emails. Read our{" "}
                <a href=''>privacy policy</a>.
              </label>
            </div>
          </form>
          <div className='socialLinks'>
            <ul>
              <li className='twitter'>
                <a href='https://twitter.com'>
                  <Twitter />
                </a>
              </li>
              <li className='facebook'>
                <a href='https://facebook.com'>
                  <Facebook />
                </a>
              </li>
              <li className='youtube'>
                <a href='https://youtube.com'>
                  <Youtube />
                </a>
              </li>
              <li className='instagram'>
                <a href='https://instagram.com'>
                  <Instagram />
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </FooterStyled>
  );
};

export default Footer;
