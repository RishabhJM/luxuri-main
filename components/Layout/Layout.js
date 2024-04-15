import Footer from "./Footer";
import Nav from "./Nav";
import Lock from "../Misc/Lock";
import SideScroll from "./SideScroll";
import { useEffect, useState } from "react";

const ProgressBar = () => {
  const [scrollPercentage, setScrollPercentage] = useState(0);

  useEffect(() => {
    const updateScrollPercentage = () => {
      const windowHeight = window.innerHeight;
      const fullHeight = document.body.clientHeight;
      const scrolled = window.scrollY;
      const progress = (scrolled / (fullHeight - windowHeight)) * 100;
      setScrollPercentage(progress);
    };

    window.addEventListener("scroll", updateScrollPercentage);

    return () => {
      window.removeEventListener("scroll", updateScrollPercentage);
    };
  }, []);

  return (
    <div className="hidden md:block fixed right-3 top-1/2 transform -translate-y-1/2 h-[60vh] w-2 bg-gray-300 z-40 rounded-xl">
      <div
        className="absolute w-2 top-0 bg-[#BA9B6C] z-50 rounded-xl"
        style={{ height: `${scrollPercentage}%` }}
      />
    </div>
  );
};

export default function Layout({ children }) {
  const [authenticated, setAuthenticated] = useState(false);

  const handleUnlock = () => {
    setAuthenticated(true);
  };

  return (
    <div>
      {!authenticated && <Lock onUnlock={handleUnlock} />}
      {authenticated && (
        <>
          <ProgressBar></ProgressBar>

          <Nav></Nav>
          {children}
        </>
      )}
    </div>
  );
}
