import React from 'react'
import { Facebook, Instagram, Twitter } from "lucide-react";

const Footer = () => {
  return (
    <footer className="rounded-t-3xl bg-[#232321] px-5 pt-8">
    {/* <br /> */}
    <div className="max-w-7xl mx-auto mb-16 grid grid-cols-1 md:grid-cols-4 gap-8 text-white ">
      <div>
        <h3 className="  text-yellow-400 text-xl font-medium hover:cursor-pointer ">About us</h3>
        <p className="mt-2 hover:cursor-pointer ">
          We are the biggest hyperstore in the universe. We got you all
          covered with our exclusive collections and latest drops.
        </p>
      </div>
      <div>
        <h3 className="  text-yellow-400 text-xl font-medium hover:cursor-pointer">
          catagories
        </h3>
        <ul className="mt-2 space-y-1 text-white  hover:cursor-pointer">
          <li className='hover:text-cyan-500'>Runners</li>
          <li className='hover:text-cyan-500'>Sneakers</li>
          <li className='hover:text-cyan-500'>Basketball</li>
          <li className='hover:text-cyan-500'>Outdoor</li>
          <li className='hover:text-cyan-500'>Golf</li>
          <li className='hover:text-cyan-500'>Hiking</li>
        </ul>
      </div>
      <div>
        <h3 className="  text-yellow-400 text-xl font-medium hover:cursor-pointer  ">
          company
        </h3>
        <ul className="mt-2 text-white hover:cursor-pointer ">
          <li className='hover:text-cyan-500'>about</li>
          <li className='hover:text-cyan-500'>contact</li>
          <li className='hover:text-cyan-500'>Blog</li>
   
        </ul>
      </div>
      <div>
        <h3 className=" text-yellow-400 text-xl font-medium hover:cursor-pointer ">follow us</h3>
        <div className="flex gap-3  hover:cursor-pointer ">
        <Instagram className='hover:text-cyan-500' />
        <Twitter className='hover:text-cyan-500' />
        <Facebook className='hover:text-cyan-500'/>

        </div>
      </div>
    </div>

    <img src="../asset/logo.png" className="mx-5 w-full" />
  </footer>
  )
}

export default Footer