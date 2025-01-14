import Card from "@/component/card/card";
import Footer from "@/component/footer/footer";
import Navigationbar from "@/component/navbar/navigationbar";
import Sidebar from "@/component/sidebar/sidebar";
import React from "react";

const Listingpage = () => {
  return (
    <div>
      <Navigationbar />
      <div className="flex overflow-hidden">
        <div className="hidden lg:flex">
          <Sidebar />
        </div>
        <div className="flex-1">
          <div className="relative mt-5 mb-5 ml-auto lg:mx-10 rounded-3xl">
            <img
              src="../asset/banner.png"
              alt="banner"
              className="w-8/12 h-full object-cover rounded-3xl"
            />
          </div>
          <div className="mx-5 my-10  grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5">
            
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Listingpage;