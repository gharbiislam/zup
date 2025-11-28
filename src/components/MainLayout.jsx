import React, { useEffect, useState } from "react";
import Footer from "./Footer";
import Navbar from "./Navbar";

const MainLayout = ({ children }) => {
  const [hideNav, setHideNav] = useState(false);

  useEffect(() => {
    let last = 0;
    const onScroll = () => {
      const current = window.scrollY;
      setHideNav(current > last);
      last = current;
    };
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div className="bg-black_5 relative min-h-screen">
      <div
        className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 
        ${hideNav ? "-translate-y-full" : "translate-y-0"}`}
      >
        <Navbar />
      </div>

      <main className="relative z-10 pt-16">{children}</main>

      <Footer />
    </div>
  );
};

export default MainLayout;
