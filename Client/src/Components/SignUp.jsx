import { useRef, useState } from "react";

const SignUp = (props) => {
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
      const response = await fetch("http://localhost:3001/carrier/signup", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          businessName: businessName,
          firstNameRef: firstName,
          lastNameRef: lastName,
          emailRef: email,
          dotNumberRef: dotNumber,
          passwordRef: password,
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
          <h3>Carrier Sign Up</h3>
          <input
            type="text"
            value={businessName}
            name="businessName"
            placeholder="BusinessName"
            onChange={(e) => setBusinessName(e.target.value)}
          />
          <input
            type="text"
            value={firstName}
            name="firstName"
            placeholder="FirstName"
            onChange={(e) => setFirstName(e.target.value)}
          />
          <input
            type="text"
            value={lastName}
            name="lastName"
            placeholder="LastName"
            onChange={(e) => setLastName(e.target.value)}
          />
          <input
            type="text"
            value={dotNumber}
            name="dotNumber"
            placeholder="DotNumber"
            onChange={(e) => setDotNumber(e.target.value)}
          />
          <input
            type="email"
            ref={emailRef}
            name="email"
            placeholder="Email"
            onChange={(e) => setEmail(e.target.value)}
          />
          <input
            type="password"
            value={password}
            name="password"
            placeholder="Password"
            onChange={(e) => setPassword(e.target.name)}
          />
          <button onClick={handleClick}>SignUp</button>
        </form>
      </div>

      <div className="shipperSignUpForm_container">
        <form>
          <h3>Shipper Sign Up</h3>
          <input type="text" name="businessName" placeholder="Business Name" />
          <input type="text" name="firstName" placeholder="FirstName" />
          <input type="text" name="lastName" placeholder="LastName" />
          <input type="email" name="email" placeholder="Email" />
          <input type="password" name="password" placeholder="Password" />
          <button>SignUp</button>
        </form>
      </div>
    </div>
  );
};

export default SignUp;
