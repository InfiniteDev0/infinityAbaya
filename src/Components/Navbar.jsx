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
      <div className="grid grid-cols-3 items-center gap-3 h-[8vh] min-h-[60px] !p-1 !px-[5%] bg-secondary shadow-md">
        <div className="flex items-center justify-start">
          <img
            className="cursor-pointer"
            onClick={controlSideMenu}
            src={menu}
            alt=""
          />
        </div>
        <div className="flex items-center justify-center">
          <h1
            onClick={() => [navigate("/"), scrollTo(0, 0)]}
            className="text-white one text-3xl cursor-pointer"
          >
            INFINITY
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
              alt=""
            />
          </Link>
          <Link to={"/Login"}>
            <img className="w-[25px] cursor-pointer" src={user} alt="" />
          </Link>
          <Link to={"/Cart"}>
            <img className="w-[25px] cursor-pointer" src={cart} alt="" />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
