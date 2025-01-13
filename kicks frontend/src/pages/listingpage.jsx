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
          className=" max-w-full max-h-full object-cover "
        />
      </div>
        <div className="flex py-10">
        <Sidebar/>
  
      <div class="products">
      <div className="  ml-10 my-10 inline-grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-x-3 ">
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
