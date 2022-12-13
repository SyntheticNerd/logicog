import React, { useEffect } from "react";
import AccountOverview from "../components/myAccount/AccountOverview";
import Hero from "../components/myAccount/Hero";
import { useAppSelector } from "../features/store";
import { isLoggedInState } from "../features/customer/customerSlice";
const MyAccount = () => {
  const isLoggedIn = useAppSelector(isLoggedInState);
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div>
      <Hero />
      {isLoggedIn && <AccountOverview />}
    </div>
  );
};

export default MyAccount;
