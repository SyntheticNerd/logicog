import React from "react";

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
  return (
    <footer>
      <div>
        {footerItems.map((list, i) => (
          <div key={i}>
            {list.map((item) => (
              <a key={item} href='#'>
                {item}
              </a>
            ))}
          </div>
        ))}
      </div>
    </footer>
  );
};

export default Footer;
