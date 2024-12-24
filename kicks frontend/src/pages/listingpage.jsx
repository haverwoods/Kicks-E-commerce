import Card from "@/component/card/card";
import Footer from "@/component/footer/footer";
import Navigationbar from "@/component/navbar/navigationbar";
import Sidebar from "@/component/sidebar/sidebar";
import React from "react";

const Listingpage = () => {
  return (
    <div>
        <Navigationbar/>
        <div
        alt="banner"
        className="relative mt-20 mb-5 ml-10 mr-10  rounded-3xl"
      >
        <img
          src="../asset/banner.png"
          alt="banner"
          className=" max-w-full max-h-full object-cover pl-20 pr-20"
        />
      </div>
        <div className="flex py-10">
        <Sidebar/>
  
      <div>
      <div className="  ml-10 my-10 inline-grid grid-cols-4 gap-2">
        <Card/>
        <Card/>
        <Card/>
        <Card/>
        <Card/>
        <Card/>
        <Card/>
        <Card/>
        <Card/>
        <Card/>
        <Card/>
        <Card/>
      </div>
        
      </div>
        </div>
      <Footer/>
    </div>
  );
};

export default Listingpage;
