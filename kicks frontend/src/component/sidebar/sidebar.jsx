import { Button } from "@/components/ui/button";
import React from "react";

const Sidebar = () => {
  return (
    <div>
      <div className=" w-60 h-screen px-5 py-5 ">
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias,
          molestiae rerum vero cumque earum placeat voluptates ex sit quis in
          illum eius minus labore quidem, nisi laudantium vitae obcaecati
          aliquam.
        </p>

        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias,
          molestiae rerum vero cumque earum placeat voluptates ex sit quis in
          illum eius minus labore quidem, nisi laudantium vitae obcaecati
          aliquam.
        </p>

        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias,
          molestiae rerum vero cumque earum placeat voluptates ex sit quis in
          illum eius minus labore quidem, nisi laudantium vitae obcaecati
          aliquam.
        </p>
        <div class="sizes" className="mt-6">
          <p className="text-xl font-normal">sizes</p>
          <div className="inline-grid grid-cols-2 gap-x-20 gap-y-5 ">
            <Button
              variant="outline"
              className="hover:bg-black hover:text-white px-5 "
              size="icon"
            >
              <p className="">xs</p>
            </Button>
            <Button
              variant="outline"
              className="hover:bg-black hover:text-white px-5"
              size="icon"
            >
              <p className="">xs/s</p>
            </Button>
            <Button
              variant="outline"
              className="hover:bg-black hover:text-white px-5"
              size="icon"
            >
              <p className="">s</p>
            </Button>
            <Button
              variant="outline"
              className="hover:bg-black hover:text-white px-5"
              size="icon"
            >
              <p className="">s/m</p>
            </Button>
            <Button
              variant="outline"
              className="hover:bg-black hover:text-white px-5"
              size="icon"
            >
              <p className="">m</p>
            </Button>
            <Button
              variant="outline"
              className="hover:bg-black hover:text-white px-5"
              size="icon"
            >
              <p className="">m/l</p>
            </Button>
            <Button
              variant="outline"
              className="hover:bg-black hover:text-white px-5"
              size="icon"
            >
              <p className="">l</p>
            </Button>
            <Button
              variant="outline"
              className="hover:bg-black hover:text-white px-5"
              size="icon"
            >
              <p className="">l/xl</p>
            </Button>
            <Button
              variant="outline"
              className="hover:bg-black hover:text-white px-5"
              size="icon"
            >
              <p className="">xl</p>
            </Button>
            <Button
              variant="outline"
              className="hover:bg-black hover:text-white px-5"
              size="icon"
            >
              <p className="">1x</p>
            </Button>
            <Button
              variant="outline"
              className="hover:bg-black hover:text-white px-5"
              size="icon"
            >
              <p className="">1x/2x</p>
            </Button>
            <Button
              variant="outline"
              className="hover:bg-black hover:text-white px-5"
              size="icon"
            >
              <p className="">2x</p>
            </Button>
            <Button
              variant="outline"
              className="hover:bg-black hover:text-white px-5"
              size="icon"
            >
              <p className="">2x/3x</p>
            </Button>
            <Button
              variant="outline"
              className="hover:bg-black hover:text-white px-5"
              size="icon"
            >
              <p className="">3x</p>
            </Button>
            <Button
              variant="outline"
              className="hover:bg-black hover:text-white px-5"
              size="icon"
            >
              <p className="">plus</p>
            </Button>
            <Button
              variant="outline"
              className="hover:bg-black hover:text-white px-5"
              size="icon"
            >
              <p className="">OS</p>
            </Button>
          </div>
        </div>

        <div class="color" className="mt-6">
        <p className="text-xl font-normal mb-2">color</p>
        <div  className=" inline-grid grid-cols-2 gap-x-10">
          <div className="inline-grid grid-cols-2 gap-x-3 ">
          <Button
            key="red"
            // key={color.name}
            variant="outline"
            className="w-8 h-8 rounded-full bg-[#D2122E] hover:bg-[#fd5c63] hover:text-white hover:ring-2 hover:ring-[#fc2f39]"
            size="icon"
          ></Button>
          <p className="text-lg font-normal">red</p>
          </div>

          <div className="inline-grid grid-cols-2 gap-x-3 ">
          <Button
            key="red"
            // key={color.name}
            variant="outline"
            className="w-8 h-8 rounded-full bg-[#D2122E] hover:bg-[#fd5c63] hover:text-white"
            size="icon"
          ></Button>
          <p className="text-lg font-normal">red</p>
          </div>
        </div>
        </div>

      </div>
    </div>
  );
};

export default Sidebar;
