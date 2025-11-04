import * as React from 'react';
import img from '../../Images/galaxy web logo.png'
import '../../App.css'
import { useNavigate , Link } from 'react-router-dom'


function ResponsiveAppBar() {
  const [name,setName] = React.useState("DevDazzle")
  const [open, setOpen] = React.useState(false);
  const [flyer, setFlyer] = React.useState(false);
  const [flyerTwo, setFlyerTwo] = React.useState(false);

  return (
    <>
    {/* This example requires Tailwind CSS v2.0+ */}
    {/* style={{"boxShadow" : "0 0 10px #5A2E7F, 0 0 20px #CA669D, 0 0 30px #E499C2" , "zIndex" : "400"}} */}
    <div     className="relative ">
      <div className="w-full mx-auto px-4 sm:px-6">
        <div className="flex justify-between items-center  py-6 md:justify-start md:space-x-10">
          <div className="flex justify-start lg:w-0 lg:flex-1">
          <Link   to={'/'}>
            
             <h1 style={{"color" :"#AD44DD" , "fontFamily" :"cursive"}} className='text-white text-4xl' ><span style={{"color":"#CA669D"}} >{`<`}</span>{name}<span style={{"color":"#CA669D"}} >{`/>`}</span></h1>
              {/* <span className="sr-only">Workflow</span>
              <img
              className="h-16 w-auto sm:h-16"
              src={img}
              alt=""
            /> */}
            </Link> 
          </div>
          <div className="-mr-2 -my-2 md:hidden">
            <button
              type="button"
              className="bg-white rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500"
              onClick={() => setOpen(!open)}
            >
              <span className="sr-only">Open menu</span>
              {/* Heroicon name: outline/menu */}
              <svg
                className="h-6 w-6"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            </button>
          </div>
          <nav className="hidden md:flex space-x-10">
           
            <Link   className="text-base font-medium text-white hover:text-white" to={'/'}>
            Home 
            
            </Link> 


            <Link   className="text-base font-medium text-white hover:text-white" to={'/About-us'}>
            About 
            
            </Link>
            

            <Link   className="text-base font-medium text-white hover:text-white" to={'/Services'}>
            Services 
            
            </Link>
            <Link   className="text-base font-medium text-white hover:text-white" to={'/Testimonials'}>
            Testimonials
            
            </Link>
            <Link   className="text-base font-medium text-white hover:text-white" to={'/Contact-us'}>
            Contact Us  
            
            </Link>

          </nav>
          <div className="hidden md:flex items-center justify-end md:flex-1 lg:w-0">
            <a
              href="#"
              className="whitespace-nowrap text-lg font-medium text-white text-base font-medium text-white hover:text-white "
            >
                  <span class="inline-flex items-center bg-gradient-to-r from-purple-600 via-pink-400 to-black rounded-full p-2 mr-2">
        <i class="text-black fas fa-phone"></i>
    </span>

              Call Anytime  <br />
              <a href="https://wa.me/923278227842" target="_blank">
  <span class="text-white ml-8 text-base font-medium text-white hover:text-white">+92 327 8227842</span>
</a>


              
            </a>
      
          </div>
        </div>
      </div>
    

      <div
        className={
          open
            ? "opacity-100 scale-100 transition ease-out duration-200 absolute top-0 inset-x-0 p-2 transition transform origin-top-right md:hidden"
            : "opacity-0 scale-95 absolute top-0 inset-x-0 p-2 transition transform origin-top-right md:hidden"
        }
      >
        <div className="rounded-lg shadow-lg ring-1 ring-black ring-opacity-5 bg-white divide-y-2 divide-gray-50">
          <div className="pt-5 pb-6 px-5">
            <div className="flex items-center justify-between">
              <div>
              <h1 style={{"color" :"#AD44DD" , "fontFamily" :"cursive"}} className='text-white text-4xl' ><span style={{"color":"#CA669D"}} >{`<`}</span>{name}<span style={{"color":"#CA669D"}} >{`/>`}</span></h1>

              </div>
              <div className="-mr-2">
                <button
                  type="button"
                  className="bg-white rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500"
                  onClick={() => setOpen(!open)}
                >
                  <span className="sr-only">Close menu</span>
                  {/* Heroicon name: outline/x */}
                  <svg
                    className="h-6 w-6"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    aria-hidden="true"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M6 18L18 6M6 6l12 12"
                    />
                  </svg>
                </button>
              </div>
            </div>
            <div className="mt-6">
              <nav className="grid gap-y-8">
              





              <Link   className="text-base font-medium text-white hover:text-white" to={'/'}>
              <a
                  href="#"
                  className="-m-3 p-3 flex items-center rounded-md hover:bg-gray-50"
                >
                  <span className="ml-3 text-base font-medium text-gray-900">
                  Home
                  </span>
                </a>
            
            </Link> 


            <Link   className="text-base font-medium text-white hover:text-white" to={'/About-us'}>
            <a
                  href="#"
                  className="-m-3 p-3 flex items-center rounded-md hover:bg-gray-50"
                >
                  <span className="ml-3 text-base font-medium text-gray-900">
                  About
                  </span>
                </a>
            </Link>
            

            <Link   className="text-base font-medium text-white hover:text-white" to={'/Services'}>
            <a
                  href="#"
                  className="-m-3 p-3 flex items-center rounded-md hover:bg-gray-50"
                >
                  <span className="ml-3 text-base font-medium text-gray-900">
                  Services
                  </span>
                </a>
            
            </Link>
            <Link   className="text-base font-medium text-white hover:text-white" to={'/Testimonials'}>
            <a
                  href="#"
                  className="-m-3 p-3 flex items-center rounded-md hover:bg-gray-50"
                >
                  <span className="ml-3 text-base font-medium text-gray-900">
                  Testimonials
                  </span>
                </a>
            </Link>
            <Link   className="text-base font-medium text-white hover:text-white" to={'/Contact-us'}>
            <a
                  href="#"
                  className="-m-3 p-3 flex items-center rounded-md hover:bg-gray-50"
                >
                  <span className="ml-3 text-base font-medium text-gray-900">
                  Contact Us
                  </span>
                </a>
            </Link>
               
             
               
              
               
              </nav>
            </div>
          </div>
        </div>
      </div>
    </div>
  </>

  );
}
export default ResponsiveAppBar;