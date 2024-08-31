import React, { useState } from "react";
import logo from "../../../assets/Tradevu Logo.svg";
import Dropdown2 from "../dropdown2";
import DropdownNotification from "../dropdownnotification";
import DashboardNav from "./mobile_navbar";

const Nav = () => {
  const [showNav, setShowNav]: any = useState(true);
  return (
    <div className="border">
      <div className="flex justify-between text-[16px] bg-white items-center sm:w-[90%] w-full m-auto py-9 ">
        <span className="pl-[1rem] sm:p-0 flex justify-between sm:block sm:w-[initial] w-full">
          <img src={logo} alt="logo" />
          <span className="flex items-center">
            <DropdownNotification />
            <span
              className="block ml-2 sm:hidden"
              onClick={() => setShowNav(true)}
            >
              <svg
                width="32"
                height="32"
                viewBox="0 0 32 32"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M4 9.33331H28"
                  stroke="#292D32"
                  stroke-width="2"
                  stroke-linecap="round"
                />
                <path
                  d="M4 16H28"
                  stroke="#292D32"
                  stroke-width="2"
                  stroke-linecap="round"
                />
                <path
                  d="M4 22.6667H28"
                  stroke="#292D32"
                  stroke-width="2"
                  stroke-linecap="round"
                />
              </svg>
            </span>
          </span>
        </span>
        <div className="hidden sm:flex">
          <div className="text-[#6F00FF] px-6 font-bold hidden sm:flex">
            <svg
              width="25"
              height="24"
              viewBox="0 0 25 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M21.7696 8.01002L15.2196 2.77002C13.9396 1.75002 11.9396 1.74002 10.6696 2.76002L4.11963 8.01002C3.17963 8.76002 2.60963 10.26 2.80963 11.44L4.06963 18.98C4.35963 20.67 5.92963 22 7.63963 22H18.2396C19.9296 22 21.5296 20.64 21.8196 18.97L23.0796 11.43C23.2596 10.26 22.6896 8.76002 21.7696 8.01002ZM13.6896 18C13.6896 18.41 13.3496 18.75 12.9396 18.75C12.5296 18.75 12.1896 18.41 12.1896 18V15C12.1896 14.59 12.5296 14.25 12.9396 14.25C13.3496 14.25 13.6896 14.59 13.6896 15V18Z"
                fill="#873BFF"
              />
            </svg>
            <span className="ml-1 cursor-pointer">Dashboard</span>
          </div>
          <span className="px-6 cursor-pointer">Pay</span>
          <span className="px-6 cursor-pointer">Finance</span>
          <span className="px-6 cursor-pointer">Flex</span>
        </div>
        <div className="flex items-center">
          <div className="hidden sm:flex">
            <DropdownNotification />
          </div>
          <div className="flex items-center ml-5">
            <div className="w-[34px] h-[34px] rounded-[50%] border border-[rgba(234, 236, 240, 1)] mr-2 hidden sm:flex"></div>
            <div className="hidden sm:flex">
              <Dropdown2 />
            </div>
          </div>
        </div>
      </div>
      <DashboardNav showNav={showNav} setShowNav={setShowNav} />
    </div>
  );
};
export default Nav;
