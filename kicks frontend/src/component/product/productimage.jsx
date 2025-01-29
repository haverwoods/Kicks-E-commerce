// import React from "react";

// const Productimage = ({src}) => {
//   return (
//     <div>
//       <div className=" ml-5 left-5 w-full max-w-md h-auto sm:max-w-full md:max-w-full lg:max-w-full border-2 border-black rounded-3xl shadow-lg overflow-hidden ">
//         <img src={src} className="rounded-3xl  object-cover w-full h-auto " />
//       </div>
//     </div>
//   );
// };

// export default Productimage;
import React from "react";

const Productimage = ({ src }) => {
  return (
    <div className="flex justify-center">
      <div className="w-full max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg border-2 border-black rounded-3xl shadow-lg overflow-hidden">
        <img src={src} className="rounded-3xl object-cover w-full h-full sm:max-w-full md:max-w-full lg:max-w-full " />
      </div>
    </div>
  );
};

export default Productimage;
