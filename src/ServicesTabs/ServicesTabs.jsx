import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import React from 'react'
import '../App.css'


const ServicesTabs = () => {
  return (
    <div    className='flex flex-col justify-center my-12' >

<Tabs>
<TabList className={'text-center custom-tabs'} style={{ "border": "none"   }}>
      <Tab style={{ "fontSize": "1.3rem", "color": "#FEA7BD" , "fontWeight" : "bold" }}>Digital Marketing</Tab>
      <Tab style={{ "fontSize": "1.3rem", "color": "#FEA7BD" , "fontWeight" : "bold" }}>E-Commerce Marketing</Tab>
      <Tab style={{ "fontSize": "1.3rem", "color": "#FEA7BD" , "fontWeight" : "bold" }}>Branding</Tab>
      <Tab style={{ "fontSize": "1.3rem", "color": "#FEA7BD" , "fontWeight" : "bold" }}>Web & Mobile App</Tab>
    </TabList>



    <TabPanel>
    <div className='flex flex-wrap justify-center my-12'>
  <div className='w-full sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/5 p-4'>
    <div className='flex flex-col items-center'>
      <img className='w-6/12' src='https://brandians.com/wp-content/uploads/2023/06/Digital-Marketing-Strategy@2x.png' alt='' />
      <h2 className='googlefont text-white text-xl w-8/12 text-center font-bold'>Digital Marketing
Strategy</h2>
    </div>
  </div>
  <div className='w-full sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/5 p-4'>
    <div className='flex flex-col items-center'>
      <img className='w-6/12' src='https://brandians.com/wp-content/uploads/2023/06/Franchise-SEO@2x.png' alt='' />
      <h2 className='googlefont text-white text-xl w-8/12 text-center font-bold'>Franchise SEO</h2>
    </div>
  </div>
  <div className='w-full sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/5 p-4'>
    <div className='flex flex-col items-center'>
      <img className='w-6/12' src='https://brandians.com/wp-content/uploads/2023/06/Google-Analytics-Service@2x.png' alt='' />
      <h2 className='googlefont text-white text-xl w-8/12 text-center font-bold'>Google Analytics
Service</h2>
    </div>
  </div>
  <div className='w-full sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/5 p-4'>
    <div className='flex flex-col items-center'>
      <img className='w-6/12' src='https://brandians.com/wp-content/uploads/2023/06/Link-Building-Services@2x.png' alt='' />
      <h2 className='googlefont text-white text-xl w-8/12 text-center font-bold'>Link Building
Services</h2>
    </div>
  </div>
  <div className='w-full sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/5 p-4'>
    <div className='flex flex-col items-center'>
      <img className='w-6/12' src='https://brandians.com/wp-content/uploads/2023/06/Pay-Per-Click-PPC-Marketing@2x.png' alt='' />
      <h2 className='googlefont text-white text-xl w-8/12 text-center font-bold'>Pay Per Click (PPC) Marketing
</h2>
    </div>
  </div>
 
</div>
    <div className='flex flex-wrap justify-center my-12'>
    <div className='w-full sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/5 p-4'>
    <div className='flex flex-col items-center'>
      <img className='w-6/12' src='https://brandians.com/wp-content/uploads/2023/06/Search-Engine-Marketing-SEM@2x.png' alt='' />
      <h2 className='googlefont text-white text-xl w-8/12 text-center font-bold'>Search Engine
Marketing (SEM)
</h2>
    </div>
  </div>
  <div className='w-full sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/5 p-4'>
    <div className='flex flex-col items-center'>
      <img className='w-6/12' src='https://brandians.com/wp-content/uploads/2023/06/Social-Media-Advertising@2x.png' alt='' />
      <h2 className='googlefont text-white text-xl w-8/12 text-center font-bold'>Social Media
Advertising</h2>
    </div>
  </div>
  <div className='w-full sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/5 p-4'>
    <div className='flex flex-col items-center'>
      <img className='w-6/12' src='https://brandians.com/wp-content/uploads/2023/06/Social-Media-Management@2x.png' alt='' />
      <h2 className='googlefont text-white text-xl w-8/12 text-center font-bold'>Social Media
Management</h2>
    </div>
  </div>
  <div className='w-full sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/5 p-4'>
    <div className='flex flex-col items-center'>
      <img className='w-6/12' src='https://brandians.com/wp-content/uploads/2023/06/White-Label-Services@2x.png' alt='' />
      <h2 className='googlefont text-white text-xl w-8/12 text-center font-bold'>White Label
Services</h2>
    </div>
  </div>
  <div className='w-full sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/5 p-4'>
    <div className='flex flex-col items-center'>
      <img className='w-6/12' src='https://brandians.com/wp-content/uploads/2023/06/Content-Writing@2x.png' alt='' />
      <h2 className='googlefont text-white text-xl w-8/12 text-center font-bold'>Content Writing</h2>
    </div>
  </div>
 
</div>
    </TabPanel>
    <TabPanel>
    <div className='flex flex-wrap justify-center my-12'>
  <div className='w-full sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/5 p-4'>
    <div className='flex flex-col items-center'>
      <img className='w-6/12' src='https://brandians.com/wp-content/uploads/2023/06/Amazon-Advertising-PPC@2x.png' alt='' />
      <h2 className='googlefont text-white text-xl w-8/12 text-center font-bold'>Amazon Marketing</h2>
    </div>
  </div>
  <div className='w-full sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/5 p-4'>
    <div className='flex flex-col items-center'>
      <img className='w-6/12' src='https://brandians.com/wp-content/uploads/2023/06/Ebay-Marketing@2x.png' alt='' />
      <h2 className='googlefont text-white text-xl w-8/12 text-center font-bold'>Ebay Marketing</h2>
    </div>
  </div>
  <div className='w-full sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/5 p-4'>
    <div className='flex flex-col items-center'>
      <img className='w-6/12' src='https://brandians.com/wp-content/uploads/2023/06/Shopify-Marketing@2x.png' alt='' />
      <h2 className='googlefont text-white text-xl w-8/12 text-center font-bold'>Shopify Marketing</h2>
    </div>
  </div>
  <div className='w-full sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/5 p-4'>
    <div className='flex flex-col items-center'>
      <img className='w-6/12' src='https://brandians.com/wp-content/uploads/2023/06/Store-Management@2x.png' alt='' />
      <h2 className='googlefont text-white text-xl w-8/12 text-center font-bold'>Store Management</h2>
    </div>
  </div>
  <div className='w-full sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/5 p-4'>
    <div className='flex flex-col items-center'>
      <img className='w-6/12' src='https://brandians.com/wp-content/uploads/2023/06/Resource-Management@2x.png' alt='' />
      <h2 className='googlefont text-white text-xl w-8/12 text-center font-bold'>Resource Management</h2>
    </div>
  </div>
 
</div>
    <div className='flex flex-wrap justify-center my-12'>
    <div className='w-full sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/5 p-4'>
    <div className='flex flex-col items-center'>
      <img className='w-6/12' src='https://brandians.com/wp-content/uploads/2023/06/Search-Engine-Marketing-SEM@2x.png' alt='' />
      <h2 className='googlefont text-white text-xl w-8/12 text-center font-bold'>Search Engine
Marketing (SEM)
</h2>
    </div>
  </div>
  <div className='w-full sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/5 p-4'>
    <div className='flex flex-col items-center'>
      <img className='w-6/12' src='https://brandians.com/wp-content/uploads/2023/06/Social-Media-Advertising@2x.png' alt='' />
      <h2 className='googlefont text-white text-xl w-8/12 text-center font-bold'>Social Media
Advertising</h2>
    </div>
  </div>
  <div className='w-full sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/5 p-4'>
    <div className='flex flex-col items-center'>
      <img className='w-6/12' src='https://brandians.com/wp-content/uploads/2023/06/Social-Media-Management@2x.png' alt='' />
      <h2 className='googlefont text-white text-xl w-8/12 text-center font-bold'>Social Media
Management</h2>
    </div>
  </div>
  <div className='w-full sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/5 p-4'>
    <div className='flex flex-col items-center'>
      <img className='w-6/12' src='https://brandians.com/wp-content/uploads/2023/06/White-Label-Services@2x.png' alt='' />
      <h2 className='googlefont text-white text-xl w-8/12 text-center font-bold'>White Label
Services</h2>
    </div>
  </div>
  <div className='w-full sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/5 p-4'>
    <div className='flex flex-col items-center'>
      <img className='w-6/12' src='https://brandians.com/wp-content/uploads/2023/06/Content-Writing@2x.png' alt='' />
      <h2 className='googlefont text-white text-xl w-8/12 text-center font-bold'>Content Writing</h2>
    </div>
  </div>
 
</div>
    </TabPanel>
    <TabPanel>
    <div className='flex flex-wrap justify-center my-12'>
  <div className='w-full sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/5 p-4'>
    <div className='flex flex-col items-center'>
      <img className='w-6/12' src='https://brandians.com/wp-content/uploads/2023/06/Logo-Brand-Guide@2x.png' alt='' />
      <h2 className='googlefont text-white text-xl w-8/12 text-center font-bold'>Logo & Brand Guide</h2>
    </div>
  </div>
  <div className='w-full sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/5 p-4'>
    <div className='flex flex-col items-center'>
      <img className='w-6/12' src='https://brandians.com/wp-content/uploads/2023/06/Brand-Planning-Strategy@2x.png' alt='' />
      <h2 className='googlefont text-white text-xl w-8/12 text-center font-bold'>Brand Planning & Strategy</h2>
    </div>
  </div>
  <div className='w-full sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/5 p-4'>
    <div className='flex flex-col items-center'>
      <img className='w-6/12' src='https://brandians.com/wp-content/uploads/2023/06/Marketing-Material@2x.png' alt='' />
      <h2 className='googlefont text-white text-xl w-8/12 text-center font-bold'>Marketing Material</h2>
    </div>
  </div>
  <div className='w-full sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/5 p-4'>
    <div className='flex flex-col items-center'>
      <img className='w-6/12' src='https://brandians.com/wp-content/uploads/2023/06/Social-Media-Branding@2x.png' alt='' />
      <h2 className='googlefont text-white text-xl w-8/12 text-center font-bold'>Social Media Branding</h2>
    </div>
  </div>
  <div className='w-full sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/5 p-4'>
    <div className='flex flex-col items-center'>
      <img className='w-6/12' src='https://brandians.com/wp-content/uploads/2023/06/Amazon-Storefront-Branding@2x.png' alt='' />
      <h2 className='googlefont text-white text-xl w-8/12 text-center font-bold'>Amazon Storefront Branding
</h2>
    </div>
  </div>
 
</div>
    <div className='flex flex-wrap justify-center my-12'>
    <div className='w-full sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/5 p-4'>
    <div className='flex flex-col items-center'>
      <img className='w-6/12' src='https://brandians.com/wp-content/uploads/2023/06/Ebay-Store-Design@2x.png' alt='' />
      <h2 className='googlefont text-white text-xl w-8/12 text-center font-bold'>Ebay Store Design</h2>
    </div>
  </div>
  <div className='w-full sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/5 p-4'>
    <div className='flex flex-col items-center'>
      <img className='w-6/12' src='https://brandians.com/wp-content/uploads/2023/06/Wallmart-Store-Design@2x.png' alt='' />
      <h2 className='googlefont text-white text-xl w-8/12 text-center font-bold'>Wallmart Store Design</h2>
    </div>
  </div>
  <div className='w-full sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/5 p-4'>
    <div className='flex flex-col items-center'>
      <img className='w-6/12' src='https://brandians.com/wp-content/uploads/2023/06/Shopify-Store-Design@2x.png' alt='' />
      <h2 className='googlefont text-white text-xl w-8/12 text-center font-bold'>Shopify Store Design</h2>
    </div>
  </div>
  <div className='w-full sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/5 p-4'>
    <div className='flex flex-col items-center'>
      <img className='w-6/12' src='https://brandians.com/wp-content/uploads/2023/06/Product-Branding@2x.png' alt='' />
      <h2 className='googlefont text-white text-xl w-8/12 text-center font-bold'>Product Branding</h2>
    </div>
  </div>
  
 
</div>
    </TabPanel>
    <TabPanel>
    <div className='flex flex-wrap justify-center my-12'>
  <div className='w-full sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/5 p-4'>
    <div className='flex flex-col items-center'>
      <img className='w-6/12' src='https://brandians.com/wp-content/uploads/2023/06/Custom-Website@2x.png' alt='' />
      <h2 className='googlefont text-white text-xl w-8/12 text-center font-bold'>Custom Website</h2>
    </div>
  </div>
  <div className='w-full sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/5 p-4'>
    <div className='flex flex-col items-center'>
      <img className='w-6/12' src='https://brandians.com/wp-content/uploads/2023/06/WordPress-Website@2x.png' alt='' />
      <h2 className='googlefont text-white text-xl w-8/12 text-center font-bold'>WordPress Website</h2>
    </div>
  </div>
  <div className='w-full sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/5 p-4'>
    <div className='flex flex-col items-center'>
      <img className='w-6/12' src='https://brandians.com/wp-content/uploads/2023/06/WordPress-Woo-Commerce-website@2x.png' alt='' />
      <h2 className='googlefont text-white text-xl w-8/12 text-center font-bold'>Woo Commerce website</h2>
    </div>
  </div>
  <div className='w-full sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/5 p-4'>
    <div className='flex flex-col items-center'>
      <img className='w-6/12' src='https://brandians.com/wp-content/uploads/2023/06/Wix-Website-Design@2x.png' alt='' />
      <h2 className='googlefont text-white text-xl w-8/12 text-center font-bold'>Wix Website Design</h2>
    </div>
  </div>
  <div className='w-full sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/5 p-4'>
    <div className='flex flex-col items-center'>
      <img className='w-6/12' src='https://brandians.com/wp-content/uploads/2023/06/Shopify-Website-Design@2x.png' alt='' />
      <h2 className='googlefont text-white text-xl w-8/12 text-center font-bold'>Shopify Website Design</h2>
    </div>
  </div>
 
</div>
    <div className='flex flex-wrap justify-center my-12'>
    <div className='w-full sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/5 p-4'>
    <div className='flex flex-col items-center'>
      <img className='w-6/12' src='https://brandians.com/wp-content/uploads/2023/06/eCommerce-Website-Design@2x.png' alt='' />
      <h2 className='googlefont text-white text-xl w-8/12 text-center font-bold'>eCommerce Website Design
</h2>
    </div>
  </div>
  <div className='w-full sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/5 p-4'>
    <div className='flex flex-col items-center'>
      <img className='w-6/12' src='https://brandians.com/wp-content/uploads/2023/06/Domain-and-Hosting-Service@2x.png' alt='' />
      <h2 className='googlefont text-white text-xl w-8/12 text-center font-bold'>Domain and Hosting Service</h2>
    </div>
  </div>
  <div className='w-full sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/5 p-4'>
    <div className='flex flex-col items-center'>
      <img className='w-6/12' src='https://brandians.com/wp-content/uploads/2023/06/Website-Management-Service@2x.png' alt='' />
      <h2 className='googlefont text-white text-xl w-8/12 text-center font-bold'>Website Management Service</h2>
    </div>
  </div>
  <div className='w-full sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/5 p-4'>
    <div className='flex flex-col items-center'>
      <img className='w-6/12' src='https://brandians.com/wp-content/uploads/2023/06/Mobile-App-Development@2x.png' alt='' />
      <h2 className='googlefont text-white text-xl w-8/12 text-center font-bold'>Mobile App Development</h2>
    </div>
  </div>
  <div className='w-full sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/5 p-4'>
    <div className='flex flex-col items-center'>
      <img className='w-6/12' src='https://brandians.com/wp-content/uploads/2023/06/Custom-CMS-Development@2x.png' alt='' />
      <h2 className='googlefont text-white text-xl w-8/12 text-center font-bold'>Custom CMS Development</h2>
    </div>
  </div>
 
</div>
    </TabPanel>
    
  </Tabs>


    </div>
  )
}

export default ServicesTabs