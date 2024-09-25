import React from 'react';

import config from '../config/index.json';

const Features = () => {
  const { features } = config;
  const { title, subtitle, subtitle2, description, items: featuresList } = features;
  return (
    <div className={`py-12 bg-background`} id="features">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="lg:text-center">
          <h2
            className={`text-base text-primary font-semibold tracking-wide uppercase`}
          >
            {title}
          </h2>
          <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
            {subtitle}
          </p>
          <p className="mt-4 max-w-2xl text-xl text-gray-500 lg:mx-auto">
            {description}
          </p>
        </div>

        <div className="mt-20">
          <div className="lg:text-center">
            <p className="mt-2 mb-8 text-3xl leading-8 font-extrabold tracking-tight text-primary sm:text-4xl">
              {subtitle2}
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 items-center">
            {/* Feature Details Column */}
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

            {/* Image Column (One Image for the Whole Section) */}
            <div className="">
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
