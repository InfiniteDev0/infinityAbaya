import React, { useContext, useState } from "react";
import { cart, menu, search, searchClose, user } from "../assets/Images";
import { AppContext } from "../Context/AppContext";
import { Link, useNavigate } from "react-router-dom";
import Socials from "../Ui/Socials";

const Navbar = () => {
  const { Visible, setVisible } = useContext(AppContext);
  const [size, setSize] = useState("fit");
  const [makeSearch, setSearch] = useState(false);

  const searchControls = () => {
    if (makeSearch === false) {
      setSearch(true);
      setSize("full");
    } else {
      setSearch(false);
      setSize("fit");
    }
  };
  const controlSideMenu = () => {
    Visible === false ? setVisible(true) : setVisible(false);
  };
  const navigate = useNavigate();

  return (
    <div className="fixed top-0 left-0 w-full z-50">
      <Socials />
      {/* Mobile Navbar */}
      <div className="flex md:hidden items-center justify-between h-[8vh] min-h-[60px] !px-4 bg-secondary shadow-md">
        {/* Left: Menu + Search */}
        <div className="flex items-center gap-4">
          <img
            className="cursor-pointer w-5 h-5"
            onClick={controlSideMenu}
            src={menu}
            alt="menu"
          />
          <img
            className="cursor-pointer w-6 h-6"
            onClick={searchControls}
            src={makeSearch === false ? search : searchClose}
            alt="search"
          />
        </div>
        {/* Center: Brand Name */}
        <div className="flex items-center justify-center">
          <h1
            onClick={() => [navigate("/"), scrollTo(0, 0)]}
            className="text-white one text-2xl font-bold cursor-pointer"
          >
            LAYALI
          </h1>
        </div>
        {/* Right: Profile + Cart */}
        <div className="flex items-center gap-4">
          <Link to={"/Login"}>
            <img className="w-6 h-6 cursor-pointer" src={user} alt="profile" />
          </Link>
          <Link to={"/Cart"}>
            <img className="w-6 h-6 cursor-pointer" src={cart} alt="cart" />
          </Link>
        </div>
      </div>
      {/* Desktop Navbar */}
      <div className="hidden md:grid grid-cols-3 items-center gap-3 h-[8vh] min-h-[60px] !p-1 !px-[5%] bg-secondary shadow-md">
        <div className="flex items-center justify-start">
          <img
            className="cursor-pointer"
            onClick={controlSideMenu}
            src={menu}
            alt="menu"
          />
        </div>
        <div className="flex items-center justify-center">
          <h1
            onClick={() => [navigate("/"), scrollTo(0, 0)]}
            className="text-white one text-3xl cursor-pointer"
          >
            LAYALI
          </h1>
        </div>
        <div className="flex items-center justify-end gap-[2rem] text-white">
          <Link
            to={"/"}
            className={` ${makeSearch === false ? "" : "bg-primary"} w-${[
              size,
            ]} h-[5vh] flex items-center gap-1 text-sm text-black !p-2 rounded transition-all duration-700`}
          >
            <input
              className={`h-[5vh] w-full border-none outline-none bg-transparent !pl-2 three text-lg ${
                makeSearch === false ? "hidden" : "flex"
              }`}
              type="text"
              placeholder="Search"
            />
            <img
              onClick={searchControls}
              className="w-[25px] cursor-pointer"
              src={makeSearch === false ? search : searchClose}
              alt="search"
            />
          </Link>
          <Link to={"/Login"}>
            <img className="w-[25px] cursor-pointer" src={user} alt="profile" />
          </Link>
          <Link to={"/Cart"}>
            <img className="w-[25px] cursor-pointer" src={cart} alt="cart" />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
