import React from 'react'
import ResponsiveAppBar from '../Navbar/Navbar'
import MidSec from '../MidSec/MidSec'
import ThirdServices from '../ThirdServices/ThirdServices'
import CuttingEdge from '../../CuttingEdge/CuttingEdge'
import Fifth from '../Fifth/Fifth'
import Cards from '../Cards/Cards'
import Footer from '../../Footer/Footer'
import { Helmet } from 'react-helmet'

const Services = () => {
  const fiverrProfileUrl = "https://www.fiverr.com/users/muhammadraza173";

  return (
    <>
          <Helmet>
        <title>Services - DevDazzle</title>
        <meta name="description" content="Explore the comprehensive range of services offered by DevDazzle, including web development, app development, marketing, and more." />
        <meta name="keywords" content="DevDazzle, services, web development, app development, marketing" />
       {/* Open Graph Protocol meta tags */}
       <meta property="og:url" content="https://twitter.com/DevDazzle798" />
        <meta name="twitter:card" content="https://twitter.com/DevDazzle798" />
       <meta property="og:title" content="Services - DevDazzle" />
        <meta property="og:description" content="Explore the comprehensive range of services offered by DevDazzle, including web development, app development, marketing, and more." />
        <meta property="og:url" content={fiverrProfileUrl} />
        <meta property="og:type" content="website" />
      </Helmet>
<ResponsiveAppBar/>
<h1 className='text-4xl text-center text-white m-4 googlefont ' >Services</h1>
<MidSec/>
<ThirdServices/>
<CuttingEdge/>
<Cards/>
<Footer/>
    </>
  )
}

export default Services
