import React from "react";

function CardGroup() {
  return (
    <div className="flex flex-col p-9">
      <div className=" grid border rounded-xl shadow-sm divide-y overflow-hidden sm:flex sm:divide-y-0 sm:divide-x dark:border-neutral-700 dark:shadow-neutral-700/70 dark:divide-neutral-600 p-9">
        <div className="transform hover:scale-105 p-7 rounded-xl flex flex-col flex-[1_0_0%] bg-white dark:bg-neutral-800">
          <img
            className=" w-auto h-80 rounded-xl sm:rounded-se-none"
            src="/src/public/billPay.webp"
            alt="Image Description"
          />
          <div className="p-4 flex-1 md:p-5">
            <h3 className="text-lg font-bold text-gray-800 dark:text-white">
             Pay Bills
            </h3>
            <p className="mt-1 text-gray-500 dark:text-neutral-400">
              Pay your water & maintenance bills 
            </p>
          </div>
          <div className="p-4 border-t sm:px-5 dark:border-neutral-700">
            <p className="text-xs text-gray-500 dark:text-neutral-500">
              Last updated 5 mins ago
            </p>
          </div>
        </div>

        <div className="transform hover:scale-105 p-7 rounded-xl flex flex-col flex-[1_0_0%] bg-white dark:bg-neutral-800">
          <img
            className="rounded-xl w-100 h-80"
            src="/src/public/his.webp"
            alt="Image Description"
          />
          <div className="p-4 flex-1 md:p-5">
            <h3 className="text-lg font-bold text-gray-800 dark:text-white">
              Payment History
            </h3>
            <p className="mt-1 text-gray-500 dark:text-neutral-400">
              Check your payment history
            </p>
          </div>
          <div className="p-4 border-t sm:px-5 dark:border-neutral-700">
            <p className="text-xs text-gray-500 dark:text-neutral-500">
              Last updated 5 mins ago
            </p>
          </div>
        </div>

        <div className="transform hover:scale-105 p-7 rounded-xl flex flex-col flex-[1_0_0%] bg-white dark:bg-neutral-800">
          <img
            className="rounded-xl w-100 h-80  sm:rounded-se-xl"
            src="/src/public/billDue.webp"
            alt="Image Description"
          />
          <div className="p-4 flex-1 md:p-5">
            <h3 className="text-lg font-bold text-gray-800 dark:text-white">
            Due Bills & Fines
            </h3>
            <p className="mt-1 text-gray-500 dark:text-neutral-400">
              Check the due bills and fines 
            </p>
          </div>
          <div className="p-4 border-t sm:px-5 dark:border-neutral-700">
            <p className="text-xs text-gray-500 dark:text-neutral-500">
              Last updated 5 mins ago
            </p>
          </div>
        </div>
      </div>

      <div className=" p-7 grid border  shadow-sm divide-y overflow-hidden sm:flex sm:divide-y-0 sm:divide-x dark:border-neutral-700 dark:shadow-neutral-700/70 dark:divide-neutral-600">
      <div className="transform hover:scale-105 p-7 rounded-xl flex flex-col flex-[1_0_0%] bg-white dark:bg-neutral-800">
          <img
            className=" w-auto h-80 rounded-xl sm:rounded-se-none"
            src="/src/public/message.webp"
            alt="Image Description"
          />
          <div className="p-4 flex-1 md:p-5">
            <h3 className="text-lg font-bold text-gray-800 dark:text-white">
             Alerts
            </h3>
            <p className="mt-1 text-gray-500 dark:text-neutral-400">
              Check the latest alerts here
            </p>
          </div>
          <div className="p-4 border-t sm:px-5 dark:border-neutral-700">
            <p className="text-xs text-gray-500 dark:text-neutral-500">
              Last updated 5 mins ago
            </p>
          </div>
        </div>

        <div className="transform hover:scale-105 p-7 rounded-xl flex flex-col flex-[1_0_0%] bg-white dark:bg-neutral-800">
          <img
            className="rounded-xl w-100 h-80 sm:rounded-se-none"
            src="/src/public/document.webp"
            alt="Image Description"
          />
          <div className="p-4 flex-1 md:p-5">
            <h3 className="text-lg font-bold text-gray-800 dark:text-white">
            Upload Documents
            </h3>
            <p className="mt-1 text-gray-500 dark:text-neutral-400">
              Upload the required documnets here
            </p>
          </div>
          <div className="p-4 border-t sm:px-5 dark:border-neutral-700">
            <p className="text-xs text-gray-500 dark:text-neutral-500">
              Last updated 5 mins ago
            </p>
          </div>
        </div>

        <div className="transform hover:scale-105 p-7 rounded-xl flex flex-col flex-[1_0_0%] bg-white dark:bg-neutral-800">
          <img
            className="rounded-xl w-100 h-80  sm:rounded-se-xl"
            src="/src/public/contactUs.webp"
            alt="Image Description"
          />
          <div className="p-4 flex-1 md:p-5">
            <h3 className="text-lg font-bold text-gray-800 dark:text-white">
              Contact Us
            </h3>
            <p className="mt-1 text-gray-500 dark:text-neutral-400">
              Contact us for any help & complaints
            </p>
          </div>
          <div className="p-4 border-t sm:px-5 dark:border-neutral-700">
            <p className="text-xs text-gray-500 dark:text-neutral-500">
              Last updated 5 mins ago
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CardGroup;