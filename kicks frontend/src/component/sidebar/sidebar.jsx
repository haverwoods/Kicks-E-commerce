import { Button } from "@/components/ui/button";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import { links } from "../navbar/links";
import { sidebarLinks } from "./data";
import { Plus } from "lucide-react";

const Sidebar = () => {
  const [isVisible, setIsVisible] = useState(false);

  const toggleVisibility = (name) => {
    setIsVisible((prevState) => ({
      ...prevState,
      [name]: !prevState[name], // Toggle visibility for the specific link
    }));
  };

  const  getSubLinkCount = (sublinks) => {
    //check is sublink esits if yes then return the length of sublink or else 0
    return sublinks ? sublinks.length : 0;
  };
  return (
    <div className="sticky top-20 overflow-y-auto">
      <div className=" w-60 h-screen px-5 py-5 mt-0 ">
        <div className="mt-6">
          <div className=" ">
            {/* {Link.map()} */}
            {sidebarLinks.map((link) => (
              <div key={link.name}>
                {/* //name of heading */}
                <div className="flex items-center justify-between">
                  <p
                    key={link.name}
                    variant="outline"
                    className="text-sm font-sans px-5 my-5"
                    size="icon"
                  >
                    {link.name}
                  </p>
                  <Plus onClick={() => toggleVisibility(link.name)} />
                </div>
                {/* //list of subheading */}
                {isVisible[link.name] && (
                  <div className=" ">
                    {/* <div className="inline-grid grid-cols-1 gap-x-5 gap-y-5 md:cursor-pointer "> */}
                    <div
                      className={`inline-grid ${
                        getSubLinkCount(link.sublinks) > 8
                          ? "grid-cols-2"
                          : "grid-cols-1"
                      } gap-x-5 gap-y-5 ml-5 md:cursor-pointer text-sm font-sans`}
                    >
                      {link.sublinks.map((sub) => (
                        <div key={sub.name} className="flex items-center">
                          <div className="flex items-center">
                            <input
                              type="checkbox"
                              id={sub.name}
                              className="peer hidden"
                            />
                            <label
                              htmlFor={sub.name}
                              className="w-5 h-5 bg-gray-200 border border-gray-300 rounded-sm flex items-center justify-center peer-checked:bg-black peer-checked:border-black peer-checked:text-white text-transparent"
                            >
                              ✓
                            </label>
                            <span className="ml-2">{sub.name}</span>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>

        <div class="color" className="mt-6">
          <p className="text-xl font-normal mb-2">color</p>
          <div className=" inline-grid grid-cols-2 gap-x-10">
            <div className="inline-grid grid-cols-2 gap-x-3 ">
              <Button
                key="red"
                // key={color.name}
                variant="outline"
                className="w-8 h-8 rounded-full bg-[#D2122E] hover:bg-[#fd5c63] hover:text-white hover:ring-2 hover:ring-[#fc2f39]"
                size="icon"
              ></Button>
              <p className="text-lg font-normal">red</p>
            </div>

            <div className="inline-grid grid-cols-2 gap-x-3 ">
              <Button
                key="red"
                // key={color.name}
                variant="outline"
                className="w-8 h-8 rounded-full bg-[#D2122E] hover:bg-[#fd5c63] hover:text-white"
                size="icon"
              ></Button>
              <p className="text-lg font-normal">red</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
