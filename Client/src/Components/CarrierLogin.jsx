import { useState, useEffect, useRef } from "react";

const CarrierLogin = () => {
  return (
    <div>
      <div className="carrierForm_container">
        <form>
          <h3>Carrier LogIn</h3>
          <input type="email" name="email" placeholder="Email" />
          <input type="password" name="password" placeholder="Password" />
          <button>Sign In</button>
        </form>
      </div>
    </div>
  );
};

export default CarrierLogin;
