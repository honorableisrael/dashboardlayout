import React, { useState } from "react";

function DropdownNotification() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div>
      <span className="cursor-pointer" onClick={toggleDropdown}>
        <svg
          width="32"
          height="32"
          viewBox="0 0 32 32"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M25.7863 19.32L24.4529 17.1067C24.1729 16.6134 23.9196 15.68 23.9196 15.1334V11.76C23.9196 8.62669 22.0796 5.92002 19.4263 4.65335C18.7329 3.42669 17.4529 2.66669 15.9863 2.66669C14.5329 2.66669 13.2263 3.45335 12.5329 4.69335C9.93295 5.98669 8.13295 8.66669 8.13295 11.76V15.1334C8.13295 15.68 7.87961 16.6134 7.59961 17.0934L6.25295 19.32C5.71961 20.2134 5.59961 21.2 5.93295 22.1067C6.25295 23 7.01295 23.6934 7.99961 24.0267C10.5863 24.9067 13.3063 25.3334 16.0263 25.3334C18.7463 25.3334 21.4663 24.9067 24.0529 24.04C24.9863 23.7334 25.7063 23.0267 26.0529 22.1067C26.3996 21.1867 26.3063 20.1734 25.7863 19.32Z"
            fill="#DBDFE5"
          />
          <path
            d="M19.7729 26.68C19.2129 28.2267 17.7329 29.3334 15.9996 29.3334C14.9463 29.3334 13.9063 28.9067 13.1729 28.1467C12.7463 27.7467 12.4263 27.2134 12.2396 26.6667C12.4129 26.6934 12.5863 26.7067 12.7729 26.7334C13.0796 26.7734 13.3996 26.8134 13.7196 26.84C14.4796 26.9067 15.2529 26.9467 16.0263 26.9467C16.7863 26.9467 17.5463 26.9067 18.2929 26.84C18.5729 26.8134 18.8529 26.8 19.1196 26.76C19.3329 26.7334 19.5463 26.7067 19.7729 26.68Z"
            fill="#DBDFE5"
          />
          <circle cx="23.9996" cy="8" r="4" fill="#11A811" />
        </svg>
      </span>

      {isOpen && (
        <div
          id="dropdown"
          className={`absolute z-10 border border-[#E7E9FB] mt-2 bg-white divide-y right-6 sm:right-[17rem] divide-gray-100 rounded-lg shadow sm:w-[330px] md:w-[400px]`}
        >
          <ul
            className="py-2 text-sm text-[#101828]"
            aria-labelledby="dropdownDefaultButton"
          >
            <li className="flex items-center justify-between p-2 py-3 pb-5">
              <span className="flex text-[20px] text-[#101828] items-center block px-5 ">
                Notifications
              </span>
              <span className="flex items-center justify-between text-[#667085] pr-4">
                <span className="font-[400]">Unread only</span>
                <label className="inline-flex items-center ml-2 cursor-pointer">
                  <input type="checkbox" value="" className="sr-only peer" />
                  <div className="relative w-9 h-5 bg-gray-200 peer-focus:outline-none peer-focus:gray-200 peer-focus:gray-200 dark:peer-focus:ri rounded-full peer dark:bg-gray-200 peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-4 after:w-4 after:transition-all dark:border-gray-200 peer-checked:bg-gray-200"></div>
                </label>
              </span>
            </li>
            <hr className="px-2" />
            <li className="flex items-center p-5">
              <svg
                width="8"
                height="8"
                viewBox="0 0 8 8"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <rect
                  y="0.000244141"
                  width="8"
                  height="8"
                  rx="4"
                  fill="#11A811"
                />
              </svg>
              <div className="px-6">
                <div className="flex items-center block py-2 ">
                  S&B Inc. signed the lender’s agreement
                </div>
                <div className="text-[#667085]">Just now</div>
              </div>
            </li>
            <hr className="px-2" />
            <li className="flex items-center p-5">
              <svg
                width="8"
                height="8"
                viewBox="0 0 8 8"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <rect
                  y="0.000244141"
                  width="8"
                  height="8"
                  rx="4"
                  fill="#11A811"
                />
              </svg>
              <div className="px-6">
                <div className="flex items-center block py-2 ">
                  S&B Inc. signed the lender’s agreement
                </div>
                <div className="text-[#667085]">04:27 pm</div>
              </div>
            </li>
            <hr />
            <li className="flex items-center p-5">
              <div className="px-6 text-[#667085]">
                <div className="flex items-center block py-2 ">
                You received $20 from Bass Industries
                </div>
                <div className="text-[#667085]">Yesterday</div>
              </div>
            </li>
            <hr />
            <li className="flex items-center p-5">
              <div className="px-6 text-[#667085]">
                <div className="flex items-center block py-2 ">
                Archibald Holdings completed payment for Invoice #46
                </div>
                <div className="text-[#667085]">09/02/2024</div>
              </div>
            </li>
          </ul>
        </div>
      )}
    </div>
  );
}

export default DropdownNotification;
