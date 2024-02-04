import React from 'react'
import '../../App.css'
const Sixth = () => {
  return (
    <div>
 <div className='flex flex-col items-center my-16' >
 <p className="text-white w-full md:w-1/2 lg:w-1/5 flex flex-wrap justify-center uppercase" style={{ color: "#F170B8" }}>
    <span className='font-bold' >SATISFIED CUSTOMERS
    </span>
  </p>
  <h1 className="text-white w-10/12	 text-4xl md:text-3xl lg:text-4xl mt-2 font-bold text-center">
  1,000+ Companies Worldwide Rely on Us!

  </h1>

 </div>
 <div class="slider-container my-4 ">
    <div class="slider-track" id="sliderTrack">
      <div class="slide"><img src="https://brandians.com/wp-content/uploads/2023/05/client-hotpoint.png" alt="Client 1"/></div>
      <div class="slide"><img src="https://mariongrandvincent.github.io/HTML-Personal-website/img-codePen/slider-logo1.png" alt="Client 2"/></div>
      <div class="slide"><img src="https://brandians.com/wp-content/uploads/2023/05/client-maytag.png" alt="Client 2"/></div>
      
      <div class="slide"><img src="https://brandians.com/wp-content/uploads/2023/05/client-consul.png" alt="Client 2"/></div>
      <div class="slide"><img src="https://brandians.com/wp-content/uploads/2023/05/client-kitchen-aid.png" alt="Client 2"/></div>
      <div class="slide"><img src="https://brandians.com/wp-content/uploads/2023/05/client-brastemp.png" alt="Client 2"/></div>
      <div class="slide"><img src="https://brandians.com/wp-content/uploads/2023/05/client-indesit.png" alt="Client 2"/></div>

      {/* <!-- Add more slides here --> */}
    </div>
  </div>
    </div>
  )
}

export default Sixth