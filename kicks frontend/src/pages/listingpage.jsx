import Card from "@/component/card/card";
import Footer from "@/component/footer/footer";
import Navigationbar from "@/component/navbar/navigationbar";
import Sidebar from "@/component/sidebar/sidebar";
import React from "react";

const Listingpage = () => {
  const numofcard = Array.from({ length: 16 });
  return (
    <div>
      <Navigationbar />
      <div className="flex overflow-hidden">
        {/* sidebar  */}
        <div className="hidden lg:flex overflow-y-auto">
          <Sidebar />
        </div>
        <div className="flex-1">
          {/* banner section */}
          <div className="relative mt-5 mb-5 ml-auto lg:mx-10 rounded-3xl">
            <img
              src="../asset/banner.png"
              alt="banner"
              className="w-8/12 h-full object-cover rounded-3xl"
            />
          </div>
          {/* product card section */}
          <div className="mx-1 my-10  grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-2">
            {numofcard.map((item) => (
              <Card key={item} />
            ))}
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Listingpage;
