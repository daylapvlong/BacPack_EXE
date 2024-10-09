import React from 'react';

import config from '../../config/index.json';
import Divider from '../main/Divider';

const AboutUs = () => {
  const { features } = config;
  const { subtitle2, items: featuresList } = features;
  return (
    <div className={`py-12 bg-background`} id="about">
      <div className="container py-8 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <header className="text-center mb-12">
          <h1 className={`w-full my-2 text-5xl font-bold leading-tight text-center text-primary mb-4`}>Câu chuyện chúng tôi</h1>
          <Divider />
        </header>

        <div className="grid gap-12 md:grid-cols-2 items-center mb-12">
          <div className="relative rounded-lg overflow-hidden">
            <video
              className="w-full h-full object-contain"
              poster="/placeholder.svg?height=400&width=600"
              controls
            >
              <source src="/assets/vid.mp4" type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </div>
          <div className="space-y-4">
            <p className="mt-2 mb-8 text-3xl text-right leading-8 font-extrabold tracking-tight text-primary sm:text-4xl">
              AAAAAAAAAAAAAAAAA
            </p>
            <p className="text-lg lg:text-right sm:text-center text-muted-foreground">
              aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa
            </p>
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

export default AboutUs;
