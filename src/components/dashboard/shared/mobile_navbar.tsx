import React, { useState } from "react";
import SideNav from "react-simple-sidenav";
import logo from "../../assets/Tradevu Logo.svg";

const DashboardNav = () => {
  const [state, setState] = React.useState({
    NavisOpen: false,
    theUserIsLoggedIn: false,
    isloading: false,
    user_details: {},
  });
  const [showNav, setShowNav]: any = useState(false);

  const { NavisOpen }: any = state;
  
  return (
    <div className="fixfdnav">
      <div className="navwrap nav__wrap navwrap_cont">
        <div className="logoarea">
          <a href="/">
            <img src={logo} alt="logo" className="logo2" />
          </a>
        </div>
        {true && (
          <div className="otherwrap">
            <div className="otherwrap23">
            </div>
          </div>
        )}
        <SideNav
          showNav={showNav}
          style={{ background: showNav ? "rgba(251, 251, 251, 1)" : "none" }}
          navStyle={{ width: "70%", background: "rgba(251, 251, 251, 1)" }}
          onHideNav={() => setShowNav(false)}
          titleStyle={{
            backgroundColor: "#fff",
            color: "#444444",
            paddingLeft: 10,
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
                padding: "18px 10px 18px 17px",
              }}
            >
              <img src={logo} alt="logo" className="logo2" />
              <i className="fa fa-close" onClick={() => setShowNav(false)}></i>
            </div>,
          ]}
          items={[
            <div className="otherwrap mobileshow1">
              <div className="otherwrap23 otherwrap23admin">
                <div className="otherwrap23">
                </div>
              </div>
            </div>,
          ]}
        />
        {/* mobile nav ends here */}
        {true && (
          <div className="prrf">
           
          </div>
        )}
        <div
          className="mobileham"
          onClick={() => {
            setShowNav({
              NavisOpen: NavisOpen ? false : true,
            });
          }}
        >
          {!NavisOpen ? (
            <>
              <div className="ham1 animated slideInLeft"></div>
              <div className="ham2 animated slideInLeft"></div>
              <div className="ham3 animated slideInLeft"></div>
            </>
          ) : (
            <span className="nvtimes animated slideInLeft">&times;</span>
          )}
        </div>
      </div>
      {NavisOpen ? (
        <div className="ismobile animated slideInDown">
          
        </div>
      ) : (
        ""
      )}
    </div>
  );
};

export default DashboardNav;
