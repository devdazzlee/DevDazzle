import React from 'react';
import { Helmet } from 'react-helmet-async';
import MegaNavbar from '../../components/layout/MegaNavbar';
import NewFooter from '../../components/layout/NewFooter';

const CookiePolicy = () => {
  return (
    <>
      <Helmet>
        <title>Cookie Policy - DevDazzle</title>
      </Helmet>
      <MegaNavbar />
      
      {/* Spacer for fixed navbar */}
      <div className="h-24 md:h-32"></div>
      
      <div className="pb-20 px-4 max-w-4xl mx-auto bg-black min-h-screen">
        <h1 className="text-4xl font-display font-bold mb-8">Cookie Policy</h1>
        <div className="prose prose-invert max-w-none">
          <p className="text-muted-foreground mb-6">Last updated: November 2024</p>
          
          <h2 className="text-2xl font-semibold mt-8 mb-4">1. What Are Cookies</h2>
          <p className="text-muted-foreground mb-4">
            Cookies are small text files stored on your device to enhance your browsing experience.
          </p>

          <h2 className="text-2xl font-semibold mt-8 mb-4">2. How We Use Cookies</h2>
          <p className="text-muted-foreground mb-4">
            We use cookies for analytics, preferences, and to improve our services.
          </p>

          <h2 className="text-2xl font-semibold mt-8 mb-4">3. Managing Cookies</h2>
          <p className="text-muted-foreground mb-4">
            You can control cookies through your browser settings.
          </p>

          <h2 className="text-2xl font-semibold mt-8 mb-4">4. Contact</h2>
          <p className="text-muted-foreground">
            Questions about cookies? Contact: contact@devdazzle.com
          </p>
        </div>
      </div>
      <NewFooter />
    </>
  );
};

export default CookiePolicy;

