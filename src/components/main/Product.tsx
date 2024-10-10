import React from 'react';

import { motion } from 'framer-motion';

import config from '../../config/index.json';
import Divider from './Divider';
import Link from 'next/link';

const Product = () => {
  const { product } = config;
  const [firstItem, secondItem] = product.items;

  return (
    <section className={`bg-background py-8`} id="product">
      <div className={`container max-w-5xl mx-auto m-8`}>
        <h1
          className={`w-full my-2 text-5xl font-bold leading-tight text-center text-primary mb-4`}
        >
          {product.title}
        </h1>
        <Divider />
        <div className={`flex flex-wrap`}>
          <div className={`flex justifi-center items-center w-5/6 sm:w-1/2 p-6`}>
            <div className={`space-y-8`}>
              <h3
                className={`text-3xl text-gray-800 font-bold leading-none mb-3`}
              >
                {firstItem?.title}
              </h3>
              <p className={`text-gray-600`}>{firstItem?.description}</p>
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
            </div>
          </div>
          <div className={`w-full sm:w-1/2 p-6`}>
            <img
              className="h-7/6"
              src={firstItem?.img}
              alt={firstItem?.title}
            />
          </div>
        </div>
        <div className={`flex flex-wrap flex-col-reverse sm:flex-row`}>
          <div className={`w-full sm:w-1/2 p-6`}>
            <img
              className="h-6/6"
              src={secondItem?.img}
              alt={secondItem?.title}
            />
          </div>
          <div className={`flex justifi-center items-center w-5/6 sm:w-1/2 p-6`}>
            <div className={`space-y-8`}>
              <h3
                className={`text-3xl text-gray-800 font-bold leading-none mb-3`}
              >
                {secondItem?.title}
              </h3>
              <p className={`text-gray-600`}>{secondItem?.description}</p>
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
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Product;
