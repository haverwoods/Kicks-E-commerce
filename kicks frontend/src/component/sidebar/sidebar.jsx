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
        <div className="inline-grid grid-cols-5 gap-5">

        <Button variant="outline" className="hover:bg-black hover:text-white" size="icon">
          <p className="">
            xs
            </p>
        </Button>
        <Button variant="outline" className="hover:bg-black hover:text-white" size="icon">
          <p className="">
            xs/s
            </p>
        </Button>
        <Button variant="outline" className="hover:bg-black hover:text-white" size="icon">
          <p className="">
          s/m
            </p>
        </Button>
        <Button variant="outline" className="hover:bg-black hover:text-white" size="icon">
          <p className="">
            m
            </p>
        </Button>
        <Button variant="outline" className="hover:bg-black hover:text-white" size="icon">
          <p className="">
            m/l
            </p>
        </Button>
        <Button variant="outline" className="hover:bg-black hover:text-white" size="icon">
          <p className="">
            l
            </p>
        </Button>
        <Button variant="outline" className="hover:bg-black hover:text-white" size="icon">
          <p className="">
            l/xl
            </p>
        </Button>
        <Button variant="outline" className="hover:bg-black hover:text-white" size="icon">
          <p className="">
            xl
            </p>
        </Button>
        <Button variant="outline" className="hover:bg-black hover:text-white" size="icon">
          <p className="">
            1x
            </p>
        </Button>
        <Button variant="outline" className="hover:bg-black hover:text-white" size="icon">
          <p className="">
            1x/2x
            </p>
        </Button>
        <Button variant="outline" className="hover:bg-black hover:text-white" size="icon">
          <p className="">
          2x
            </p>
        </Button>
        <Button variant="outline" className="hover:bg-black hover:text-white" size="icon">
          <p className="">
            2x/3x
            </p>
        </Button>
        <Button variant="outline" className="hover:bg-black hover:text-white" size="icon">
          <p className="">
           3x
            </p>
        </Button>
        <Button variant="outline" className="hover:bg-black hover:text-white" size="icon">
          <p className="">
            plus
            </p>
        </Button>
        <Button variant="outline" className="hover:bg-black hover:text-white" size="icon">
          <p className="">
            OS
            </p>
        </Button>
       
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
