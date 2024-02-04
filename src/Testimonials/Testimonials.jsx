import React from 'react'
import ResponsiveAppBar from '../Pages/Navbar/Navbar'
import MidSec from '../Pages/MidSec/MidSec'
import Testimonials_Card from './Testimonals_Card'
import Heading_Services from '../Heading_Services/Heading_Services'
import Testimonial_Card_Sec from './Testimonal_Card_'
import Footer from '../Footer/Footer'
import Seventh from '../Seventh/Seventh'
import Sixth from '../Pages/Sixth/Sixth'
import { Helmet } from 'react-helmet'

const Testimonials = () => {
  const fiverrProfileUrl = "https://www.fiverr.com/ahmed_raza892";
  return (
    <>

<Helmet>
        <title>Testimonials - DevDazzle</title>
        <meta name="description" content="Explore the testimonials showcasing DevDazzle's recent work in design, development, and marketing. Discover unique solutions for unique challenges." />
        <meta name="keywords" content="DevDazzle, testimonials, recent work, design, development, marketing" />
        <meta property="og:url" content="https://twitter.com/DevDazzle798" />
        <meta name="twitter:card" content="https://twitter.com/DevDazzle798" />
       <meta property="og:title" content="Services - DevDazzle" />
        <meta property="og:description" content="Explore the comprehensive range of services offered by DevDazzle, including web development, app development, marketing, and more." />
        <meta property="og:url" content={fiverrProfileUrl} />
        <meta property="og:type" content="website" />
      </Helmet>
    <ResponsiveAppBar/>
    <h1 className='text-4xl text-center text-white m-4 googlefont ' >Our Recent Work</h1>
    <MidSec/>
    <Testimonials_Card/>
    <Heading_Services

text1="DESIGN ."
text2="DEVELOPMENT ."
text3="MARKETING"
para="Unique Challenges Require Unique Solutions"
/>
<Testimonial_Card_Sec/>
<Sixth/>
<Seventh/>
<Footer/>
  
    </>
  )
}

export default Testimonials