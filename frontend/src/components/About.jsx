import React from "react";

function About() {
  return (
    <div className="max-w-[85rem] px-4 py-10 sm:px-6 lg:px-8 lg:py-14 mx-auto">
      <div className="lg:grid lg:grid-cols-12 lg:gap-16 lg:items-center">
        <div className="lg:col-span-7">
          <div className="grid grid-cols-12 gap-2 sm:gap-6 items-center lg:-translate-x-10">
            <div className="col-span-4">
              <img
                className="rounded-xl"
                src="/src/public/amitabh kant.jpg"
                alt="Image Description"
              />
            </div>

            <div className="col-span-3">
              <img
                className="rounded-xl"
                src="/src/public/industry2.webp"
                alt="Image Description"
              />
            </div>

            <div className="col-span-5">
              <img
                className="rounded-xl"
                src="/src/public/Industry.webp"
                alt="Image Description"
              />
            </div>
          </div>
        </div>

        <div className="mt-5 sm:mt-10 lg:mt-0 lg:col-span-5">
          <div className="space-y-6 sm:space-y-8">
            <div className="space-y-2 md:space-y-4">
              <h2 className="font-bold text-3xl lg:text-4xl text-gray-800 dark:text-gray-200">
                About us
              </h2>
              <p className="text-gray-500">
                The Himachal Pradesh government provides various forms of
                support to its residents, including financial assistance,
                healthcare services, education, and infrastructure development.
                The government offers subsidies and incentives to promote
                industries and tourism, which are major contributors to the
                state's economy. Initiatives like the Chief Minister's Startup
                Scheme encourage entrepreneurship and innovation.
              </p>
            </div>

            {/*  */}
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;