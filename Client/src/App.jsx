import "./App.css";
import { useState, useEffect } from "react";
import LandingPage from "./Components/LandingPage";
import CarrierLogin from "./Components/CarrierLogin";
import ShipperLogin from "./Components/ShipperLogin";
import SignUp from "./Components/SignUp";
import { Routes, Route } from "react-router-dom";

function App() {
  const [personalToken, setPersonalToken] = useState("");
  useEffect(() => {
    let token = localStorage.getItem("myToken");
    if (token) {
      setPersonalToken(token);
    }
  }, []);

  uploadImg = () => {
    console.log("you have succesfully updated your token!");
    localStorage.setItem("myToken");
    setPersonalToken(token);
  };

  return (
    <div>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/carrierlogin" element={<CarrierLogin />} />
        <Route path="/shipperlogin" element={<ShipperLogin />} />
        <Route path="/signup" element={<SignUp />} />
      </Routes>
    </div>
  );
}

export default App;
