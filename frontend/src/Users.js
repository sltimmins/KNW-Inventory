import React, { useContext, useState } from "react";
import "./App.css";
import { Login } from "./Login.js";
import { AppContext } from "./AppContext.js";

import {
  useHistory,
  useLocation
} from 'react-router-dom'

import axios from "axios";

// React functional component
export function Users() {
  const [registerMode, setRegister] = useState(false);
  const [bannerMessage, setBanner] = useState("");

  const { baseURL, setUser, setJWT } = useContext(AppContext);

  const toggleRegisterMode = () => {
    setBanner("");
    setRegister(!registerMode);
  };

  let history = useHistory();
  let location = useLocation();
  const redirectToHome = () => {
    let { from } = { from: { pathname: "/listings" } };
    history.replace(from);
  }

  const doLogin = async (passcode) => {
    //Clear banner so they know its different
    setBanner("");

    if(passcode == "68782647")
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
      toggleRegisterMode={toggleRegisterMode}
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
