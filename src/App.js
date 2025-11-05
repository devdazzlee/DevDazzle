import React, { Suspense, lazy } from 'react';
import { Routes, Route } from 'react-router-dom';
import './styles/globals.css';
import './App.css';
import UltimateHome from './Pages/UltimateHome.jsx';

// Eager load home

// Lazy load pages
const WebDevelopment = lazy(() => import('./Pages/Services/WebDevelopment'));
const AIBusinessAgents = lazy(() => import('./Pages/Services/AIBusinessAgents'));
const AIChatbots = lazy(() => import('./Pages/Services/AIChatbots'));
const AIContentCreation = lazy(() => import('./Pages/Services/AIContentCreation'));
const MobileApps = lazy(() => import('./Pages/Services/MobileApps'));
const UIUXDesign = lazy(() => import('./Pages/Services/UIUXDesign'));
const Ecommerce = lazy(() => import('./Pages/Services/Ecommerce'));
const DigitalMarketing = lazy(() => import('./Pages/Services/DigitalMarketing'));

const About = lazy(() => import('./Pages/About'));
const Contact = lazy(() => import('./Pages/Contact'));
const Portfolio = lazy(() => import('./Pages/Portfolio'));
const Careers = lazy(() => import('./Pages/Careers'));
const PrivacyPolicy = lazy(() => import('./Pages/legal/PrivacyPolicy'));
const TermsOfService = lazy(() => import('./Pages/legal/TermsOfService'));
const CookiePolicy = lazy(() => import('./Pages/legal/CookiePolicy'));

const PageLoader = () => (
  <div className="flex items-center justify-center min-h-screen bg-background">
    <div className="relative">
      <div className="w-16 h-16 border-4 border-primary/30 border-t-primary rounded-full animate-spin"></div>
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="w-8 h-8 bg-gradient-to-r from-purple-600 to-pink-600 rounded-full animate-pulse"></div>
      </div>
    </div>
  </div>
);

function App() {
  return (
    <Suspense fallback={<PageLoader />}>
      <Routes>
        {/* Home */}
        <Route path="/" element={<UltimateHome />} />

            {/* AI & Automation */}
            <Route path="/services/ai-business-agents" element={<AIBusinessAgents />} />
            <Route path="/services/ai-chatbots" element={<AIChatbots />} />
            <Route path="/services/ai-content-creation" element={<AIContentCreation />} />
            <Route path="/services/ai-marketing" element={<AIBusinessAgents />} />
            <Route path="/services/predictive-analytics" element={<AIBusinessAgents />} />
            <Route path="/services/llm-integration" element={<AIBusinessAgents />} />
            <Route path="/services/ai-workflow" element={<AIBusinessAgents />} />
            <Route path="/services/computer-vision" element={<AIBusinessAgents />} />

            {/* Web & App Development */}
            <Route path="/services/web-development" element={<WebDevelopment />} />
            <Route path="/services/web-app-development" element={<WebDevelopment />} />
            <Route path="/services/mobile-apps" element={<MobileApps />} />
            <Route path="/services/ecommerce" element={<Ecommerce />} />
            <Route path="/services/api-integration" element={<WebDevelopment />} />
            <Route path="/services/cms-solutions" element={<WebDevelopment />} />
            <Route path="/services/seo-optimization" element={<WebDevelopment />} />

            {/* Design */}
            <Route path="/services/uiux-design" element={<UIUXDesign />} />
            <Route path="/services/brand-identity" element={<UIUXDesign />} />
            <Route path="/services/interface-animation" element={<UIUXDesign />} />
            <Route path="/services/motion-design" element={<UIUXDesign />} />
            <Route path="/services/logo-design" element={<UIUXDesign />} />

            {/* Marketing */}
            <Route path="/services/digital-marketing" element={<DigitalMarketing />} />
            <Route path="/services/social-media" element={<DigitalMarketing />} />
            <Route path="/services/campaign-optimization" element={<DigitalMarketing />} />
            <Route path="/services/email-marketing" element={<DigitalMarketing />} />
            <Route path="/services/conversion-optimization" element={<DigitalMarketing />} />
            <Route path="/services/analytics-dashboard" element={<DigitalMarketing />} />

            {/* Advanced Solutions */}
            <Route path="/services/custom-ai-tools" element={<AIBusinessAgents />} />
            <Route path="/services/portfolio-generators" element={<AIBusinessAgents />} />
            <Route path="/services/smart-dashboards" element={<WebDevelopment />} />
            <Route path="/services/automation-bots" element={<AIChatbots />} />
            <Route path="/services/ai-customer-support" element={<AIChatbots />} />

            {/* Corporate */}
            <Route path="/about" element={<About />} />
            <Route path="/portfolio" element={<Portfolio />} />
            <Route path="/careers" element={<Careers />} />
            <Route path="/contact" element={<Contact />} />

            {/* Legal */}
            <Route path="/privacy-policy" element={<PrivacyPolicy />} />
            <Route path="/terms-of-service" element={<TermsOfService />} />
            <Route path="/cookie-policy" element={<CookiePolicy />} />

        {/* Catch all */}
        <Route path="*" element={<UltimateHome />} />
      </Routes>
    </Suspense>
  );
}

export default App;
