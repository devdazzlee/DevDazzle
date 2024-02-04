import React from 'react'

function Heading_Services({text1,text2,text3, para}) {
  return (
    <div    className='flex flex-col items-center py-12' >
    <p className="text-white text-md font-bold w-full md:w-1/2 lg:w-1/5 flex flex-wrap justify-center uppercase" style={{ color: "#AD44DC" }}>
    <span>{text1} .</span> <span>{text2} .</span> <span>{text3}</span>
  </p>
  <h1 className="text-white text-2xl md:text-3xl lg:text-4xl mt-2 font-bold">
  {para}
  </h1>
    </div>
  )
}

export default Heading_Services