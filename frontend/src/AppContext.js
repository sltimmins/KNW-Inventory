import React, { useState } from "react";
import axios from "axios";

export const AppContext = React.createContext("app");

export function useProvideAppContext() {
    // ENTER YOUR EC2 PUBLIC IP/URL HERE
    const ec2_url = "";
    // CHANGE THIS TO TRUE IF HOSTING ON EC2, MAKE SURE TO ADD IP/URL ABOVE
    const ec2 = false;
    // USE localhost OR ec2_url ACCORDING TO ENVIRONMENT
    const baseURL = ec2 ? ec2_url : "http://localhost:8000";

    const [setup, setSetup] = useState(false);


    return {
        baseURL,

        setup,
        setSetup
    }
}

export function setupLogin(context) {
    context.setSetup(true);
}