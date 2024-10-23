import { useRef, useState } from "react";

const SignUp = (props) => {
  const businessNameRef = useRef("");
  const firstNameRef = useRef("");
  const lastNameRef = useRef("");
  const emailRef = useRef("");
  const dotNumberRef = useRef("");
  const passwordRef = useRef("");
  const [errorMsg, setErrorMsg] = useState("");

  console.log(props.updateToken);

  const handleRefInput = () => {
    passwordRef.current.focus();
  };
  const handleFetch = async () => {
    try {
      const response = await fetch("http://localhost:5173/", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          businessName: businessNameRef.current.value,
          firstNameRef: firstNameRef.current.value,
          lastNameRef: lastNameRef.current.value,
          emailRef: emailRef.current.value,
          dotNumberRef: dotNumberRef.current.value,
          passwordRef: passwordRef.current.value,
        }),
      });
      const jsonData = await response.json();
      console.log(jsonData);
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
