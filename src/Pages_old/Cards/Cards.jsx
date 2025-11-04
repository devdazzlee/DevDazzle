import React from 'react'

const Cards = () => {
  return (
    <div>
    <div className='flex flex-wrap m-auto justify-center my-12'>
      <div className='w-full md:w-1/2 lg:w-1/3 xl:w-1/4 p-4'>
        <div className='max-w-sm rounded overflow-hidden shadow-lg border-white'>
          <img className='w-32 ml-4' src='https://brandians.com/wp-content/uploads/2023/05/Icon_Digital-Marketing-Solution.png' alt='Card Image' />
          <div className='px-6 py-4'>
            <h1 className='font-extrabold text-white text-2xl mb-2'>Content Marketing</h1>
            <p className='text-white text-base'>
              We provide full content services for social media, email campaigns, website content, SEO, digital advertising, and PR to drive website engagement and leads. Let us attract and retain your customers with exceptional content.
            </p>
          </div>
        </div>
      </div>
      {/* Repeat this card for additional content */}
      <div className='w-full md:w-1/2 lg:w-1/3 xl:w-1/4 p-4'>
        <div className='max-w-sm rounded overflow-hidden shadow-lg border-white'>
          <img className='w-32 ml-4' src='https://brandians.com/wp-content/uploads/2023/05/Icon_Design-Development.png' alt='Card Image' />
          <div className='px-6 py-4'>
            <h1 className='font-extrabold text-white text-2xl mb-2'>Website & Mobile App</h1>
            <p className='text-white text-base'>
            We create attractive and scalable websites and mobile apps, with a specialty in e-commerce, information, and social media. Our iOS and Android app development is top-notch, and we prioritize communication to deliver innovative solutions for your business.
            </p>
          </div>
        </div>
      </div>
      <div className='w-full md:w-1/2 lg:w-1/3 xl:w-1/4 p-4'>
        <div className='max-w-sm rounded overflow-hidden shadow-lg border-white'>
          <img className='w-32 ml-4' src='https://brandians.com/wp-content/uploads/2023/05/Icon_Digital-Marketing.png' alt='Card Image' />
          <div className='px-6 py-4'>
            <h1 className='font-extrabold text-white text-2xl mb-2'>Social Media Marketing</h1>
            <p className='text-white text-base'>
            Social media marketing boosts brand awareness and sales through targeted strategies on platforms like Facebook, Twitter, and Instagram. It also tracks results for analysis, making it a powerful tool for engagement and website traffic. Businesses need it to grow and expand.
            </p>
          </div>
        </div>
      </div>
      <div className='w-full md:w-1/2 lg:w-1/3 xl:w-1/4 p-4'>
        <div className='max-w-sm rounded overflow-hidden shadow-lg border-white'>
          <img className='w-32 ml-4' src='https://brandians.com/wp-content/uploads/2023/05/Icon_Social-Marketing.png' alt='Card Image' />
          <div className='px-6 py-4'>
            <h1 className='font-extrabold text-white text-2xl mb-2'>SEO & PPC</h1>
            <p className='text-white text-base'>
            We improve clients' online presence through SEO and PPC. Our SEO includes keyword research, optimization, content creation, and link building. Our PPC involves ad campaign creation, management, and targeting through Google Ads and Bing Ads.
            </p>
          </div>
        </div>
      </div>
      {/* Repeat this card for additional content */}
    </div>
    <div className='flex flex-wrap m-auto justify-center my-4'>
      <div className='w-full md:w-1/2 lg:w-1/3 xl:w-1/4 p-4'>
        <div className='max-w-sm rounded overflow-hidden shadow-lg border-white'>
          <img className='w-32 ml-4' src='https://brandians.com/wp-content/uploads/2023/05/Icon_Digital-Offset-Printing.png' alt='Card Image' />
          <div className='px-6 py-4'>
            <h1 className='font-extrabold text-white text-2xl mb-2'>Brand Development</h1>
            <p className='text-white text-base'>
            We create custom brand identities for businesses. Our team works closely with clients to understand their business and build a brand personality that resonates with their audience. Our services create memorable identities for companies to stand out from the competition.
            </p>
          </div>
        </div>
      </div>
      {/* Repeat this card for additional content */}
      <div className='w-full md:w-1/2 lg:w-1/3 xl:w-1/4 p-4'>
        <div className='max-w-sm rounded overflow-hidden shadow-lg border-white'>
          <img className='w-32 ml-4' src='https://brandians.com/wp-content/uploads/2023/05/Icon_TVCDVC.png' alt='Card Image' />
          <div className='px-6 py-4'>
            <h1 className='font-extrabold text-white text-2xl mb-2'>TVC & DVC</h1>
            <p className='text-white text-base'>
            We create high-quality advertising videos to promote products and services. We consult with clients to determine their needs, create a script, and produce the video. Our experienced team is ideal for businesses wanting to increase brand awareness, boost sales, or promote new products.
            </p>
          </div>
        </div>
      </div>
      <div className='w-full md:w-1/2 lg:w-1/3 xl:w-1/4 p-4'>
        <div className='max-w-sm rounded overflow-hidden shadow-lg border-white'>
          <img className='w-32 ml-4' src='https://brandians.com/wp-content/uploads/2023/05/Icon_Logo-Branding.png' alt='Card Image' />
          <div className='px-6 py-4'>
            <h1 className='font-extrabold text-white text-2xl mb-2'>Graphics & Illustration</h1>
            <p className='text-white text-base'>
            We create unique visual designs that reflect your brand's identity, including logos, marketing materials, infographics, social media graphics, brand guidelines, and packaging design. Our designs align with your business goals and objectives and will make your brand stand out.
            </p>
          </div>
        </div>
      </div>
      <div className='w-full md:w-1/2 lg:w-1/3 xl:w-1/4 p-4'>
        <div className='max-w-sm rounded overflow-hidden shadow-lg border-white'>
          <img className='w-32 ml-4' src='https://brandians.com/wp-content/uploads/2023/05/Icon_Support-and-Maintenance-.png' alt='Card Image' />
          <div className='px-6 py-4'>
            <h1 className='font-extrabold text-white text-2xl mb-2'>Digital Printing</h1>
            <p className='text-white text-base'>
            Digital printing is a cost-effective and flexible method that produces high-quality prints on various surfaces. It's perfect for small to medium runs of professional materials such as flyers, banners, and business cards with accurate colours and superior quality.
            </p>
          </div>
        </div>
      </div>
      {/* Repeat this card for additional content */}
    </div>
  </div>
  
  )
}

export default Cards