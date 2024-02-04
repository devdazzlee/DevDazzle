import React from 'react';
import ResponsiveAppBar from '../Pages/Navbar/Navbar';
import MidSec from '../Pages/MidSec/MidSec';
import About_Cards from './Card_/About_Cards';
import AboutCards_reverse from './Card_/About_Card_reverse';
import About_Card3 from './Card_/About_Card3';
import ThirdServices from '../Pages/ThirdServices/ThirdServices';
import Sixth from '../Pages/Sixth/Sixth';
import Footer from '../Footer/Footer';
import Heading_Services from '../Heading_Services/Heading_Services';
import { Helmet } from 'react-helmet';

const About_us = () => {

  const fiverrProfileUrl = "https://www.fiverr.com/ahmed_raza892";
  return (
    <>
     <Helmet>
        <title>About Us - DevDazzle</title>
        <meta name="description" content="Learn more about DevDazzle and our dedicated team. We specialize in providing top-notch web development, app development, and marketing services to help businesses thrive online." />
        <meta name="keywords" content="DevDazzle, about us, web development, app development, marketing, team" />
        <meta name="author" content="DevDazzle Team" />
        <meta property="og:title" content="About Us - DevDazzle" />
        <meta property="og:description" content="Discover the story behind DevDazzle and our commitment to excellence in web development, app development, and marketing services." />
        <meta property="og:url" content="https://twitter.com/DevDazzle798" />
        <meta name="twitter:card" content="https://twitter.com/DevDazzle798" />
        <meta property="og:title" content="Services - DevDazzle" />
        <meta property="og:description" content="Explore the comprehensive range of services offered by DevDazzle, including web development, app development, marketing, and more." />
        <meta property="og:url" content={fiverrProfileUrl} />
        <meta property="og:type" content="website" />
</Helmet>

      <ResponsiveAppBar />
      <h1 className='text-4xl text-center text-white m-4 googlefont'>About Us</h1>
      <MidSec />
      <About_Cards />
      <Heading_Services
        text1="DESIGN ."
        text2="DEVELOPMENT ."
        text3="MARKETING"
        para="Our Team Is Our Greatest Asset."
      />

      <AboutCards_reverse />
      <Heading_Services
        text1="Marketing,"
        text2="Development,"
        text3="Layout"
        para="We Are Always Focused On Our Client's"
      />
      <div className='my-14'>
        <About_Card3 />
      </div>
      <ThirdServices />
      <Sixth />
      <Footer />
    </>
  );
};

export default About_us;
