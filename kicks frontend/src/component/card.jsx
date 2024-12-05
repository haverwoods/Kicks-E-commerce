import { Button } from '@/components/ui/button'
import React from 'react'

const Card = () => {
  return (
    <div className="rounded-t-3xl  mt-5 mb-5 ml-14 inline-block max-w-sm overflow-hidden ">
    <div className=" card border-[8px] border-[#FAFAFA] rounded-3xl shadow-lg  overflow-hidden">
      <img
        src="../asset/Rectangle 5.png"
        className="rounded-3xl  object-cover w-full overflow-hidden"
      />
    </div>
    <div className="pt-5">
      <span className=" px-3 block mt-2 text-slate-700 text-xl font-medium break-words overflow-hidden">
      Lorem ipsum dolor 
      </span>
      <Button className="  mt-3 px-5 py-5 w-80">
        view product - {<span className=" text-indigo-600 ">$126</span>}
      </Button>
    </div>
  </div>
  )
}

export default Card