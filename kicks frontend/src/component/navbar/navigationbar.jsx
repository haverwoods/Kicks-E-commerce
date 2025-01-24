import { CircleUser, Search } from "lucide-react";
import React from "react";
import NavLinks from "./navlink";
import { Link } from "react-router-dom";

const Navigationbar = () => {
  return (
    <div class="navigationbar" className="">
      <div className="mx-5 py-3">
        <div className=" mx-auto flex items-center justify-between mt-2 rounded-lg bg-white relative  w-full h-14  ">
          {/* logo */}
          <div className="top-2.5 ml-1 pl-5 ">
            <img
              src="../asset/Group.png"
              className=" mt-3 ml-1 h-6 w-20 sm:h-1 sm:w-5 md:w-10 md:h-5 lg:w-14 lg:h-3 xl:w-16 xl:h-5"
            ></img>
          </div>
          {/* //links */}
          <div>
            <ul className="top 2.5 mt-3 pl-4 mx-auto md:flex hidden uppercase items-center gap-8 font-[Poppins]">
              <li>
                <Link to="/" className="py-7 px-3 ">
                  Home
                </Link>
              </li>
              <NavLinks />
            </ul>
          </div>
          {/* //search bar */}
          <div className=" flex items-center relative">
            <div className="relative flex items-center">

              <Search className=" absolute left-3 text-stone-700 " size={20} />
            <input
              type="text"
              placeholder="Search ..."
              className="w-36 mt-2  pl-10 pr-4 py-2 bg-stone-200 text-black placeholder-gray-400 rounded-lg  focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            </div>
          </div>
          {/* //user */}
          <div>
            <CircleUser className="h-10 w-10 absolute right-3 top-2.5 cursor-pointer" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navigationbar;
