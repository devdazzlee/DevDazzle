import React from 'react';

const AboutCards_reverse = () => {
    // {heading, para1 , para2, para3 , img }
  return (
   
    <section className="text-gray-600 body-font my-10">
     <div className="container mx-auto flex flex-col-reverse items-center md:flex-row lg:w-10/12  xl:w-10/12		">
      <div className="lg:w-1/2 w-full md:mr-12">
          <a href="#" target="_blank">
            <img
              className="object-cover object-center rounded w-full h-64 md:h-80 lg:h-auto"
              alt="tip_book"
              src="https://teambuildinghub.com/wp-content/uploads/2022/01/Team-Building-Page-Image-2-1024x538.png.webp"
            />
          </a>
        </div>
        <div className=" lg:w-1/2 lg:pr-12 md:pr-8 mb-8 md:mb-0 text-center md:text-left">
          <h1 style={{"color" : "#D67DAE"}} className="title-font sm:text-5xl text-3xl mb-4 font-bold  tracking-normal">
        
          Discipline-First Approach
          </h1>
          <p className="mb-4 leading-relaxed text-lg text-white">
            Our team is our greatest asset. Our recruitment philosophy is “A disciplined & interested
            individual makes a better team member.” We recruit talent from all over the world to
            assign the right skill set to your projects.
          </p>
          <p className="mb-4 leading-relaxed text-lg text-white">
            Our global and disciplined team has built many complex software applications, delivered
            engaging websites, and executed digital marketing campaigns with excellent ROI. Our team
            gives you an unfair advantage over your competitor in the form of quality, efficiency, and
            time.
          </p>
          <p className="mb-4 leading-relaxed text-lg text-white">
            Click here to schedule an appointment and start working with IT Verticals Inc's highly
            talented team.
          </p>
          <button  style={{"background" : "linear-gradient(20deg, #5A2E7F, #CA669D, #E499C2)"}} className=' px-6 sm:px-8 py-3 font-bold rounded text-white'>
          Speak with Us
        </button>
        </div>
       
      </div>
    </section>
  );
};

export default AboutCards_reverse;
