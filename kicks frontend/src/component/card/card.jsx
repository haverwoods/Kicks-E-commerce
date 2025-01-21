import { Button } from "@/components/ui/button";
import React from "react";

const Card = ({ imagesrc, texts, price }) => {
  return (
    <div className="  rounded-t-3xl mt-5 px-2  ">
      {/* <div className="w-full h-96 sm:w-56 sm:h-72 md:w-64 md:h-80 lg:w-72 lg:h-96 border-[2px] border-[#000000] rounded-3xl shadow-lg overflow-hidden"> */}
      <div className="w-full max-w-md h-auto sm:max-w-sm md:max-w-md lg:max-w-lg border-2 border-black rounded-3xl shadow-lg overflow-hidden mx-auto">
        <img
          // src="../asset/Rectangle 5.png"
          // src="../asset/ins.jpeg"
          // src="https://cdn.shopify.com/s/files/1/0293/9277/files/12-23-24_S2_48_KJGT4102308_Charcoal_CXB_RL_16-07-31_26994_PXF.jpg?v=1735323750&width=400&height=599&crop=center"
          // src="https://cdn.shopify.com/s/files/1/0293/9277/files/08-21-24_S2_22_BPLI025F_Stone_ZSR_CXB_RL_14-30-02_3047_BH.jpg?v=1724286406&width=600&height=900&crop=center"
          src={imagesrc}
          className="rounded-3xl  object-cover w-full h-full"
        />
      </div>
      <div className=" pt-5">
        <p className=" block mt-2 text-slate-700 text-sm font-medium break-words ">
        {/* Originals Sweatshirt */}
        {texts}
        </p>
        <Button className="  mt-3 px-5 py-5 w-full sm:w-full md:w-full lg:w-full">
          view product - <span className=" text-indigo-600 ">{price}</span>
        </Button>
      </div>
    </div>
  );
};

export default Card;
