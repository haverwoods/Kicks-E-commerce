import Navigationbar from "@/component/navbar/navigationbar";
import React from "react";

const Listingpage = () => {
  return (
    <div>
        <Navigationbar/>
      <div
        alt="banner"
        className="relative mt-20 ml-20 mr-20  rounded-3xl"
      >
        <img
          src="../asset/banner.png"
          alt="banner"
          className=" max-w-full max-h-full object-cover pl-20 pr-20"
        />
      </div>
    </div>
  );
};

export default Listingpage;
