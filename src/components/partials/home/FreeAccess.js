import { useState } from "react";

import axios from "axios";

const FreeAccess = () => {
  const [email, setEmail] = useState("");
  const [validEmail, setValidEmail] = useState(false);
  const handleEmailChange = (e) => {
    if (validateEmail(e.target.value)) {
      setValidEmail(true);
    } else setValidEmail(false);
    setEmail(e.target.value);
  };
  const handleSubmit = (e) => {
    console.log(validEmail);
    console.log(email);
    e.preventDefault();
    axios
      .post("/api/user/audience_email", email)
      .then((res) => {
        setEmail("");
        return console.log(res.data);
      })
      .catch((err) => {
        return console.log(err.response.data);
      });
  };
  const validateEmail = (email) => {
    return String(email)
      .toLowerCase()
      .match(
        /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
      );
  };
  return (
    <>
      <h2 className="col-12 freeaccess_header" id="earlyAccess">
        Ready to get going? Get free access to the Beta version today!
      </h2>
      <p className="freeaccess_content">
        You've done your research and know what you want out of Crush, now it's
        time to start. Get access to our free Beta Version today!
      </p>
      <div className="freeaccess_form">
        <input
          type="email"
          name="email"
          placeholder="Enter Email"
          id="email"
          value={email}
          onChange={handleEmailChange}
          className="freeaccess_form_input"
        />
        <input
          type="button"
          value="Get Early Free Access"
          className="freeaccess_form_button"
          onClick={handleSubmit}
        />
      </div>
    </>
  );
};

export default FreeAccess;
