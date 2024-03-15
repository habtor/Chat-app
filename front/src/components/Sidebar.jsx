import Contact from "./Contact";
import Profile from "./Profile";
import SearchBar from "./SearchBar";
import "./SearchBar.css";

const SideBar = () => {
  return (
    <>
      <div className="m-5 bg-myGray outShadowSidebar rounded-2xl py-5 ">
        <Profile />
        <SearchBar />
        <Contact />
        <Contact />
        <Contact />
        <Contact />
        <Contact />
      </div>
    </>
  );
};

export default SideBar;
