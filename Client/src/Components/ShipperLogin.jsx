import React from "react";

const ShipperLogin = () => {
  return (
    <div>
      <div className="shipperForm_container">
        <form>
          <h3>Shipper LogIn</h3>
          <input type="email" name="email" placeholder="Email" />
          <input type="password" name="password" placeholder="Password" />
          <button>Sign In</button>
        </form>
      </div>
    </div>
  );
};

export default ShipperLogin;
