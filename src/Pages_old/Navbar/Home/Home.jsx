import React from 'react';
import ResponsiveAppBar from '../Navbar';
import MidSec from '../../MidSec/MidSec';
import ThirdSec from '../../ThirdSec/ThirdSec';
import PlatFormplay from '../../PlatformPlay/PlatFormplay';
import ThirdServices from '../../ThirdServices/ThirdServices';
import Cards from '../../Cards/Cards';
import Fifth from '../../Fifth/Fifth';
import Sixth from '../../Sixth/Sixth';
import Seventh from '../../../Seventh/Seventh';
import Footer from '../../../Footer/Footer';
import ServicesTabs from '../../../ServicesTabs/ServicesTabs';
import CuttingEdge from '../../../CuttingEdge/CuttingEdge';
import {Helmet} from "react-helmet";
const Home = () => {
  const fiverrProfileUrl = "https://www.fiverr.com/ahmed_raza892";
  return (
    <div>
         <Helmet>
         <title>Home</title>
        <meta name="description" content="DevDazzle provides expert web and app development services. Elevate your online presence with our customized solutions." />
        <meta name="keywords" content="DevDazzle, web development, app development, design, marketing" />
        <meta name="author" content="DevDazzle Team" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta property="og:url" content="https://twitter.com/DevDazzle798" />
        <meta name="twitter:card" content="https://twitter.com/DevDazzle798" />
        <meta property="og:title" content="Services - DevDazzle" />
        <meta property="og:description" content="Explore the comprehensive range of services offered by DevDazzle, including web development, app development, marketing, and more." />
        <meta property="og:url" content={fiverrProfileUrl} />
        <meta property="og:type" content="website" />
    </Helmet>
      <ResponsiveAppBar />
      <MidSec />
      <PlatFormplay />
      <ThirdServices />
      <CuttingEdge />
      <Cards />
      <Fifth />
      <Sixth />
      <Seventh />
      <Footer />
    </div>
  );
};

export default Home;
