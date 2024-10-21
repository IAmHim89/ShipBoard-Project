import { useRef, useState } from "react";

const SignUp = () => {
  const [errorMsg, setErrorMsg] = useState("");
  const firstNameRef = useRef("");
  const businessNameRef = useRef("");
  const lastNameRef = useRef("");
  const emailRef = useRef("");
  const dotNumberRef = useRef("");
  const passwordRef = useRef("");
  return (
    <div>
      <div className="carrierSignUpForm_container">
        <form>
          <h3>Carrier Sign Up</h3>
          <input
            type="text"
            ref={businessNameRef}
            name="businessName"
            placeholder="BusinessName"
          />
          <input
            type="text"
            ref={firstNameRef}
            name="firstName"
            placeholder="FirstName"
          />
          <input
            type="text"
            ref={lastNameRef}
            name="lastName"
            placeholder="LastName"
          />
          <input
            type="text"
            ref={dotNumberRef}
            name="dotNumber"
            placeholder="DotNumber"
          />
          <input type="email" ref={emailRef} name="email" placeholder="Email" />
          <input
            type="password"
            ref={passwordRef}
            name="password"
            placeholder="Password"
          />
          <button>SignUp</button>
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
