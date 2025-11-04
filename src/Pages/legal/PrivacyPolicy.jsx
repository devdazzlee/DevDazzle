import React from 'react';
import { Helmet } from 'react-helmet-async';
import MegaNavbar from '../../components/layout/MegaNavbar';
import NewFooter from '../../components/layout/NewFooter';

const PrivacyPolicy = () => {
  return (
    <>
      <Helmet>
        <title>Privacy Policy - DevDazzle</title>
      </Helmet>
      <MegaNavbar />
      
      {/* Spacer for fixed navbar */}
      <div className="h-24 md:h-32"></div>
      
      <div className="pb-20 px-4 max-w-4xl mx-auto bg-black min-h-screen">
        <h1 className="text-4xl font-display font-bold mb-8">Privacy Policy</h1>
        <div className="prose prose-invert max-w-none">
          <p className="text-muted-foreground mb-6">Last updated: November 2024</p>
          
          <h2 className="text-2xl font-semibold mt-8 mb-4">1. Information We Collect</h2>
          <p className="text-muted-foreground mb-4">
            We collect information you provide directly to us, including name, email, phone number, and project details.
          </p>

          <h2 className="text-2xl font-semibold mt-8 mb-4">2. How We Use Your Information</h2>
          <p className="text-muted-foreground mb-4">
            We use the information to provide services, communicate with you, and improve our offerings.
          </p>

          <h2 className="text-2xl font-semibold mt-8 mb-4">3. Data Security</h2>
          <p className="text-muted-foreground mb-4">
            We implement appropriate security measures to protect your personal information.
          </p>

          <h2 className="text-2xl font-semibold mt-8 mb-4">4. Contact Us</h2>
          <p className="text-muted-foreground">
            For questions about this Privacy Policy, contact us at: contact@devdazzle.com
          </p>
        </div>
      </div>
      <NewFooter />
    </>
  );
};

export default PrivacyPolicy;

