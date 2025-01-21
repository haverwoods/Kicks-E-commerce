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
              <Card
                imagesrc="https://cdn.shopify.com/s/files/1/0293/9277/files/08-21-24_S2_22_BPLI025F_Stone_ZSR_CXB_RL_14-30-02_3047_BH.jpg?v=1724286406&width=600&height=900&crop=center"
                texts="Originals Sweatshirt"
                price="$100"
                key={item}
              />
            ))}
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Listingpage;
