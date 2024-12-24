import { Button } from "@/components/ui/button";
import React from "react";

const Card = () => {
  return (
    <div className="  rounded-t-3xl mt-5  ">
      <div className="w-72 h-96 border-[2px] border-[#000000] rounded-3xl shadow-lg  overflow-hidden">
        <img
          src="../asset/Rectangle 5.png"
          // src="../asset/ins.jpeg"
          className="rounded-3xl  object-cover w-full h-full overflow-hidden"
        />
      </div>
      <div className=" pt-5">
        <p className=" block mt-2 text-slate-700 text-sm font-medium break-words ">
        Kourtney Faux Leather Bodysuit
        </p>
        <Button className="  mt-3 px-5 py-5 w-72 ">
          view product - {<span className=" text-indigo-600 ">$126</span>}
        </Button>
      </div>
    </div>
  );
};

export default Card;
