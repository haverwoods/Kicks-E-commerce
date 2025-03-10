import React from "react";
import { Button } from "@/components/ui/button";
import Card from "@/component/card/card";
import Navigationbar from "@/component/navbar/navigationbar";
import { Link, useNavigate } from "react-router-dom";
import Reviews from "@/component/reviews/reviews";

import Footer from "@/component/footer/footer";

const Landingpage = () => {
  const navigate = useNavigate;
  // const order = () => {
  //   navigate("/kicks frontend/src/component/card.jsx");
  // };
  const number = Array.from({ length: 5 });
  const num = Array.from({ length: 3 });

  return (
    <div className="">
      <Navigationbar />

      {/* <div className="mt-10 text-center  mx-auto  gap-2 text-4xl sm:text-4xl md:text-6xl lg:text-8xl xl:text-9xl font-extrabold">
        <span className="text-slate-800">DO IT</span>
        <span className="text-cyan-500"> RIGHT</span>
      </div> */}

      <div className=" mt-5 mb-2 relative  rounded-lg shadow-lg overflow-hidden h-auto ml-5 mr-5">
        <div className="relative w-full ">
          {/* <img
            src="../asset/image 14.png"
            alt="Nike Air Max"
            className="w-full  h-full object-cover "
          /> */}
          {/* /add this vidoe as vackground intsead of iamge */}
          {/* https://cdn.shopify.com/videos/c/o/v/7717de1c3a604964bd93f8619ce90a1b.mp4 */}
         <Link to="/listingpage"> 

          <video
            autoPlay
            loop
            muted
            playsInline
            className=" w-full h-full object-cover"
          >
            <source
              src="https://cdn.shopify.com/videos/c/o/v/7717de1c3a604964bd93f8619ce90a1b.mp4"
              type="video/mp4"
            />
            Your browser does not support the video tag.
          </video>
         </Link>
          {/* <div className="absolute top-5 left-5    flex justify-center items-center mt-5 mx-5">
            <div className="bg-stone-900 text-white text-sxl font-semibold inline-flex object-cover sm:h-10 md:h-14 lg:h-auto sm:w-20 md:w-32 lg:w-auto px-4 py-2 rounded-xl shadow-lg overflow-hidden ">
              <span>product of the month</span>
            </div>
          </div>
          <div className=" absolute bottom-10 sm:top-2 md:top-28 lg:top-10 xl:top-20 left-10  sm:text-2xl  md:text-4xl lg:text-6xl xl:text-9xl font-medium ">
            <span className="text-white">Nike air</span>
            <span className="text-white"> max</span>
            <br />
            <p className="mt-5bsm:text-2xl md:text-4xl lg:text-6xl xl:text-6xl text-white  font-normal ">
              Nike introducing the new air max for
              <br /> everyone's comfort
            </p>
          </div> */}
          {/* <Button className=" absolute bottom-10 left-10 mt-5 bg-[#f4f4f5] px-10 py-4 sm:h-10 md:h-14 lg:h-auto  sm:w-10 md:w-14 lg:w-auto text-xl font-medium ">
            buy now
          </Button> */}
        </div>
      </div>
      {/* new drops section */}
      <div className="ml-2 inline-block">
        <p className=" ml-5 text-black font-semibold mt-5  text-3xl">
          Don't miss out new drops
        </p>
        <div className="inline-grid  grid-cols-1 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-1">
          {number.map((item) => (
            <Link to="/listingpage" key={item}>
              <Card
                imagesrc="https://cdn.shopify.com/s/files/1/0293/9277/files/12-23-24_S2_48_KJGT4102308_Charcoal_CXB_RL_16-07-31_26994_PXF.jpg?v=1735323750&width=400&height=599&crop=center"
                texts="Originals Sweatshirt"
                price="$150"
                item={item}
              />
            </Link>
          ))}
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
          {num.map((item) => (
            <Reviews />
          ))}
        </div>
      </div>
      {/* footer section */}
      <Footer />
      <div></div>
    </div>
  );
};

export default Landingpage;
