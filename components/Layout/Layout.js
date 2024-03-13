import Footer from "./Footer";
import Nav from "./Nav";
import SideScroll from "./SideScroll";
import Socials from "./Socials";

export default function Layout({ children }) {
  return (
    <div className="flex flex-col h-screen">
      {/* <ProgressBar color1="gray" color2="gold" height="4px" position="fixed" /> */}
      <Nav></Nav>
      <div className="flex justify-between">
        <Socials></Socials>
        {children}
        <SideScroll></SideScroll>
      </div>
      <Footer></Footer>
    </div>
  );
}
