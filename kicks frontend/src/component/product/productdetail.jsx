import React from 'react'

const Productdetail = ({point1 , point2}) => {
  return (
    <div>
        {/* //details about outfit , structure and layer for the product  */}
        
      <p className="text-sm font-sans">{point1}</p>
      <p className="mt-2 text-gray-700">{point2}</p>
    </div>
  )
}

export default Productdetail