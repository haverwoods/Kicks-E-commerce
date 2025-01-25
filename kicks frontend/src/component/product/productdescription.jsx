import { Button } from "@/components/ui/button";
import React from "react";
import { sidebarLinks } from "../sidebar/data";

const Productdescription = ({ title, price, description }) => {
  const sizeCategory = sidebarLinks.find((link) => link.name === "Size");

  return (
    <div>
      <p className="text-xl font-sans">{title}</p>
      <p className="text-xl font-sans">{price}</p>
      <p className="mt-2 text-gray-700">{description}</p>
      <p className="text-base font-sans">sizes:</p>
      <div className="grid grid-cols-4 gap-5">
        {sizeCategory?.sublinks.map((size) => (
          <Button
            variant="outline"
            className="hover:bg-black hover:text-white px-7 "
            size="icon"
          >
            <p className="">{size.name}</p>
          </Button>
        ))}
      </div>
      <Button className="  mt-3 px-5 py-5 w-44 sm:w-44 md:w-44 lg:w-44">
        add to bag - <span className=" text-indigo-600 ">{price}</span>
      </Button>
    </div>
  );
};

export default Productdescription;
