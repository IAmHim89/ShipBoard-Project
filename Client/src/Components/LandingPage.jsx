import React from "react";
import { Link } from "react-router-dom";
import "../CssFiles/LandingPage.css";
import Logo from "../assets/Images/sblogo.png";
const LandingPage = () => {
  return (
    <div>
      <div className="nav_wrapper">
        <nav>
          <ul>
            <div className="button_flex">
              <li>
                <img src={Logo} />
              </li>
             
              <li>
                <Link to="shipperlogin">
                  <button id="shipper_btn">ShipperLogin</button>
                </Link>
              </li>
            </div>
          </ul>
        </nav>
      </div>
      <header>
        <div className="header_container">
          <h1>Welcome To ShipBoard</h1>
        </div>
      </header>
      <main>
        <div className="buttonSignUp_container">
          <Link to="/signup">
            <button>SignUp</button>
          </Link>
        </div>
      </main>
    </div>
  );
};

export default LandingPage;


 {/* <li>
                <Link to="carrierlogin">
                  <button id="carrier_btn">CarrierLogin</button>
                </Link>
              </li> */}