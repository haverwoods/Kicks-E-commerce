import { Button } from "@/components/ui/button";
import { Search } from "lucide-react";
import React from "react";

const Landingpage = () => {
  return (
    <div className="bg-stone-200">
      <div className=" mx-5 py-3">
        <div className=" mt-2 rounded-lg bg-white relative overflow-hidden w-full h-14   px-4  inline-flex ">
          <div className="pl-4 text-2xl font-medium ">Home</div>
          <div className="mx-auto">
            <img src="../asset/Group.png" className=" mt-2 ml-1 h-6 w-20"></img>
          </div>
          <div className="relative">
            <input
              type="text"
              placeholder="Search ..."
              className="bg-stone-200 text-black placeholder-gray-400 rounded-lg mt-2 pl-10 pr-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
              //   value={searchTerm}
              //   onChange={handleSearch}
            />
            <Search
              className=" absolute left-3 top-2.5  text-gray-400 "
              size={18}
            />
          </div>
        </div>
      </div>
      <div className="mt-10 text-9xl font-extrabold mx-80 mb-28 gap-2 ">
        <span className="text-slate-800">DO IT</span>
        <span className="text-cyan-500 "> RIGHT</span>
      </div>
      <div className=" mt-5 mb-2 relative  rounded-lg shadow-lg overflow-hidden w-5/6 h-auto mx-auto">
        <div className="relative">
          <img
            src="../asset/image 14.png"
            alt="Nike Air Max"
            className="w-full h-full object-cover"
          />
          <Button className="mt-5 bg-b bg-lime-800 ">button</Button>
        </div>
      </div>
    </div>
  );
};

export default Landingpage;
