import Navigationbar from "@/component/navbar/navigationbar";
import Productdescription from "@/component/product/productdescription";
import Productimage from "@/component/product/productimage";
import React from "react";

const Productpage = () => {
  return (
    <div>
      <Navigationbar />
      <div className="mt-5">

      <div className="inline-flex gap-10">
        <Productimage
          className="ml-10"
          src="https://cdn.shopify.com/s/files/1/0293/9277/files/08-21-24_S2_22_BPLI025F_Stone_ZSR_CXB_RL_14-30-02_3047_BH.jpg?v=1724286406&width=600&height=900&crop=center"
          alt="product image"
        />
       
        <Productdescription
        //  className="col-span-1"
          title="Originals Sweatshirt"
          description="Originals Sweatshirt - Charcoal"
          price="$25.99"
        />
      </div>
      </div>

      {/* add shadcnui breadcrum for ath to control image */}
    </div>
  );
};

export default Productpage;
