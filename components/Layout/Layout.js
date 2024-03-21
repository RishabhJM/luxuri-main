import { useState } from "react";
import Footer from "./Footer";
import Nav from "./Nav";
import SideScroll from "./SideScroll";
import Socials from "./Socials";
import Lock from "../Misc/Lock";
import Modal from "../Misc/Modal";

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
          <Modal />
          <Footer></Footer>
        </>
      )}
    </div>
  );
}
