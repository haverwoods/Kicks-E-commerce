import Navigationbar from "@/component/navbar/navigationbar";
import Productdescription from "@/component/product/productdescription";
import Productimage from "@/component/product/productimage";
import React, { useState } from "react";

const Productpage = () => {
  const images = [
    "https://cdn.shopify.com/s/files/1/0293/9277/files/08-21-24_S2_22_BPLI025F_Stone_ZSR_CXB_RL_14-30-02_3047_BH.jpg?v=1724286406&width=600&height=900&crop=center",
    "https://cdn.shopify.com/s/files/1/0293/9277/files/12-23-24_S2_48_KJGT4102308_Charcoal_CXB_RL_16-07-31_26994_PXF.jpg?v=1735323750&width=400&height=599&crop=center",
    "https://cdn.shopify.com/s/files/1/0293/9277/files/05-13-24_S2_23_ZDZPK12184L_Taupe_KJ_RL_14-59-15_21889_PXF.jpg?v=1715807392&width=600&height=900&crop=center",
    "https://cdn.shopify.com/s/files/1/0293/9277/files/08-21-24_S2_22_BPLI025F_Stone_ZSR_CXB_RL_14-30-02_3047_BH.jpg?v=1724286406&width=600&height=900&crop=center",
    "https://cdn.shopify.com/s/files/1/0293/9277/files/12-23-24_S2_48_KJGT4102308_Charcoal_CXB_RL_16-07-31_26994_PXF.jpg?v=1735323750&width=400&height=599&crop=center",
    "https://cdn.shopify.com/s/files/1/0293/9277/files/05-13-24_S2_23_ZDZPK12184L_Taupe_KJ_RL_14-59-15_21889_PXF.jpg?v=1715807392&width=600&height=900&crop=center",
    
  ];
  const [selectedImage, setSelectedImage] = useState(images[0]); //use first image as default

  return (
    <div>
      <Navigationbar />
      <div className="mt-5 mx-28">
        <div className="flex items-start gap-10 ">
          {/* Left sidebar for small images */}

          <div className=" ml-10 grid grid-cols-2 gap-2 ">
            {images.map((img, index) => (
              <div
                key={index}
                className={`w-20 h-20 border border-gray-300 rounded-lg overflow-hidden cursor-pointer ${
                  img === selectedImage ? "border-black" : ""
                }`}
                onClick={() => setSelectedImage(img)}
              >
                <img
                  src={img}
                  alt={`Thumbnail ${index + 1}`}
                  className="w-full h-full object-cover"
                />
              </div>
            ))}
          </div>
          <Productimage src={selectedImage} />
          <div className="ml-10">
            <Productdescription
              title="Originals Sweatshirt"
              description="Originals Sweatshirt - Charcoal"
              price="$25.99"
            />
          </div>
        </div>
      </div>

      {/* add shadcnui breadcrum for ath to control image */}
    </div>
  );
};

export default Productpage;
