import React from 'react'
import ServicesTabs from '../../ServicesTabs/ServicesTabs'
const ThirdServices = () => {
  return (
    <div className="flex flex-col items-center" >
  <p className="text-white text-md font-bold w-full md:w-1/2 lg:w-1/5 flex flex-wrap justify-center uppercase" style={{ color: "#AD44DC" }}>
    <span>DESIGN .</span> <span>DEVELOPMENT .</span> <span>MARKETING</span>
  </p>
  <h1 className="text-white text-2xl md:text-3xl lg:text-4xl mt-2 font-bold">
    Discover Our Services Today!
  </h1>
  <ServicesTabs/>
</div>

  )
}

export default ThirdServices