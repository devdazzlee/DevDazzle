import React from 'react';

const Testimonials_Card = () => {
    // {heading, para1 , para2, para3 , img }
  return (
    <section className="text-gray-600 body-font my-14">
      <div className="container mx-auto flex flex-col-reverse items-center md:flex-row lg:w-10/12  xl:w-10/12		">
        <div className="lg:w-1/2 lg:pr-12 md:pr-8 mb-8 md:mb-0 text-center md:text-left">
          <h1 style={{"color" : "#D67DAE"}} className="title-font sm:text-5xl text-3xl mb-4 font-bold  tracking-normal">
          {/* {heading} */}
          ApparelnBags.com
          </h1>
          <p className="mb-4 leading-relaxed text-lg text-white">
          ApparelnBags.com started as a promotional products company and grew with its clients to offer full-service marketing services delivering branding, promotional products, custom work uniforms, sports team uniforms, website development & eCommerce & digital marketing services. Learn how Galaxy Digital  solutions helped the company streamline its processes for better ROI.
          </p>
          <p className="mb-4 leading-relaxed text-lg text-white">
            Click here to schedule an appointment and start working with IT Verticals Inc's highly
            talented team.
          </p>
          <button  style={{"background" : "linear-gradient(20deg, #5A2E7F, #CA669D, #E499C2)"}} className=' px-6 sm:px-8 py-3 font-bold rounded text-white'>
          Contact Our Team
        </button>
        </div>
        <div className="lg:w-1/2 w-full">
          <a href="#" target="_blank">
            <img
              className="object-cover object-center rounded w-full h-64 md:h-80 lg:h-auto"
              alt="tip_book"
              src="https://images.unsplash.com/photo-1661956602153-23384936a1d3?q=80&w=1740&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Testimonials_Card;
