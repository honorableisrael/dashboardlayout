import React, { useRef, useState } from "react";
import { CSSTransition } from "react-transition-group";

function Dropdown() {
  const [isOpen, setIsOpen] = useState(false);
  const nodeRef = useRef(null);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div>
      <button
        onClick={toggleDropdown}
        className="ml-2 w-[153px] h-[40px]  rounded-[8px] border-none text-[#5E01D6] bg-[#5E01D6] text-[#fff] flex items-center px-5 rounded-[6px] font-medium"
      >
        <svg
          width="20"
          height="20"
          viewBox="0 0 20 20"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M15 10.625H5C4.65833 10.625 4.375 10.3417 4.375 10C4.375 9.65833 4.65833 9.375 5 9.375H15C15.3417 9.375 15.625 9.65833 15.625 10C15.625 10.3417 15.3417 10.625 15 10.625Z"
            fill="#D9CDFF"
          />
          <path
            d="M10 15.625C9.65833 15.625 9.375 15.3417 9.375 15V5C9.375 4.65833 9.65833 4.375 10 4.375C10.3417 4.375 10.625 4.65833 10.625 5V15C10.625 15.3417 10.3417 15.625 10 15.625Z"
            fill="#D9CDFF"
          />
        </svg>
        <span className="ml-2">Create new</span>
      </button>
      <CSSTransition
        in={isOpen}
        nodeRef={nodeRef}
        classNames="alert"
        unmountOnExit
        timeout={{
          appear: 500,
          enter: 300,
          exit: 500,
        }}
      >
        <>
          {isOpen && (
            <div
              ref={nodeRef}
              id="dropdown"
              className="absolute z-10 mt-2 bg-white divide-y divide-gray-100 rounded-lg shadow w-44 right-[3rem]"
            >
              <ul
                className="py-2 text-sm text-[#101828]"
                aria-labelledby="dropdownDefaultButton"
              >
                <li className="">
                  <a href="#" className="flex items-center block px-4 py-2 ">
                    <span className="mr-3">
                      <svg
                        width="16"
                        height="16"
                        viewBox="0 0 16 16"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M1.33334 8.65337V10C1.33334 13.3334 2.66668 14.6667 6.00001 14.6667H10C13.3333 14.6667 14.6667 13.3334 14.6667 10V6.00004C14.6667 2.66671 13.3333 1.33337 10 1.33337H6.00001C2.66668 1.33337 1.33334 2.66671 1.33334 6.00004"
                          stroke="#667085"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        />
                        <path
                          d="M10.5 6H5.5"
                          stroke="#667085"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        />
                        <path
                          d="M10.5 10H5.5"
                          stroke="#667085"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        />
                      </svg>
                    </span>{" "}
                    New invoice
                  </a>
                </li>
                <hr className="px-2" />
                <li className="">
                  <a href="#" className="flex items-center block px-4 py-2 ">
                    <span className="mr-3">
                      <svg
                        width="18"
                        height="18"
                        viewBox="0 0 18 18"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M2.3775 5.58002L8.99999 9.41251L15.5775 5.60249"
                          stroke="#667085"
                          stroke-width="1.125"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        />
                        <path
                          d="M9 16.2075V9.40497"
                          stroke="#667085"
                          stroke-width="1.125"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        />
                        <path
                          d="M1.79251 6.87749C1.79251 5.84249 2.535 4.58251 3.4425 4.08001L7.44749 1.85248C8.30249 1.37998 9.70499 1.37998 10.56 1.85248L14.565 4.08001C15.4725 4.58251 16.215 5.84249 16.215 6.87749V11.115C16.215 12.15 15.4725 13.41 14.565 13.9125L10.56 16.14C9.70499 16.6125 8.30249 16.6125 7.44749 16.14L3.4425 13.9125C2.535 13.41 1.79251 12.15 1.79251 11.115V10.5"
                          stroke="#667085"
                          stroke-width="1.125"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        />
                        <path
                          d="M12.75 9.92996V7.18498L8.19749 4.55247L7.41 4.10245L5.63251 3.07495"
                          stroke="#667085"
                          stroke-width="1.125"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        />
                      </svg>
                    </span>{" "}
                    New order
                  </a>
                </li>
                <hr className="px-2" />
                <li className="">
                  <a href="#" className="flex items-center block px-4 py-2 ">
                    <span className="mr-3">
                      <svg
                        width="18"
                        height="18"
                        viewBox="0 0 18 18"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M3.83248 15.345C2.95498 14.6175 2.35499 13.59 2.08499 12.39L1.77749 10.995C1.62749 10.3125 2.03248 9.54001 2.68498 9.27751L3.74999 8.85L7.8825 7.19251C8.6025 6.90751 9.39748 6.90751 10.1175 7.19251L14.25 8.85L15.315 9.27751C15.9675 9.54001 16.3725 10.3125 16.2225 10.995L15.915 12.39C15.3825 14.79 13.5 16.5 10.785 16.5H7.21499"
                          stroke="#667085"
                          stroke-width="1.125"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        />
                        <path
                          d="M9 16.5V7.5"
                          stroke="#667085"
                          stroke-width="1.125"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        />
                        <path
                          d="M14.25 6V8.84999L10.1175 7.1925C9.39749 6.9075 8.60251 6.9075 7.88251 7.1925L3.75 8.84999V6C3.75 4.7625 4.7625 3.75 6 3.75H12C13.2375 3.75 14.25 4.7625 14.25 6Z"
                          stroke="#667085"
                          stroke-width="1.125"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        />
                        <path
                          d="M10.875 3.75H7.125V2.25C7.125 1.8375 7.4625 1.5 7.875 1.5H10.125C10.5375 1.5 10.875 1.8375 10.875 2.25V3.75Z"
                          stroke="#667085"
                          stroke-width="1.125"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        />
                      </svg>
                    </span>{" "}
                    New shipment
                  </a>
                </li>
              </ul>
            </div>
          )}
        </>
      </CSSTransition>
    </div>
  );
}

export default Dropdown;
