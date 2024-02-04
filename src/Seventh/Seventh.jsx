import React from 'react'
import { useNavigate , Link } from 'react-router-dom'
const Seventh = () => {
  return (
    <div className="flex flex-col items-center my-16" >
  <h1 className="text-white w-3/6	text-center text-2xl md:text-3xl lg:text-4xl mt-2 font-bold">
  Ensure success with our proven expertise in digital product development.

  </h1>
  <Link    to={'/Contact-us'}>
  <button  style={{"background" : "linear-gradient(20deg, #5A2E7F, #CA669D, #E499C2)"}} className='font-serif my-4 text-center px-12 sm:px-8 py-3 font-bold rounded text-white'>
         Start a  Project  <i class="fa-solid fa-arrow-right"></i>
        </button>
            
            </Link> 
</div>
  )
}

export default Seventh