import React from 'react';

import About from '../../components/main/About';
import Analytics from '../../components/main/Analytics';
import BackToTopButton from '../../components/main/BackToTop';
import Header from '../../components/main/Header';
import LazyShow from '../../components/main/LazyShow';

const ProductApp = () => {
  return (
    <div className={`bg-background grid gap-y-16 overflow-hidden`}>
      <BackToTopButton />
      <div className={`relative bg-background`}>
        <div className="max-w-8xl mx-auto h-screen">
          <div
            className={`relative z-10 pb-8 bg-background sm:pb-16 md:pb-20 h-screen lg:max-w-2xl lg:w-full lg:pb-28 xl:pb-32`}
          >
            <Header />
          </div>
        </div>
      </div>
      
      <LazyShow>
        <>
          <About />
        </>
      </LazyShow>
      <Analytics />
    </div>
  );
};

export default ProductApp;
