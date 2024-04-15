import Footer from "./Footer";
import Nav from "./Nav";
import Lock from "../Misc/Lock";
import SideScroll from "./SideScroll";
import { useEffect, useState } from "react";

export default function Layout({ children }) {
  const [scrollTop, setScrollTop] = useState(0);

  const onScroll = () => {
    const winScroll = document.documentElement.scrollTop;
    const height =
      document.documentElement.scrollHeight -
      document.documentElement.clientHeight;
    const scrolled = (winScroll / height) * 100;

    setScrollTop(scrolled);
  };

  useEffect(() => {
    window.addEventListener("scroll", onScroll);

    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const [authenticated, setAuthenticated] = useState(false);

  const handleUnlock = () => {
    setAuthenticated(true);
  };

  return (
    <div>
      {!authenticated && <Lock onUnlock={handleUnlock} />}
      {authenticated && (
        <>
          <div className="progressMainWrapper">
            <div
              className="progressMainStyle"
              style={{ height: `${scrollTop}%` }}
            ></div>
          </div>
          <Nav></Nav>
          {children}
        </>
      )}
    </div>
  );
}
