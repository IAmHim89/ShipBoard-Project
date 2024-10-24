import { useState, useEffect, useRef } from "react";
import "../CssFiles/carrierSign.css";

const CarrierLogin = (props) => {
  const [errMsg, setErrMsg] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  console.log(props.updateToken);

  const handleFetch = async () => {
    try {
      setErrMsg("");
      const response = await fetch("http://localhost:3001/carrier/signin", {
        method: POST,
        headers: {
          "Content-type": "application/json",
        },
        body: JSON.stringify({
          email: email,
          password: password,
        }),
      });
      const signInData = await response.json();
      console.log(signInData);
    } catch (err) {
      setErrMsg(err.message);
    }
  };

  return (
    <div>
      <div className="carrierForm_container">
        <form
          onSubmit={(e) => {
            e.preventDefault();
            handleFetch();
          }}
        >
          <h3>Carrier LogIn</h3>
          <input
            value={email}
            type="email"
            name="email"
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Email"
            required
          />
          <input
            value={password}
            type="password"
            name="password"
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Password"
          />
          <button type="submit">Sign In</button>
        </form>
      </div>
    </div>
  );
};

export default CarrierLogin;
