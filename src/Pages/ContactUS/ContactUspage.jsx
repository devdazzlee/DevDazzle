import React from 'react'
import ResponsiveAppBar from '../Navbar/Navbar'
import Footer from '../../Footer/Footer'
import ContactusForm from './ContactusForm'
import { Helmet } from 'react-helmet'

const ContactUspage = () => {
  return (
    <div>
            <Helmet>
        <title>Contact Us - DevDazzle</title>
        <meta name="description" content="Contact DevDazzle for inquiries, collaboration, or any assistance. We're here to help with your web development, app development, and marketing needs." />
        <meta name="keywords" content="DevDazzle, contact us, web development, app development, marketing" />
        <meta property="og:url" content="https://twitter.com/DevDazzle798" />
        <meta name="twitter:card" content="https://twitter.com/DevDazzle798" />
      </Helmet>
 <ResponsiveAppBar/>
 <ContactusForm/>
 <Footer/> 
    </div>
  )
}

export default ContactUspage