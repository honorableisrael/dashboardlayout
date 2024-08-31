import React, { useState } from "react";
import SideNav from "react-simple-sidenav";
import logo from "../../../assets/Tradevu Logo.svg";
import Dropdown2 from "../dropdown2";

interface DashboardNavProps {
  showNav: boolean;
  setShowNav: React.Dispatch<React.SetStateAction<boolean>>;
}

const DashboardNav = ({ showNav, setShowNav }: DashboardNavProps) => {
  const [state, setState] = React.useState({
    NavisOpen: false,
    theUserIsLoggedIn: false,
    isloading: false,
    user_details: {},
  });

  return (
    <div className="fixfdnav">
      <div className="navwrap nav__wrap navwrap_cont">
        {true && (
          <div className="otherwrap">
            <div className="otherwrap23"></div>
          </div>
        )}
        <SideNav
          showNav={showNav}
          style={{ background: showNav ? "rgba(251, 251, 251, 1)" : "none",zIndex:'2000' }}
          navStyle={{ width: "100%", background: "rgba(251, 251, 251, 1)",overflow:'scroll' }}
          onHideNav={() => setShowNav(false)}
          titleStyle={{
            backgroundColor: "#fff",
            color: "#444444",
            paddingLeft: 8,
            paddingRight: 0,
            marginLeft: 8,
            paddingBottom: 0,
            paddingTop: 0,
            fontSize: 17,
            textAlign: "left",
          }}
          itemHoverStyle={{
            backgroundColor: "rgba(251, 251, 251, 1) !important",
          }}
          itemStyle={{ backgroundColor: "" }}
          title={[
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                padding: "10px 3px 3px 0px",
              }}
            >
              <img src={logo} alt="logo" className="logo2" />
              <span className="fa fa-close" onClick={() => setShowNav(false)}>
                <svg
                  width="62"
                  height="62"
                  viewBox="0 0 62 62"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M23.4575 38.5425L38.5425 23.4575"
                    stroke="#292D32"
                    stroke-width="2.82843"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    d="M38.5425 38.5425L23.4575 23.4575"
                    stroke="#292D32"
                    stroke-width="2.82843"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </svg>
              </span>
            </div>,
          ]}
          items={[
            <div className="otherwrap mobileshow1">
              <div className="otherwrap23 otherwrap23admin">
                <div className="otherwrap23">
                  <div className="font-bold text-[16px]">
                    <div className="text-[#6F00FF] px-6 font-bold flex justify-end mb-8 mt-10">
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
                    <div className="px-6 mb-8 text-right cursor-pointer">
                      Pay
                    </div>
                    <div className="px-6 mb-8 text-right cursor-pointer">
                      Finance
                    </div>
                    <div className="px-6 mb-8 text-right cursor-pointer">
                      Flex
                    </div>
                    <div className="flex items-center justify-end mt-8">
                      <div className="w-[34px] h-[34px] rounded-[50%] border border-[rgba(234, 236, 240, 1)] mr-2 sm:flex"></div>{" "}
                      <Dropdown2 />
                    </div>
                  </div>
                </div>
              </div>
            </div>,
          ]}
        />
      </div>
    </div>
  );
};

export default DashboardNav;
