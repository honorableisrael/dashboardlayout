import React, { useState } from "react";

function Dropdown2() {
  const [isOpen, setIsOpen] = useState(false);
  const [isOpen2, setIsOpen2] = useState(false);
  const [addBusiness, setAddBusiness] = useState(false);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };
  const toggleDropdown2 = () => {
    setIsOpen2(!isOpen2);
    setAddBusiness(false)
  };
  const SubBusinessDropdown = () => {
    if (!isOpen2) {
      return null;
    }
    return (
      <div
        id="dropdown1"
        className="absolute mt-2 bg-white  divide-y  rounded-[8px] divide-gray-100 rounded-lg shadow z-15 w-44 right-[5rem] sm:right-[15.8rem]"
      >
        <ul
          className="py-2 text-sm text-[#101828] rounded-[8px] w-[253px] bg-white"
          aria-labelledby="dropdownDefaultButton"
        >
          <li className="flex justify-center py-2">
            <svg
              width="34"
              height="34"
              viewBox="0 0 34 34"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <rect
                x="0.425"
                y="0.425"
                width="33.15"
                height="33.15"
                rx="16.575"
                stroke="#D9CDFF"
                stroke-width="0.85"
              />
            </svg>
            <div className="pl-4 w-[143px]">
              Vance Refrigeration
              <div className="text-[#11A811] text-[12px]">Logged in</div>
            </div>
          </li>
          {
            addBusiness &&
            <>
              <hr />
              <li className="flex items-center justify-center py-2">
                <svg
                  width="34"
                  height="34"
                  viewBox="0 0 34 34"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <rect
                    x="0.425"
                    y="0.425"
                    width="33.15"
                    height="33.15"
                    rx="16.575"
                    stroke="#D9CDFF"
                    stroke-width="0.85"
                  />
                </svg>
                <div className="pl-4 w-[143px]">Dunder Mifflin Co.</div>
              </li>
              <hr />
              <li className="flex items-center justify-center py-2">
                <svg
                  width="34"
                  height="34"
                  viewBox="0 0 34 34"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <rect
                    x="0.425"
                    y="0.425"
                    width="33.15"
                    height="33.15"
                    rx="16.575"
                    stroke="#D9CDFF"
                    stroke-width="0.85"
                  />
                </svg>
                <div className="pl-4 w-[143px]">Dunder Mifflin Co.</div>
              </li>
            </>
          }
          <hr />
          <li className="p-4">
            <button className="w-full h-[40px] border border-[#D9CDFF] text-[#5E01D6] bg-[#fff] flex justify-center items-center px-5 rounded-[6px] font-medium">
              <svg
                width="20"
                height="20"
                viewBox="0 0 20 20"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M15 10.625H5C4.65833 10.625 4.375 10.3417 4.375 10C4.375 9.65833 4.65833 9.375 5 9.375H15C15.3417 9.375 15.625 9.65833 15.625 10C15.625 10.3417 15.3417 10.625 15 10.625Z"
                  fill="#5E01D6"
                />
                <path
                  d="M10 15.625C9.65833 15.625 9.375 15.3417 9.375 15V5C9.375 4.65833 9.65833 4.375 10 4.375C10.3417 4.375 10.625 4.65833 10.625 5V15C10.625 15.3417 10.3417 15.625 10 15.625Z"
                  fill="#5E01D6"
                />
              </svg>
              <span className="flex ml-2 min-w-[fit-content]" onClick={()=>{
                setAddBusiness(true)
              }}>
                Add business
              </span>
            </button>
          </li>
        </ul>
      </div>
    );
  };
  return (
    <div className="rounded-[8px]">
      <span
        className="flex items-center cursor-pointer"
        onClick={toggleDropdown}
      >
        <span className="mx-2">Vance Refrigeration</span>
        <svg
          width="16"
          height="16"
          viewBox="0 0 16 16"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M13.28 5.96667L8.93333 10.3133C8.42 10.8267 7.58 10.8267 7.06667 10.3133L2.72 5.96667"
            stroke="#292D32"
            stroke-miterlimit="10"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
        </svg>
      </span>
      {isOpen && (
        <div
          id="dropdown"
          className="absolute z-10 mt-2 border border-[#E7E9FB] bg-white divide-y rounded-[10px] divide-gray-100 rounded-lg shadow w-44"
        >
          <ul
            className="py-2 text-sm text-[#101828] w-[233px] bg-white"
            aria-labelledby="dropdownDefaultButton"
          >
            <li>
              <div className="p-3 cursor-pointer">
                <div className="bg-[#F2F4F7] flex items-center justify-between p-3 rounded-[5px]">
                  <div className="" onClick={toggleDropdown2}>
                    <div className="text-[#101828]"> Switch account</div>
                    <div className="text-[12px] text-[#667085]">
                      {" "}
                      Access your other businesses
                    </div>
                  </div>
                  <svg
                    width="10"
                    height="6"
                    viewBox="0 0 10 6"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M8.94667 0.453369H4.79333H1.05333C0.413333 0.453369 0.0933335 1.2267 0.546667 1.68004L4 5.13337C4.55333 5.6867 5.45333 5.6867 6.00667 5.13337L7.32 3.82004L9.46 1.68004C9.90667 1.2267 9.58667 0.453369 8.94667 0.453369Z"
                      fill="#292D32"
                    />
                  </svg>
                </div>
              </div>
              {<SubBusinessDropdown />}
            </li>
            <li className="">
              <a href="#" className="flex items-center block px-4 py-4 pt-1">
                <span className="mr-3">
                  <svg
                    width="18"
                    height="18"
                    viewBox="0 0 18 18"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      opacity="0.4"
                      d="M9 9C11.0711 9 12.75 7.32107 12.75 5.25C12.75 3.17893 11.0711 1.5 9 1.5C6.92893 1.5 5.25 3.17893 5.25 5.25C5.25 7.32107 6.92893 9 9 9Z"
                      fill="#98A2B3"
                    />
                    <path
                      d="M2.5575 16.5C2.5575 13.6665 5.3787 11.25 9 11.25C12.6213 11.25 15.4425 13.6665 15.4425 16.5H2.5575Z"
                      fill="#98A2B3"
                      stroke="#98A2B3"
                      stroke-width="0.75"
                    />
                  </svg>
                </span>{" "}
                Manage account
              </a>
            </li>
            <hr />
            <li className="">
              <a href="#" className="flex items-center block px-4 py-4 ">
                <span className="mr-3">
                  <svg
                    width="18"
                    height="18"
                    viewBox="0 0 18 18"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      opacity="0.4"
                      d="M6.75 5.4V12.5925C6.75 15 8.25 16.5 10.65 16.5H12.5925C14.9925 16.5 16.4925 15 16.4925 12.6V5.4C16.5 3 15 1.5 12.6 1.5H10.65C8.25 1.5 6.75 3 6.75 5.4Z"
                      fill="#98A2B3"
                    />
                    <path
                      d="M4.1775 6.09001L1.665 8.60251C1.4475 8.82001 1.4475 9.18001 1.665 9.39751L4.1775 11.91C4.395 12.1275 4.755 12.1275 4.9725 11.91C5.19 11.6925 5.19 11.3325 4.9725 11.115L3.42 9.56251H11.4375C11.745 9.56251 12 9.30751 12 9.00001C12 8.69251 11.745 8.43751 11.4375 8.43751H3.42L4.9725 6.88501C5.085 6.77251 5.1375 6.63001 5.1375 6.48751C5.1375 6.34501 5.085 6.19501 4.9725 6.09001C4.755 5.86501 4.4025 5.86501 4.1775 6.09001Z"
                      fill="#98A2B3"
                    />
                  </svg>
                </span>{" "}
                Logout
              </a>
            </li>
          </ul>
        </div>
      )}
    </div>
  );
}

export default Dropdown2;
