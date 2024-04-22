import React from 'react';
import { FaArrowAltCircleDown, FaArrowRight, FaRegLightbulb } from 'react-icons/fa';
import { FiArrowRight, FiInfo } from 'react-icons/fi';

function NewsCard() {
  return (
    <div className="flex space-x-4 p-12">
 <div className="max-w-md bg-white shadow-lg rounded-lg overflow-hidden">
      <div className="px-4 py-4 text-center bg-gray-100 border-b">
        <p className="text-lg font-semibold text-gray-500">News Highlights</p>
      </div>
      <div className="px-4 py-2">
        <div className="flex items-center justify-between mb-2">
          <div className="flex items-center space-x-3">
            <FiArrowRight className="h-6 w-6 text-blue-600" />
            <h3 className="text-base text-gray-800">PM inaugurates Kochrab Ashram in Sabarmati, Gujarat</h3>
          </div>
          {/* <button className="bg-blue-600 text-white font-semibold py-1 px-3 rounded-lg hover:bg-blue-700 transition-colors duration-300">Read more</button> */}
        </div>
        <div className="flex items-center space-x-3">
            <FiArrowRight className="h-6 w-6 text-blue-600" />
            <h3 className="text-base text-gray-800">PM inaugurates Kochrab Ashram in Sabarmati, Gujarat</h3>
          </div>
          <div className="flex items-center space-x-3">
            <FiArrowRight className="h-6 w-6 text-blue-600" />
            <h3 className="text-base text-gray-800">PM inaugurates Kochrab Ashram in Sabarmati, Gujarat</h3>
          </div>
          <div className="flex items-center space-x-3">
            <FiArrowRight className="h-6 w-6 text-blue-600" />
            <h3 className="text-base text-gray-800">PM inaugurates Kochrab Ashram in Sabarmati, Gujarat</h3>
          </div>
      </div>

      {/* Add more news items here */}
      
    </div>

      {/* Most Requested Information & Forms */}
      <div className="flex flex-col flex-1 bg-white border shadow-sm rounded-xl dark:bg-slate-900 dark:border-gray-700 dark:shadow-slate-700/[.7]">
      <div className="bg-gray-100 border-b rounded-t-xl py-3 px-4 md:py-4 md:px-5 dark:bg-slate-900 dark:border-gray-700">
        <p className="mt-1 text-sm text-gray-500 dark:text-gray-500">
          Most Requested Information & Forms
        </p>
      </div>
      <div className="p-4 md:p-5 flex-1">
        {/* First information card */}
        <div className="mb-4 flex items-center space-x-3">
          <FiInfo className="h-6 w-6 text-blue-600" />
          <p className="text-gray-800">Access Government Forms</p>
        </div>
        {/* Add more information cards here */}
        <div className="mb-4 flex items-center space-x-3">
          <FiInfo className="h-6 w-6 text-blue-600" />
          <p className="text-gray-800">Request Public Information</p>
        </div>
        <div className="mb-4 flex items-center space-x-3">
          <FiInfo className="h-6 w-6 text-blue-600" />
          <p className="text-gray-800">Download Official Documents</p>
        </div>
        <div className="mb-4 flex items-center space-x-3">
          <FiInfo className="h-6 w-6 text-blue-600" />
          <p className="text-gray-800">Submit Online Applications</p>
        </div>
      </div>
    </div>

      {/* Activities & Initiatives */}
      <div className="flex flex-col flex-1 bg-white border shadow-sm rounded-xl dark:bg-slate-900 dark:border-gray-700 dark:shadow-slate-700/[.7]">
      <div className="bg-gray-100 border-b rounded-t-xl py-3 px-4 md:py-4 md:px-5 dark:bg-slate-900 dark:border-gray-700">
        <p className="mt-1 text-sm text-gray-500 dark:text-gray-500">
          Activities & Initiatives
        </p>
      </div>
      <div className="p-4 md:p-5 flex-1">
        {/* First activity card */}
        <div className="mb-4 flex items-center space-x-3">
          <FaRegLightbulb className="h-6 w-6 text-yellow-500" />
          <p className="text-gray-800">Launch of Green Energy Initiative</p>
        </div>
        {/* Add more activity cards here */}
        <div className="mb-4 flex items-center space-x-3">
          <FaRegLightbulb className="h-6 w-6 text-yellow-500" />
          <p className="text-gray-800">Community Clean-up Campaign</p>
        </div>
        <div className="mb-4 flex items-center space-x-3">
          <FaRegLightbulb className="h-6 w-6 text-yellow-500" />
          <p className="text-gray-800">Digital Literacy Drive</p>
        </div>
        <div className="mb-4 flex items-center space-x-3">
          <FaRegLightbulb className="h-6 w-6 text-yellow-500" />
          <p className="text-gray-800">Health and Wellness Workshops</p>
        </div>
      </div>
    </div>
    </div>
  );
}

export default NewsCard;
