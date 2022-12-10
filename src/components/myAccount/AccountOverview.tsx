import React, { useEffect, useState } from "react";
import { Link, Outlet, useLocation } from "react-router-dom";
import { AccountOverviewStyled, AccountWrapper } from "./AccountOverviewStyled";

const overviewOptions = [
  {
    sectionName: "ACCOUNT",
    description: "Edit your personal information and change your password.",
    links: [
      { name: "profile", link: "profile" },
      { name: "address book", link: "address-book" },
      { name: "payment options", link: "payment-options" },
      { name: "privacy + data", link: "privacy-data" },
      { name: "login + security", link: "login-security" },
    ],
  },
  {
    sectionName: "ORDERS",
    description:
      "Check the status of your orders, make a return, or view your order history.",
    links: [
      { name: "my orders", link: "my-orders" },
      { name: "order faqs", link: "order-faqs" },
    ],
  },
  {
    sectionName: "MY PRODUCTS",
    description:
      "Register your product and find all the information you need to get started.",
    links: [
      { name: "register a product", link: "register-product" },
      { name: "downloads", link: "downloads" },
    ],
  },
];

const AccountOverview = () => {
  const [outletActive, setOutletActive] = useState(false);
  const location = useLocation();

  useEffect(() => {
    if (location.pathname !== "/my-account") {
      setOutletActive(true);
    } else {
      setOutletActive(false);
    }
  }, [location]);

  return (
    <AccountWrapper>
      <AccountOverviewStyled outletActive={outletActive}>
        {overviewOptions.map((option, i) => (
          <div key={i}>
            <h3>{option.sectionName}</h3>
            <p>{option.description}</p>
            <ul>
              {option.links.map((link) => (
                <li>
                  <Link to={link.link}>
                    {link.name.toUpperCase()} <span>►</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </AccountOverviewStyled>
      <Outlet />
    </AccountWrapper>
  );
};

export default AccountOverview;
