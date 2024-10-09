import React from 'react';
import Image from 'next/image';
import About from '../../components/main/About';
import Analytics from '../../components/main/Analytics';
import BackToTopButton from '../../components/main/BackToTop';
import LazyShow from '../../components/main/LazyShow';
import AboutUs from '../../components/about/About';
import Product from '../../components/about/Product';
import MenuAbout from '../../components/about/HeaderAbout';

const AboutApp = () => {
  return (
    <div className={`bg-background grid gap-y-16 overflow-hidden`}>
      <BackToTopButton />
      <div className="relative h-screen w-full overflow-hidden">
      <Image
        src="/assets/images/background.jpg"
        alt="Happy team"
        layout="fill"
        objectFit="cover"
        priority
      />
      <div className="absolute inset-0 bg-black bg-opacity-40" /> {/* Optional overlay for better text visibility */}
      <div className="relative z-10 h-full">
        <MenuAbout />
        <div className="container mx-auto px-4 h-full flex items-center">
          <div className="max-w-2xl text-white">
            <h1 className="text-6xl font-extrabold mb-4">BacPack chào bạn</h1>
            <p className="text-4xl">We're passionate about creating amazing experiences.</p>
          </div>
        </div>
      </div>
    </div>
      <LazyShow>
        <>
          <AboutUs />
        </>
      </LazyShow>
      <LazyShow>
        <>
          <Product />
        </>
      </LazyShow>
      <LazyShow>
        <>
          <About />
        </>
      </LazyShow>
      <Analytics />
    </div>
  );
};

export default AboutApp;
