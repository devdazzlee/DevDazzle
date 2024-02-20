import React, { useState , useEffect } from 'react';
import axios from 'axios';
const ContactusForm = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        service: '',
        textarea: '',
      });
    
      const [showPopup, setShowPopup] = useState(false);
    
      useEffect(() => {
        if (showPopup) {
          const timeoutId = setTimeout(() => {
            setShowPopup(false);
          }, 5000);
    
          return () => clearTimeout(timeoutId);
        }
      }, [showPopup]);
    
      const handleChange = (e) => {
        setFormData({
          ...formData,
          [e.target.name]: e.target.value,
        });
      };
    
      const handleSubmit = async (e) => {
        e.preventDefault();
    
        // Validate form fields
        if (formData.name.trim() === '' || formData.email.trim() === '' || formData.service.trim() === '' || formData.textarea.trim() === '') {
          alert('Please fill in all fields');
          return;
        }
    
        // Validate email using regex
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(formData.email)) {
          alert('Please enter a valid email address');
          return;
        }
    
        try {
          // Make API request using Axios
          // 
          const response = await axios.post('https://erin-blushing-butterfly.cyclic.app/api/messages', formData);
          setFormData({
            name: '',
            email: '',
            service: '',
            textarea: '',
          });
    
          setShowPopup(true);
          alert("Form Has been Submitted")
        } catch (error) {
          console.error('API Error:', error.response ? error.response.data : error.textarea);
          alert('An error occurred while sending the textarea. Please try again.');
        }
      };
    
  return (
    <>
    {showPopup && (
        <div className="fixed bottom-5 right-5 bg-green-500 text-white p-4 rounded">
          textarea sent successfully!
        </div>
      )}
      <div className="relative flex items-center justify-center min-h-screen sm:items-center sm:pt-0">
        <div className="max-w-6xl mx-auto sm:px-6 lg:px-8">
          <div className="mt-8 overflow-hidden">
            <div className="grid grid-cols-1 md:grid-cols-2">
            <div class="p-6 mr-2 sm:rounded-lg shadow-lg">
                    <h1  style={{ color: "#F170B8" }} class="text-4xl sm:text-5xl font-extrabold tracking-tight">
                        Get in Touch
                    </h1>
                    <p class="text-normal text-lg sm:text-2xl font-medium text-white dark:text-gray-400 mt-2">
                        Fill in the form to start a conversation
                    </p>

                    <div class="flex items-center mt-8 text-white dark:text-gray-400">
                        <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" viewBox="0 0 24 24" class="w-8 h-8 text-gray-500">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                        </svg>
                        <div class="ml-4 text-md tracking-wide font-semibold w-40">
                            Gulshan Iqbal 13 A Karachi
                        </div>
                    </div>

                    <div class="flex items-center mt-4 text-white dark:text-gray-400">
                        <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" viewBox="0 0 24 24" class="w-8 h-8 text-gray-500">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                        </svg>

                        <a href="https://wa.me/923278227842" target="_blank">
  
                        <div class="ml-4 text-md tracking-wide font-semibold w-40">
                            +92 327 8227842
                        </div>
</a>
                    </div>

                    <div class="flex items-center mt-2 text-white dark:text-gray-400">
                        <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" viewBox="0 0 24 24" class="w-8 h-8 text-gray-500">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                        </svg>

                        <a href="mailto:ahmedrazagithub@gmail.com" target="_blank">
                        <div class="ml-4 text-md tracking-wide font-semibold w-40">
                            ahmedrazagithub@gmail.com
                        </div>
</a>

                    </div>
                </div>

              <form
                className="p-6 flex flex-col justify-center sm:rounded-lg shadow-lg"
              >
                <h1 style={{ color: "#F170B8" }} className="text-4xl sm:text-5xl font-extrabold tracking-tight">
                  Send Us a Messege
                </h1>
                <div className="flex flex-col mt-4">
                  <label htmlFor="name" className="text-sm font-semibold text-white">
                    Your Name
                  </label>
                  <input
                    type="text"
                    name="name"
                    id="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="John Doe"
                    className="w-full mt-2 py-3 px-3 rounded-lg bg-gray-100 dark:bg-gray-900 border border-gray-400 dark:border-gray-700 text-gray-800 dark:text-white font-semibold focus:border-indigo-500 focus:outline-none"
                  />
                </div>

                <div className="flex flex-col mt-4">
                  <label htmlFor="email" className="text-sm font-semibold text-white">
                    Your Email
                  </label>
                  <input
                    type="email"
                    name="email"
                    id="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="example@example.com"
                    className="w-full mt-2 py-3 px-3 rounded-lg bg-gray-100 dark:bg-gray-900 border border-gray-400 dark:border-gray-700 text-gray-800 dark:text-white font-semibold focus:border-indigo-500 focus:outline-none"
                  />
                </div>

                <div className="flex flex-col mt-4">
                  <label htmlFor="tel" className="text-sm font-semibold text-white">
                  Name Service you Want 
                  </label>
                  <input
                    type="text"
                    name="service"
                    id="service"
                    value={formData.service}
                    onChange={handleChange}
                    placeholder="Write What service you want"
                    className="w-full mt-2 py-3 px-3 rounded-lg bg-gray-100 dark:bg-gray-900 border border-gray-400 dark:border-gray-700 text-gray-800 dark:text-white font-semibold focus:border-indigo-500 focus:outline-none"
                  />
                </div>

                <div className="flex flex-col mt-4">
                  <label htmlFor="textarea" className="text-sm font-semibold text-white">
                    Message
                  </label>
                  <textarea
                    id="textarea"
                    name="textarea"
                    rows="4"
                    value={formData.textarea}
                    onChange={handleChange}
                    className="block p-2.5 mt-2 text-sm text-gray-900 bg-gray-100 dark:bg-gray-900 rounded-lg border border-gray-400 dark:border-gray-700 focus:ring-blue-500 focus:border-blue-500 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    placeholder="Write your Message here..."
                  ></textarea>
                </div>

                <button
                onClick={handleSubmit}
                  type="submit"
                  style={{ background: 'linear-gradient(20deg, #5A2E7F, #CA669D, #E499C2)' }}
                  className="font-serif my-4 text-center px-12 sm:px-8 py-3 font-bold rounded text-white"
                >
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ContactusForm;
