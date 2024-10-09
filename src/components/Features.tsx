import React from 'react';

import config from '../config/index.json';
import Divider from './main/Divider';

const Features = () => {
  const { features } = config;
  const { title, subtitle, subtitle2, description, items: featuresList } = features;
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
          <div>
            <div className="flex flex-col lg:flex-row items-center gap-16">
              <div className="w-full lg:w-1/2">
                <div className="aspect-w-16 aspect-h-9 rounded-lg overflow-hidden shadow-lg">
                  <video
                    className="w-full h-full object-cover"
                    controls
                    src={'videoSrc'}
                  >
                    Your browser does not support the video tag.
                  </video>
                </div>
              </div>
              <div className="w-full lg:w-1/2 space-y-4 lg:text-right  sm:text-center sm:align-center">
                <h2 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-4xl">
                  {subtitle}
                </h2>
                <p className="text-xl text-gray-500">
                  {description}
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-20">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 items-center">
            {/* Feature Details Column */}
            <div>
            <div className="lg:text-left">
              <p className="mt-2 mb-8 text-3xl leading-8 font-extrabold tracking-tight text-primary sm:text-4xl">
                {subtitle2}
              </p>
            </div>
            <dl className="space-y-10 sm:pb-10">
              {featuresList.map((feature) => (
                <div key={feature.name} className="relative flex">
                  <dt className="flex justify-center items-center">
                    <div
                      className={`flex items-center justify-center h-12 w-12 rounded-md bg-background text-tertiary border-primary border-4`}
                    >
                      <img
                        className={`inline-block`}
                        src={feature.icon}
                        alt={feature.name}
                      />
                    </div>
                  </dt>
                  <dd className="text-base text-gray-500 ml-8">
                    <p className="text-lg leading-6 font-medium text-gray-900">
                      {feature.name}
                    </p>
                    {feature.description}
                  </dd>
                </div>
              ))}
            </dl>
            </div>

            {/* Image Column (One Image for the Whole Section) */}
            <div className="sm:mt-4">
              <img
                className="object-cover w-full h-auto"
                src="/assets/images/traugacbep.jpg"
                alt="Section Image"
              />
            </div>
          </div>


        </div>
      </div>
    </div>
  );
};

export default Features;
