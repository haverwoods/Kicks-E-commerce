import { CircleUser, Search } from "lucide-react";
import React from "react";
import NavLinks from "./navlink";
import { Link } from "react-router-dom";


const Navigationbar = () => {
  return (
    <div class="navigationbar" className="">
    
      <div className="mx-5 py-3">
        <div className="flex items-center font-medium justify-around  mt-2 rounded-lg bg-white relative  w-full h-14  ">
          <div className="top-2.5 ml-1 pl-5 ">
            <img
              src="../asset/Group.png"
              className=" mt-3 ml-1 h-6 w-20 "
            ></img>
          </div>

          <ul className="top 2.5 mt-3 pl-4 mx-auto md:flex hidden uppercase items-center gap-8 font-[Poppins]">
            <li>
              <Link to="/" className="py-7 px-3 inline-block">
                Home
              </Link>
            </li>
            <NavLinks />
          </ul>
          <div className="relative right-16 ">
            <input
              type="text"
              placeholder="Search ..."
              className="bg-stone-200 text-black placeholder-gray-400 rounded-lg mt-2 pl-10 pr-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <Search
              className="  h-5 w-5 absolute left-3 bottom-3  text-gray-400 "
              size={18}
            />
          </div>
          <div>
            <CircleUser className="h-10 w-10 absolute right-3 top-2.5 cursor-pointer" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navigationbar;
