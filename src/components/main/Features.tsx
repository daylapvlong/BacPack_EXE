import React from 'react';
import Link from 'next/link';
import { motion } from "framer-motion"

import config from '../../config/index.json';
import Divider from './Divider';

const Features = () => {
  const { features } = config;
  const { title, logo, subtitle, subtitle2, description, items: featuresList } = features;
  return (
    <div className={`py-12 bg-background`} id="features">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="lg:text-center">
          <h1
            className={`w-full my-2 text-5xl font-bold leading-tight text-center text-primary mb-4`}
          >
            {title}
          </h1>
          <Divider />
          <div className="container mx-auto px-4">
            <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-16">
              <motion.div
                className="w-full lg:w-1/2"
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5 }}
              >
                <div className="relative aspect-w-16 aspect-h-9">
                  <img
                    className={`inline-block`}
                    src={logo}
                    alt="logo"
                  />
                </div>
              </motion.div>
              <motion.div
                className="w-full lg:w-1/2 space-y-10 text-center lg:text-left"
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
              >
                <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-gray-900 leading-tight">
                  {subtitle}
                </h2>
                <p className="text-lg md:text-xl text-gray-600 max-w-2xl mx-auto lg:mx-0">
                  {description}
                </p>
                <div className="">
                  <Link href="/about" passHref>
                    <motion.a
                      className="px-6 py-3 bg-primary text-white rounded-full font-semibold shadow-lg transition-colors duration-300 hover:bg-primary/90"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      Tìm hiểu thêm
                    </motion.a>
                  </Link>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Features;
