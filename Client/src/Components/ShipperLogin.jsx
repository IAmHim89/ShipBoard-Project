import { useState, useRef } from "react";
import "../CssFiles/shipperLogin.css";

const ShipperLogin = (props) => {
  const [errMsg, setErrMsg] = useState("");
  const emailRef = useRef("");
  const passwordRef = useRef("");

  const handleClick = () => {
    passwordRef.current.focus();
  };
  console.log(props.updateToken);
  const handleFetch = async () => {
    try {
      setErrMsg("");
      const response = await fetch("http://localhost:3001/shipper/signin", {
        method: "POST",
        headers: {
          "Content-type": "application/json",
        },
        body: JSON.stringify({
          email: emailRef.current.value,
          password: passwordRef.current.value,
        }),
      });
      const json = await response.json();
      console.log(json);
      if (json.Error) {
        throw new Error(json.Error);
      } else {
        props.updateToken(json.Token);
      }
    } catch (err) {
      setErrMsg(err.message);
    }
  };

  return (
    <div>
      <div className="shipperForm_container">
        <form
          onSubmit={(e) => {
            e.preventDefault();
            handleFetch();
          }}
        >
          <h3>Shipper LogIn</h3>
          <input
            ref={emailRef}
            type="email"
            name="email"
            placeholder="Email"
            required
          />
          <input
            ref={passwordRef}
            type="password"
            name="password"
            placeholder="Password"
            required
          />
          <button onClick={() => handleClick()}>Sign In</button>
        </form>
      </div>
    </div>
  );
};

export default ShipperLogin;
