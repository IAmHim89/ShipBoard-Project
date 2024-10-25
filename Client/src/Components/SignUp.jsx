import { useRef, useState } from "react";
import { Link } from "react-router-dom";
import "../CssFiles/signUp.css";

const SignUp = (props) => {
  const [carrierSignUp, setCarrierSignUp] = useState(true);
  const [businessName, setBusinessName] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [dotNumber, setDotNumber] = useState("");
  const [password, setPassword] = useState("");
  const [errorMsg, setErrorMsg] = useState("");

  console.log(props.updateToken);

  const handleFetch = async () => {
    try {
      const response = await fetch(
        `${
          carrierSignUp
            ? "http://localhost:3001/carrier/signup"
            : "http://localhost:3001/shipper/signup"
        }`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(
            carrierSignUp
              ? {
                  businessName: businessName,
                  firstName: firstName,
                  lastName: lastName,
                  email: email,
                  dotNumber: dotNumber,
                  password: password,
                }
              : {
                  businessName: businessName,
                  firstName: firstName,
                  lastName: lastName,
                  email: email,
                  password: password,
                }
          ),
        }
      );
      const json = await response.json();
      console.log(json);

      if (json.Error) {
        throw new Error(json.Error);
      } else {
        props.updateToken(json.Token);
      }
    } catch (err) {
      setErrorMsg(err.message);
    }
  };
  return (
    <div>
      <div className="carrierSignUpForm_container">
        <form
          onSubmit={(e) => {
            e.preventDefault();
            handleFetch();
          }}
        >
          <h3>{carrierSignUp ? "Carrier" : "Shipper"}SignUp</h3>

          <input
            type="text"
            value={businessName}
            name="businessName"
            placeholder="BusinessName"
            onChange={(e) => setBusinessName(e.target.value)}
            required
          />
          <input
            type="text"
            value={firstName}
            name="firstName"
            placeholder="FirstName"
            onChange={(e) => setFirstName(e.target.value)}
            required
          />
          <input
            type="text"
            value={lastName}
            name="lastName"
            placeholder="LastName"
            onChange={(e) => setLastName(e.target.value)}
            required
          />
          {carrierSignUp && (
            <>
              <input
                type="text"
                value={dotNumber}
                name="dotNumber"
                placeholder="DotNumber"
                onChange={(e) => setDotNumber(e.target.value)}
                required
              />
            </>
          )}
          <input
            type="email"
            value={email}
            name="email"
            placeholder="Email"
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <input
            type="password"
            value={password}
            name="password"
            placeholder="Password"
            onChange={(e) => setPassword(e.target.value)}
            min={5}
            max={12}
            required
          />

          <button id="submit_btn" type="submit">
            SignUp
          </button>
          <button
            type="button"
            id="prev_btn"
            onClick={() => setCarrierSignUp((prev) => !prev)}
          >
            {carrierSignUp ? "Carrier" : "Shipper"}Form
          </button>
        </form>
      </div>
      <div className="backbtn_container">
        <Link to="/">
          <button>Back</button>
        </Link>
      </div>
    </div>
  );
};

export default SignUp;

{
  /* <div className="shipperSignUpForm_container">
  <form>
    <h3>Shipper Sign Up</h3>
    <input type="text" name="businessName" placeholder="Business Name" />
    <input type="text" name="firstName" placeholder="FirstName" />
    <input type="text" name="lastName" placeholder="LastName" />
    <input type="email" name="email" placeholder="Email" />
    <input type="password" name="password" placeholder="Password" />
    <button> SignUp</button>
  </form>
</div>  */
}
