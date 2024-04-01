import { useState } from "react";
import Footer from "./Footer";
import Nav from "./Nav";
import Lock from "../Misc/Lock";
import SideScroll from "./SideScroll";

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
          <Nav></Nav>
          {children}
          <Footer></Footer>
        </>
      )}
    </div>
  );
}
