import React from 'react';
import { Helmet } from 'react-helmet-async';
import NewNavbar from '../../components/layout/NewNavbar';
import NewFooter from '../../components/layout/NewFooter';

const TermsOfService = () => {
  return (
    <>
      <Helmet>
        <title>Terms of Service - DevDazzle</title>
      </Helmet>
      <NewNavbar />
      <div className="pt-32 pb-20 px-4 max-w-4xl mx-auto">
        <h1 className="text-4xl font-display font-bold mb-8">Terms of Service</h1>
        <div className="prose prose-invert max-w-none">
          <p className="text-muted-foreground mb-6">Last updated: November 2024</p>
          
          <h2 className="text-2xl font-semibold mt-8 mb-4">1. Acceptance of Terms</h2>
          <p className="text-muted-foreground mb-4">
            By accessing and using DevDazzle's services, you accept and agree to be bound by these terms.
          </p>

          <h2 className="text-2xl font-semibold mt-8 mb-4">2. Services</h2>
          <p className="text-muted-foreground mb-4">
            DevDazzle provides web development, AI solutions, and digital services as described on our website.
          </p>

          <h2 className="text-2xl font-semibold mt-8 mb-4">3. Payment Terms</h2>
          <p className="text-muted-foreground mb-4">
            Payment terms are agreed upon in individual project contracts.
          </p>

          <h2 className="text-2xl font-semibold mt-8 mb-4">4. Contact</h2>
          <p className="text-muted-foreground">
            Questions about these terms? Contact: contact@devdazzle.com
          </p>
        </div>
      </div>
      <NewFooter />
    </>
  );
};

export default TermsOfService;

