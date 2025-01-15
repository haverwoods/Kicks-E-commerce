import React, { useState } from "react";
import { Link } from "react-router-dom";
import { links } from "./links";
import { Menu } from "lucide-react";

const NavLinks = () => {
  const [heading, setHeading] = useState("");
  const [subHeading, setSubHeading] = useState("");

  return (
    <>
      {links.map((link) => (
        <div key={link.name}>
          {/* Main clickable heading */}
          <div className="px-3 text-left md:cursor-pointer group">
            <h1
              className=" flex justify-between items-center md:pr-0 pr-5 group"
              onClick={() => {
                heading !== link.name ? setHeading(link.name) : setHeading("");
                setSubHeading("");
              }}
            >
              {link.name}
              {/* Show chevron icon to indicate open/close */}
              <span className="text-xl md:hidden inline">
                <Menu
                  name={heading === link.name ? "chevron-up" : "chevron-down"}
                ></Menu>
              </span>
            </h1>

            {/* submenu if available */}
            {link.submenu && (
              <div>
                <div className=" absolute top-full left-1/2 transform -translate-x-1/2 w-full max-w-screen-xl opacity-0 invisible group-hover:opacity-100 group-hover:visible z-50 transition-all duration-300">
                  <div className="bg-white p-8 w-full shadow-lg">
                    <div className="grid grid-cols-6 gap-8">
                      {/* sublinks */}
                      {link.sublinks.map((mysublinks) => (
                        <div key={mysublinks.Head}>
                          {/* Section Header */}
                          <h1 className="text-lg font-bold text-gray-800 mb-4">
                            {mysublinks.Head}
                          </h1>
                          {/* Submenu Links */}
                          <ul>
                            {mysublinks.sublink.map((newlink) => (
                              <li
                                key={newlink.name}
                                className="text-sm text-gray-600 my-2"
                              >
                                <Link
                                  to={newlink.link}
                                  className="hover:text-black transition duration-200"
                                >
                                  {newlink.name}
                                </Link>
                              </li>
                            ))}
                          </ul>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>

          {/* responsive mobile menu */}
        </div>
      ))}
    </>
  );
};

export default NavLinks;
