import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";

const FadeScreen = () => {
  const location = useLocation();
  const [hide, setHide] = useState(false);

  useEffect(() => {
    window.scrollTo(0, 0);

    const timer = setTimeout(() => {
      setHide(true);
    }, 700); 

    return () => clearTimeout(timer);
  }, [location]);

  return (
    <div
      className={`
        fixed inset-0 z-[9999] bg-black flex items-center justify-center
        transition-transform duration-900 ease-in-out
        ${hide ? "-translate-y-full" : "translate-y-0"}
      `}
    >
      <span className="logo_white text-white">2zup</span>
    </div>
  );
};

export default FadeScreen;
