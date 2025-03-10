import Navigationbar from "@/component/navbar/navigationbar";
import Productdescription from "@/component/product/productdescription";
import Productdetail from "@/component/product/productdetail";
import Productimage from "@/component/product/productimage";
import { Carousel } from "@/components/ui/carousel";
import { Plus } from "lucide-react";
import React, { useState } from "react";
import { useRef } from "react";

const Productpage = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);
  const scrollContainerRef = useRef(null);
  const images = [
    "https://cdn.shopify.com/s/files/1/0293/9277/files/08-21-24_S2_22_BPLI025F_Stone_ZSR_CXB_RL_14-30-02_3047_BH.jpg?v=1724286406&width=600&height=900&crop=center",
    "https://cdn.shopify.com/s/files/1/0293/9277/files/12-23-24_S2_48_KJGT4102308_Charcoal_CXB_RL_16-07-31_26994_PXF.jpg?v=1735323750&width=400&height=599&crop=center",
    "https://cdn.shopify.com/s/files/1/0293/9277/files/05-13-24_S2_23_ZDZPK12184L_Taupe_KJ_RL_14-59-15_21889_PXF.jpg?v=1715807392&width=600&height=900&crop=center",
    "https://cdn.shopify.com/s/files/1/0293/9277/files/08-21-24_S2_22_BPLI025F_Stone_ZSR_CXB_RL_14-30-02_3047_BH.jpg?v=1724286406&width=600&height=900&crop=center",
    "https://cdn.shopify.com/s/files/1/0293/9277/files/12-23-24_S2_48_KJGT4102308_Charcoal_CXB_RL_16-07-31_26994_PXF.jpg?v=1735323750&width=400&height=599&crop=center",
    "https://cdn.shopify.com/s/files/1/0293/9277/files/05-13-24_S2_23_ZDZPK12184L_Taupe_KJ_RL_14-59-15_21889_PXF.jpg?v=1715807392&width=600&height=900&crop=center",
  ];
  const [selectedImage, setSelectedImage] = useState(images[0]); //use first image as default

  //handle scroll for image slider
  const handleScroll = () => {
    if (scrollContainerRef.current) {
      const scrollLeft = scrollContainerRef.current.scrollLeft;
      const imageWidth = scrollContainerRef.current.offsetWidth;
      const newIndex = Math.round(scrollLeft / imageWidth);
      setCurrentIndex(newIndex);
      setSelectedImage(images[newIndex]);
    }
  }; 
  const toggleVisibility = (detail) => {
    console.log("it works");
    setIsVisible((prevState) => !prevState);
  };

  return (
    <div>
      <Navigationbar />
      <div className="mt-5 mx-2">
          {/* mobile screen display image slider */}
          <div className="w-full md:hidden">
            <div 
              ref={scrollContainerRef}
              className="w-full overflow-x-auto"
              onScroll={handleScroll}
            >
              <div className="flex w-full">
                {images.map((img, index) => (
                  <div 
                    key={index}
                    className="w-full flex-none"
                    style={{ 
                      minWidth: '100%',
                      scrollSnapAlign: 'start'
                    }}
                  >
                    <img
                      src={img}
                      alt={`Product ${index + 1}`}
                      className="w-full h-full object-cover"
                    />
                  </div>
                ))}
              </div>
            </div>
            {/* Dots indicator for mobile */}
            <div className="flex justify-center gap-2 mt-4 md:hidden">
              {images.map((_, index) => (
                <button
                  key={index}
                  className={`w-2 h-2 rounded-full transition-colors duration-200 ${
                    index === currentIndex ? 'bg-black' : 'bg-gray-300'
                  }`}
                  onClick={() => {
                    if (scrollContainerRef.current) {
                      scrollContainerRef.current.scrollLeft = index * scrollContainerRef.current.offsetWidth;
                    }
                  }}
                />
              ))}
            </div>
          </div>
        <div className="flex items-start sm:gap-0 md:gap-5 lg:gap-10 ">
          {/* Left sidebar for small images */}
          {/* //leftsidebar is hidden for mobiel screen and visible for desktop screen */}
          <div className=" ml-10">
            <div className="grid grid-cols-2 gap-1">

            {images.map((img, index) => (
              <div
                key={index}
                className={`w-20 h-20 hidden md:block md:w-28 md:h-28 lg:w-32 lg:h-32 border border-gray-300 rounded-lg overflow-hidden cursor-pointer ${
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
          </div>
               {/* Right side for main image and product description */}
               <div className="hidden md:block">
  <Productimage src={selectedImage} />
</div>
          {/* <Productimage src={selectedImage}  /> */}
          <Carousel images={images} />
          <div className="ml-10">
            <Productdescription
              title="Originals Sweatshirt"
              description="Originals Sweatshirt - Charcoal"
              price="$25.99"
            />

            <div className="  py-5 px-5">
              <div className="inline-flex gap-x-5">
                <p className="text-lg font-sans " size="icon">
                  product detail
                </p>
                <Plus onClick={() => toggleVisibility()} />
              </div>
              {isVisible && (
                //make follwing componenet product detail visble when presse click
                <Productdetail
                  point1="random text about product"
                  point2="random text about product"
                />
              )}
            </div>
          </div>
        </div>
      </div>

      {/* add shadcnui breadcrum for ath to control image */}
    </div>
  );
};

export default Productpage;
