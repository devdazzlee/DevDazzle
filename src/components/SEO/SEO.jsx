import React from 'react';
import { Helmet } from 'react-helmet-async';

const SEO = ({
  title = 'DevDazzle - Web Development, Mobile Apps & AI Solutions',
  description = 'Transform your digital presence with DevDazzle. Expert web development, mobile apps, and AI solutions tailored to elevate your business.',
  keywords = 'DevDazzle, web development, mobile apps, AI solutions, digital agency, software development',
  url = 'https://devdazzle.com',
  image = 'https://devdazzle.com/og-image.jpg',
  type = 'website',
  author = 'DevDazzle Team'
}) => {
  return (
    <Helmet>
      {/* Basic Meta Tags */}
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />
      <meta name="author" content={author} />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <meta charSet="utf-8" />
      
      {/* Open Graph / Facebook */}
      <meta property="og:type" content={type} />
      <meta property="og:url" content={url} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={image} />
      <meta property="og:site_name" content="DevDazzle" />
      
      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:url" content={url} />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={image} />
      <meta name="twitter:creator" content="@DevDazzle798" />
      
      {/* Canonical URL */}
      <link rel="canonical" href={url} />
      
      {/* Additional Meta Tags */}
      <meta name="robots" content="index, follow" />
      <meta name="language" content="English" />
      <meta name="revisit-after" content="7 days" />
      <meta httpEquiv="Content-Type" content="text/html; charset=utf-8" />
      
      {/* Theme Color */}
      <meta name="theme-color" content="#6366f1" />
      <meta name="msapplication-TileColor" content="#6366f1" />
    </Helmet>
  );
};

export default SEO;

