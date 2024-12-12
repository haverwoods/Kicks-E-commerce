import React from "react";
import StarRatings from "react-star-ratings";

const Reviews = () => {
  return (
    <div className=" rounded-3xl shadow-lg  mt-5 mb-5 ml-14 inline-block  w-80 max-h-full overflow-hidden bg-[#fafafa]">
      <div className="card border-[2px] border-[#fafafa] rounded-3xl shadow-lg  overflow-hidden">
        <div className="pt-6 px-4">     
      <StarRatings
            rating={4.5}
            starRatedColor="#f0e116"
            numberOfStars={5}
            starDimension="30px"
            starSpacing="5px"
          />
        </div>
        <div className="flex py-4 px-3 items-center justify-between gap-1">
          <span className="text-base pt-5 left-2 pl-1 text-slate-800">
            I highly recommend shopping from kicks
          </span>

          <img
            src="../asset/Ellipse 1.png"
            alt="profile"
            className="rounded-full  object-cover w-12 h-12 mr-5 "
          />
        </div>
        <img
          src="../asset/image 38.png"
          className="rounded-b-2xl  object-cover w-full overflow-hidden"
        />
      </div>
    </div>
  );
};

export default Reviews;
