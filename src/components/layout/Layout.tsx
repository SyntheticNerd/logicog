import React from "react";
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
      <main>{children}</main>
      <Footer />
    </div>
  );
};

export default Layout;
