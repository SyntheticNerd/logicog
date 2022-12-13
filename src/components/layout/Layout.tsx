import React, { useEffect, useState, useCallback } from "react";
import Cart from "./cart/Cart";
import Footer from "./footer/Footer";
import Nav from "./nav/Nav";
import TopBar from "./topBar/TopBar";
import { useAppDispatch } from "../../features/store";
import { closePeak, openPeak, setTop } from "../../features/ui/uiSlice";

interface Props {
  children: React.ReactNode;
}

const Layout = ({ children }: Props) => {
  const dispatch = useAppDispatch();
  const [y, setY] = useState(window.scrollY);

  const handleNavigation = useCallback(
    (e: any) => {
      const window = e.currentTarget;
      if (y > window.scrollY) {
        console.log("scrolling up");
        if (window.scrollY < 42) {
          dispatch(setTop(true));
        } else {
          dispatch(setTop(false));
        }
        if (window.scrollY > 90) {
          dispatch(openPeak(null));
        } else {
          dispatch(closePeak(null));
        }
      } else if (y < window.scrollY) {
        if (window.scrollY < 42) {
          dispatch(setTop(true));
        } else {
          dispatch(setTop(false));
        }
        dispatch(closePeak(null));
        console.log("scrolling down");
      }
      setY(window.scrollY);
    },
    [dispatch, y]
  );

  useEffect(() => {
    setY(window.scrollY);
    window.addEventListener("scroll", handleNavigation);

    return () => {
      window.removeEventListener("scroll", handleNavigation);
    };
  }, [handleNavigation]);

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
