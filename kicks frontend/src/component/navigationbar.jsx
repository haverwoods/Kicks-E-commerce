import { CircleUser, Search } from 'lucide-react'
import React from 'react'

const Navigationbar = () => {
  return (
    <div class="navigationbar" className="">
    <div className=" mt-2 rounded-lg bg-white relative overflow-hidden w-full h-14    inline-flex ">
      <div className="mt-3 pl-4  font-medium cursor-pointer ">Home</div>
      <div className="top-2.5 mx-auto ">
        <img
          src="../asset/Group.png"
          className=" mt-3 ml-1 h-6 w-20 "
        ></img>
      </div>
      <div className="relative right-16 ">
        <input
          type="text"
          placeholder="Search ..."
          className="bg-stone-200 text-black placeholder-gray-400 rounded-lg mt-2 pl-10 pr-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
          //   value={searchTerm}
          //   onChange={handleSearch}
        />
        <Search
          className=" h-5 w-5 absolute left-3 bottom-5  text-gray-400 "
          size={18}
        />
      </div>
      <div>
        <CircleUser className="h-10 w-10 absolute right-3 top-2.5 cursor-pointer" />
      </div>
    </div>
  </div>
  )
}

export default Navigationbar