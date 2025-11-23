import Logo from "../assets/logo.svg";
import CloseLineIcon from "remixicon-react/CloseLineIcon";
import MenuLineIcon from "remixicon-react/MenuLineIcon";
import { Link } from "react-router-dom";
import { useState } from "react";

const Navbar = () => {
  const [open, setopen] = useState(true);

  return (
    <div className="sticky top-0 bg-[#292D33] pb-[10px] pt-[40px] z-50">
      <div className="max-w-5xl md:mx-auto mx-5 2xl:max-w-full 2xl:mx-40">
        <div className="grid md:flex justify-between items-center">
          <div className="w-[150px] max-h-[52px] md:w-[200px] mt-5 md:mt-0">
            <Link to="/">
              <img src={Logo} alt="" />
            </Link>
          </div>
          <div
            className={`md:flex md:items-center text-white font-[400] ${
              !open ? "block" : "hidden"
            }`}
          >
            <ul className="grid md:flex gap-5 my-5 md:gap-10 list-none text-[14px] lg:text-[20px] font-[400]">
              <li>
                <a href="#about">About Us</a>
              </li>
              <li>
                <a href="#services">Services</a>
              </li>
              <li>
                <a href="#clients">Clients</a>
              </li>
              <li>
                <a href="#team">Team</a>
              </li>
              <li>
                <Link to="/code-of-conduct">Code of Practice</Link>
              </li>
            </ul>
          </div>
          {open === true ? (
            <div
              className="absolute top-[70px] right-4 md:hidden cursor-pointer text-white"
              onClick={() => setopen(false)}
            >
              <MenuLineIcon />
            </div>
          ) : (
            <div
              className="absolute top-[70px] right-4 md:hidden cursor-pointer text-white"
              onClick={() => setopen(true)}
            >
              <CloseLineIcon />
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
