import React, { useState } from "react";
import "./App.css";
import { Login } from "./Login.js";

import {
  useHistory,
} from 'react-router-dom'

// React functional component
export function Users() {
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

  let form = (
    <Login
      banner={banner}
      doLogin={doLogin}
    />
  );

  return (
    <div className="container h-100">
      <div className="h-100 row justify-content-center align-items-center">
        <form className="col-4">{form}</form>
      </div>
    </div>
  );
}
