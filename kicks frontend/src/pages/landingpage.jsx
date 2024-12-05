import React from "react";
import { Button } from "@/components/ui/button";
import Card from "@/component/card";
import Navigationbar from "@/component/navigationbar";
import { useNavigate } from "react-router-dom";
import Reviews from "@/component/reviews";

const Landingpage = () => {
  const navigate = useNavigate;
  const order = () => {
    navigate("/kicks frontend/src/component/card.jsx");
  };
  return (
    <div className="bg-stone-200">
      <div className=" mx-5 py-3">
        <Navigationbar />
      </div>

      <div className="mt-10 text-center  mx-auto mb-28 gap-2 text-4xl sm:text-4xl md:text-6xl lg:text-8xl xl:text-9xl font-extrabold">
        <span className="text-slate-800">DO IT</span>
        <span className="text-cyan-500"> RIGHT</span>
      </div>

      <div className=" mt-5 mb-2 relative  rounded-lg shadow-lg overflow-hidden h-auto ml-16 mr-5">
        <div className="relative w-full ">
          <img
            src="../asset/image 14.png"
            alt="Nike Air Max"
            className="w-full h-full object-cover"
          />
          <div className="absolute top-5 left-5    flex justify-center items-center mt-5 mx-5">
            <div className="bg-stone-900 text-white text-sxl font-semibold inline-flex object-cover h-auto px-4 py-2 rounded-xl shadow-lg overflow-hidden ">
              <span>product of the month</span>
            </div>
          </div>
          <div className="mb-40 absolute bottom-10 left-10 text-4xl sm:text-4xl md:text-6xl lg:text-8xl xl:text-9xl font-medium ">
            <span className="text-white">nike air</span>
            <span className="text-white"> max</span>
            <br />
            <span className="text-white text-2xl font-medium leading-snug">
              Nike introducing the new air max for <br />
              everyone's comfort
            </span>
          </div>
          <Button className=" absolute bottom-10 left-10 mt-5 bg-[#4A69E2] px-10 py-4 h-auto text-xl font-medium ">
            buy now
          </Button>
        </div>
      </div>
      <div className=" inline-block ">
        <span className=" ml-5 text-black font-semibold mt-5  text-3xl">
          Don't miss out new drops
        </span>
        <div>
          <Card />
          <Card />
          <Card />
          <Card />
        </div>
      </div>
      {/* catagories section */}
      <div className="static mt-5 h-auto  bg-stone-900  text-white  ">
        <span className=" ml-5 text-white font-semibold mt-5  text-3xl">
          CATEGORIES
        </span>
        <div className="flex justify-center  py-10 ml-10">
          <div className="">
            <img
              src="../asset/image 31.png"
              className="px-5 bg-[#ECEEF0] object-cover w-full rounded-tl-3xl  overflow-hidden"
            />
          </div>
          <div className="">
            <img
              src="../asset/image 32.png"
              className="px-5 bg-[#F6F6F6] object-cover w-full overflow-hidden"
            />
          </div>
        </div>
      </div>
      {/* review section */}
      <div className="inline-block">
      
          <span className=" ml-5 text-black font-semibold mt-5  text-3xl">
            Reviews
          </span>
          <div>

          <Reviews />
          <Reviews />
          <Reviews />
         
        </div>
      </div>
    </div>
  );
};

export default Landingpage;
