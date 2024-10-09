import React from 'react';

import About from '../../components/main/About';
import Analytics from '../../components/main/Analytics';
import BackToTopButton from '../../components/main/BackToTop';
import Header from '../../components/main/Header';
import LazyShow from '../../components/main/LazyShow';
import GallerySection from '../../components/main/Gallery';
import AboutUs from '../../components/about/About';
import Product from '../../components/about/Product';

const AboutApp = () => {
  return (
    <div className={`bg-background grid gap-y-16 overflow-hidden`}>
      <BackToTopButton />
      <Header />
      
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
          <GallerySection />
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
