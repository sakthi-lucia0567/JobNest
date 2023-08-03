import React from "react";
import { GiNestedHexagons } from "react-icons/gi";
import { BiUserCircle } from "react-icons/bi";

function Header() {
  return (
    <>
      <nav className="flex justify-between m-5 p-5">
        <div className="flex items-center">
          <span className="icon-bold">
            <GiNestedHexagons size={38} className=" text-light-primary" />
          </span>
          <div className="w-px h-6 bg-gray-300 mx-4"></div>
          <h1 className="text-xl font-poppins font-medium #786874">JobNest</h1>
        </div>
        <ul className="flex items-center">
          <li>
            <a href="#">
              <BiUserCircle size={38} color="#786874" />
            </a>
          </li>
        </ul>
      </nav>
    </>
  );
}

export default Header;
