// src/components/About.js

import React from 'react';

const AboutIADA = () => {
  return (
    <div className="flex justify-center">
      <div className="max-w-lg w-full border rounded-lg shadow-md p-6">
        <h1 className="text-3xl font-bold text-gray-800 mb-4 underline">About IADA</h1>
        <div className="mt-6">
          <div className="bg-gray-100 p-4 rounded-lg">
            <p className="text-gray-700">
              "IADA has provided us with exceptional service and innovative solutions. Highly recommended!"
            </p>
            <p className="text-gray-600 mt-2">IADA Himachal Govenment</p>
          </div>
        </div>
        <div className="flex justify-between items-center mt-6">
          <button className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded">
            Learn More
          </button>
          <div>
            <a href="#" className="text-blue-500 hover:text-blue-600 mr-4">
              <i className="fab fa-facebook-f"></i>
            </a>
            <a href="#" className="text-blue-500 hover:text-blue-600 mr-4">
              <i className="fab fa-twitter"></i>
            </a>
            <a href="#" className="text-blue-500 hover:text-blue-600">
              <i className="fab fa-linkedin-in"></i>
            </a>
          </div>
        </div>
        <div className="mt-6">
          <h2 className="text-xl font-bold text-gray-800 mb-2">Contact Us</h2>
          <p className="text-lg text-gray-700">Email: info@iada.com</p>
          <p className="text-lg text-gray-700">Phone: +1-123-456-7890</p>
        </div>
      </div>
    </div>
  );
};

export default AboutIADA;
