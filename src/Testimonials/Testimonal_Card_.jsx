import React from 'react'
import img2 from '../../src/Capture.jpeg'
const Testimonial_Card_Sec = () => {
  return (
    <section className="text-gray-600 body-font my-14">
      <div className="container mx-auto flex flex-col-reverse items-center md:flex-row lg:w-10/12  xl:w-10/12		">
      <div className="lg:w-1/2 w-full md:mr-12">
          <a href="#" target="_blank">
            <img
              className="object-cover object-center rounded w-full h-64 md:h-80 lg:h-auto"
              alt="tip_book"
              src='https://images.unsplash.com/photo-1612832164313-ac0d7e07b5ce?q=80&w=1740&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
            />
          </a>
        </div>
        <div className="lg:w-1/2 lg:pr-12 md:pr-8 mb-8 md:mb-0 text-center md:text-left">
          <h1 style={{"color" : "#D67DAE"}} className="title-font sm:text-5xl text-3xl mb-4 font-bold  tracking-normal">
          {/* {heading} */}
          worldwidetours.co
          </h1>
          <p className="mb-4 leading-relaxed text-lg text-white">
          Originally founded as a firm that sold promotional merchandise, worldwidetours.co has expanded along with its clientele to provide full-service marketing solutions, including website creation, eCommerce, digital marketing, sports team uniforms, custom work uniforms, and branding. See how the organization was able to improve ROI by streamlining its procedures with the aid of DevDazzle.
         </p>
          <p className="mb-4 leading-relaxed text-lg text-white">
            Click here to schedule an appointment and start working with IT Verticals Inc's highly
            talented team.
          </p>
          <button  style={{"background" : "linear-gradient(20deg, #5A2E7F, #CA669D, #E499C2)"}} className=' px-6 sm:px-8 py-3 font-bold rounded text-white'>
          Contact Our Team
        </button>
        </div>
      </div>
    </section>
  )
}

export default Testimonial_Card_Sec