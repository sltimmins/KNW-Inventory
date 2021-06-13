import React, { useState } from "react";
import "./App.css";
import { Login } from "./Login.js";

import {
  useHistory,
} from 'react-router-dom'

// React functional component
export function Users({ setToken }) {
  const [bannerMessage, setBanner] = useState("");

  let history = useHistory();
  const redirectToHome = () => {
    let { from } = { from: { pathname: "/inventory" } };
    history.replace(from);
  }

  const doLogin = async (passcode) => {
    //Clear banner so they know its different
    setBanner("");

    if(passcode === "68782647")
    {
      setToken(true);
      redirectToHome();
    } else {
      setBanner("Incorrect passcode");
    }
  };

  let banner = <></>;
  if (bannerMessage !== "") {
    banner = (
      <div className="alert alert-primary" role="alert">
        {bannerMessage}
      </div>
    );
  }

  // let form = (
  //   <Login
  //     banner={banner}
  //     doLogin={doLogin}
  //   />
  // );

  // return (
  //   <div className="container h-100">
  //     <div className="h-100 row justify-content-center align-items-center">
  //       <form className="col-4">{form}</form>
  //     </div>
  //   </div>
  // );

  const [values, setValues] = useState({ passcode: "" });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setValues({ ...values, [name]: value });
  };

  return (
    <>
      <div className="col-12 mb-3 text-center">
        <h1>Enter Passcode</h1>
      </div>
      {banner}
      <div className="form-group mb-3">
        <input
          name="passcode"
          onChange={handleInputChange}
          value={values.passcode}
          type="text"
          className="form-control"
          id="passcode"
          onKeyDown={(e) => {
              if(e.key === 'Enter') {
                e.preventDefault();
                doLogin(values.passcode);
              }
            }
          }
        />
      </div>
      <div className="col-12 text-center">
        <button
          type="button"
          onClick={() => doLogin(values.passcode)}
          className="btn btn-primary mx-auto"
        >
          Submit
        </button>
      </div>
    </>
  );
}
