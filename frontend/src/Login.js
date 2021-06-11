import React, { useState } from "react";

export function Login(props) {
  const [values, setValues] = useState({ passcode: "" });

  const handleKeyDown = (event) => {
    if(event.key === 'Enter') {
      props.doLogin(values.passcode)
    }
  }

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setValues({ ...values, [name]: value });
  };

  return (
    <>
      <div className="col-12 mb-3 text-center">
        <h1>Enter Passcode</h1>
      </div>
      {props.banner}
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
                props.doLogin(values.passcode);
              }
            }
          }
        />
      </div>
      <div className="col-12 text-center">
        <button
          type="button"
          onClick={() => props.doLogin(values.passcode)}
          className="btn btn-primary mx-auto"
        >
          Submit
        </button>
      </div>
    </>
  );
}
