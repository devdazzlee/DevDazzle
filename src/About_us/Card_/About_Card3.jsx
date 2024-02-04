import React from 'react'

const About_Card3 = () => {
  return (
    <section className="text-gray-600 body-font">
      <div className="container mx-auto flex flex-col-reverse items-center md:flex-row lg:w-10/12  xl:w-10/12		">
        <div className="lg:w-1/2 lg:pr-12 md:pr-8 mb-8 md:mb-0 text-center md:text-left">
          <h1 style={{"color" : "#D67DAE"}} className="title-font sm:text-5xl text-3xl mb-4 font-bold  tracking-normal">
          {/* {heading} */}
          Our Work Philosophy

          </h1>
          <p className="mb-4 leading-relaxed text-lg text-white">
          A discipline-first approach with weekly project plans & effective communication makes the central pillar of our work philosophy. We are obsessive about technology and use the latest and greatest technology to deliver solutions and services to our clients.
          </p>
          <p className="mb-4 leading-relaxed text-lg text-white">
          We are always focused on our client's ROI by being careful about their financial and time investment with us and delivering value that exceeds their expectations.
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
              src="https://images.unsplash.com/photo-1664575198263-269a022d6e14?q=80&w=1740&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            />
          </a>
        </div>
      </div>
    </section>
  )
}

export default About_Card3