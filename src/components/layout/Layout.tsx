import React from "react";
import Cart from "./cart/Cart";
import Footer from "./footer/Footer";
import Nav from "./nav/Nav";
import TopBar from "./topBar/TopBar";

interface Props {
  children: React.ReactNode;
}

const Layout = ({ children }: Props) => {
  return (
    <div>
      <header>
        <TopBar />
        <Nav />
      </header>
      <Cart />
      <main>{children}</main>
      <Footer />
    </div>
  );
};

export default Layout;
