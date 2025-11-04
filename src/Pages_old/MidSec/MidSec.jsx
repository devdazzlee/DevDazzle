import axios from 'axios';
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Slide } from 'react-slideshow-image';
import { Fade } from 'react-slideshow-image';
import { Zoom } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css'

const MidSec = () => {

  const [showPopup, setShowPopup] = useState(false);

  useEffect(() => {
    if (showPopup) {
      const timeout = setTimeout(() => {
        setShowPopup(false);
      }, 5000);

      return () => clearTimeout(timeout);
    }
  }, [showPopup]);

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    textarea: '',
    service: '',
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Validate form inputs
    if (!formData.name || !formData.email ||!formData.service ||  !formData.textarea) {
      alert('Please fill out all fields before submitting.');
      return;
    }


    // Process the form submission logic here
    console.log('Form submitted:', formData);

    try {
      // Make API call using Axios
      const response = await axios.post('https://erin-blushing-butterfly.cyclic.app/api/messages', formData);
      console.log('API response:', response.data);

      // Handle success (optional)
      alert('Your Message has been successfully sent!');

      setFormData({
        name: '',
        email: '',
        textarea: '',
        number: '',
      });  

    } catch (error) {
      console.error('Error sending message:', error);
      alert('There was an error sending your message. Please try again later.');
    }
  };



  const texts = [
    "Brand Development",
    "Digital Marketing",
    "Dropshipping",
    "Mobile Development",
    "E-Commerce"

  ];

  const [currentTextIndex, setCurrentTextIndex] = useState(0);
  const [currentText, setCurrentText] = useState('');
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isTyping, setIsTyping] = useState(true);
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const typingInterval = setInterval(() => {
      if (isTyping) {
        if (currentIndex <= texts[currentTextIndex].length) {
          setCurrentText(texts[currentTextIndex].slice(0, currentIndex));
          setCurrentIndex((prevIndex) => prevIndex + 1);
        } else {
          setIsTyping(false);
          setIsDeleting(true);
        }
      } else if (isDeleting) {
        if (currentIndex > 0) {
          setCurrentText(texts[currentTextIndex].slice(0, currentIndex - 1));
          setCurrentIndex((prevIndex) => prevIndex - 1);
        } else {
          setIsDeleting(false);
          setTimeout(() => {
            setCurrentText('');
            setCurrentIndex(0);
            setCurrentTextIndex((prevTextIndex) =>
              (prevTextIndex + 1) % texts.length
            );
            setIsTyping(true);
          }, 1000); // Delay before starting the next text
        }
      }
    }, 100);

    return () => clearInterval(typingInterval);
  }, [currentIndex, currentTextIndex, isTyping, isDeleting]);


  const divStyle = {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundSize: 'cover',
    height: '400px'
  }
  const slideImages = [
    {
      url: 'https://brandians.com/wp-content/uploads/2023/05/digital-marketing.jpg'

    },
    {
      url: 'https://brandians.com/wp-content/uploads/2023/05/online-store.jpg'

    },
    {
      url: 'https://brandians.com/wp-content/uploads/2023/06/02.jpg'

    },
  ];



  return (
    <div className='flex justify-center sm:justify-start ml-0 md:ml-4 sm:ml-16 py-8 sm:py-16'>

      <div className='w-full sm:w-full md:w-full lg:w-full flex justify-between flex-wrap ml-0 md:ml-8'>
       <div>
       <h1 className='text-white text-4xl sm:text-4xl font-bold'>
          Reach New Heights! Elevate <br /> Your Brand with
        </h1>
        <div style={{ color: "#663E81" }} className="text-4xl capitalize font-bold py-4 whitespace-no-wrap overflow-hidden">
          {currentText || '\u00A0'} {/* Use a non-breaking space to avoid empty display */}
        </div>
        <p className='sm:w-5/6 pb-3' style={{ marginTop: '20px', fontSize: '1.2rem', color: 'white' }}>
          Upgrade your brand with our all-inclusive branding & marketing solutions.
        </p>
        {/* <button className='bg-gradient-to-r from-purple-600 via-pink-400 px-6 sm:px-8 py-3 font-bold rounded text-white'> */}
        <Link    to={'/Contact-us'}>
  
            
        <button  style={{"background" : "linear-gradient(20deg, #5A2E7F, #CA669D, #E499C2)"}} className=' px-6 sm:px-8 py-3 font-bold rounded text-white'>
          Let's Talk
        </button>
            </Link> 
        <p className='text-white py-2'>
          Based on 10,000+ reviews.
        </p>

       </div>

        <div style={{"background" : "linear-gradient(20deg, #5A2E7F, #CA669D, #E499C2)"}} className='fade-up-element w-full md:w-1/3 pt-4  md:ml-6 rounded-2xl mr-0 md:mr-8'>
          <form className="px-4"   onSubmit={handleSubmit}   >
              <div className='flex flex-col justify-center'>
                <h2 style={{ color: '#000000' }} className="mb-2 text-xl font-bold"> What Service you want</h2>
                <p className="w-full mb-6 text-black dark:text-neutral-300">
                  Provide Detail what kind of It service you want through below Inputs 
                </p>
              </div>

              <div className="relative mb-6" data-te-input-wrapper-init>
              <input
 type="text"
 id="name"
 autoComplete="given-name"
 placeholder="Name Here"
 className="mb-2 w-full rounded-md border border-gray-400 py-2 pl-2 pr-4 shadow-md dark:text-gray-300 sm:mb-0"
 name="name"
 value={formData.name}
 onChange={handleInputChange}
/>

              </div>

              <div className="relative mb-6" data-te-input-wrapper-init>
                <input
                 type="email"
                 id="email"
                 autoComplete="email"
                 placeholder="Email Address"
                 className="mb-2 w-full rounded-md border border-gray-400 py-2 pl-2 pr-4 shadow-md dark:text-gray-300 sm:mb-0"
                 name="email"
                 value={formData.email}
                 onChange={handleInputChange}
                />
              </div>
              <div className="relative mb-6" data-te-input-wrapper-init>
        <select
          id="service"
          name="service"
          value={formData.service}
          onChange={handleInputChange}
          className="w-full rounded-md border border-gray-400 py-2 pl-2 pr-4 shadow-md dark:text-gray-300"
        >
          <option value="" disabled>Select a Service</option>
          <option value="web-development">Web Development</option>
          <option value="app-development">App Development</option>
          <option value="wordpress">WordPress Website</option>
          <option value="shopify">Shopify Store </option>
          <option value="e-commerce-store">E-commerce Store</option>
          <option value="react-website">Website Changes</option>
          <option value="react-website">Website maintenance</option>
          <option value="react-website">React & Angular Website</option>
          <option value="react-website">Bug Fixing</option>

        </select>
      </div>


              <div className="relative mb-6" data-te-input-wrapper-init>
              <textarea

id="textarea"
name="textarea"
rows="3"
placeholder="Write your message..."
className="mb-2 w-full rounded-md border border-gray-400 py-2 pl-2 pr-4 shadow-md dark:text-gray-300 sm:mb-0"
value={formData.textarea}
onChange={handleInputChange}

/>

              </div>

              <button
                 type="submit"
                style={{ background: '#000000' }}
                data-te-ripple-init
                data-te-ripple-color="light"
                className="mb-6 inline-block w-full rounded px-6 pt-2.5 pb-2 text-xs font-medium uppercase leading-normal text-white shadow-[0_4px_9px_-4px_#3b71ca] transition duration-150 ease-in-out hover:bg-primary-600 hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:bg-primary-600 focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:outline-none focus:ring-0 active:bg-primary-700 active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] dark:shadow-[0_4px_9px_-4px_rgba(59,113,202,0.5)] dark:hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)]">
                Get Free Consultation 
              </button>
            </form>
          </div>
      </div>

    </div>

  )
}

export default MidSec