import React from "react";

function Footer() {
  return (
    <div>
      <footer className="mt-auto w-full max-w-[85rem] py-10 px-4 sm:px-6 lg:px-8 mx-auto">
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-4 gap-6 mb-10">
          <div className="col-span-full hidden lg:col-span-1 lg:block">
            <div className="mt-3 grid space-y-3 text-sm">
              <p
                className="text-xs font-semibold text-gray-900 uppercase dark:text-gray-100"
                aria-label="Brand"
              >
                Quick Links
              </p>
              <a
                className="mt-3 text-xs sm:text-sm text-gray-600 dark:text-gray-400"
                href="/"
                aria-label="Brand"
              >
                Home
              </a>
              <a
                className="mt-3 text-xs sm:text-sm text-gray-600 dark:text-gray-400"
                href="#"
                aria-label="Brand"
              >
                Services
              </a>
              <a
                className="mt-3 text-xs sm:text-sm text-gray-600 dark:text-gray-400"
                href="#"
                aria-label="Brand"
              >
                Media
              </a>
              <a
                className="mt-3 text-xs sm:text-sm text-gray-600 dark:text-gray-400"
                href="#"
                aria-label="Brand"
              >
                Contact Us
              </a>
            </div>
          </div>

          <div>
            <h4 className="text-xs font-semibold text-gray-900 uppercase dark:text-gray-100">
              About Us
            </h4>

            <div className="mt-3 grid space-y-3 text-sm">
              <p>
                <a
                  className="inline-flex gap-x-2 text-gray-600 hover:text-gray-800 dark:text-gray-400 dark:hover:text-gray-200"
                  href="#"
                >
                  Holiday List
                </a>
              </p>
              <p>
                <a
                  className="inline-flex gap-x-2 text-gray-600 hover:text-gray-800 dark:text-gray-400 dark:hover:text-gray-200"
                  href="#"
                >
                  Privacy Policy
                </a>
              </p>
              <p>
                <a
                  className="inline-flex gap-x-2 text-gray-600 hover:text-gray-800 dark:text-gray-400 dark:hover:text-gray-200"
                  href="#"
                >
                  Copyrights
                </a>
              </p>
              <p>
                <a
                  className="inline-flex gap-x-2 text-gray-600 hover:text-gray-800 dark:text-gray-400 dark:hover:text-gray-200"
                  href="#"
                >
                  Feedback
                </a>
              </p>
            </div>
          </div>

          <div>
            <h4 className="text-xs font-semibold text-gray-900 uppercase dark:text-gray-100">
              Nodal Officer
            </h4>

            <div className="mt-3 grid space-y-3 text-sm">
              <p>
                <p
                  className="inline-flex gap-x-2 text-gray-600 hover:text-gray-800 dark:text-gray-400 dark:hover:text-gray-200"
                  href="#"
                >
                  Yogesh gupta, department of industries, government of Himachal
                  Pradesh,
                </p>
              </p>
              <p>
                <a
                  className="inline-flex gap-x-2 text-gray-600 hover:text-gray-800 dark:text-gray-400 dark:hover:text-gray-200"
                  href="#"
                >
                  Baddi - 173205
                </a>
              </p>
              <p>
                <a
                  className="inline-flex gap-x-2 text-gray-600 hover:text-gray-800 dark:text-gray-400 dark:hover:text-gray-200"
                  href="#"
                >
                  Email : Example@mail
                </a>{" "}
              </p>
            </div>
          </div>

          <div>
            <h4 className="text-xs font-semibold text-gray-900 uppercase dark:text-gray-100">
              Office Location
            </h4>

            <div className="mt-3 grid space-y-3 text-sm">
              <p>
                <a
                  className="inline-flex gap-x-2 text-gray-600 hover:text-gray-800 dark:text-gray-400 dark:hover:text-gray-200"
                  href="#"
                >
                  WRJ8+6MV, Baddi, Himachal Pradesh 173205
                </a>
              </p>
              <p>
                <a
                  className="inline-flex gap-x-2 text-gray-600 hover:text-gray-800 dark:text-gray-400 dark:hover:text-gray-200"
                  href="#"
                >
                  PH.NO -
                </a>
              </p>
              <p>
                <a
                  className="inline-flex gap-x-2 text-gray-600 hover:text-gray-800 dark:text-gray-400 dark:hover:text-gray-200"
                  href="#"
                >
                  Email - example@mail.com
                </a>
              </p>
            </div>
          </div>
        </div>

        <div className="pt-5 mt-5 border-t border-gray-200 dark:border-gray-700">
          <div className="sm:flex sm:justify-between sm:items-center">
            <div className="flex items-center gap-x-3"></div>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default Footer;
