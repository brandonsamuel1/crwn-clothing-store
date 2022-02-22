import React from "react";

import Signin from "../../components/signin/signin.component";
import SignUp from "../../components/sign-up/sign-up.component";

import './sign-in-and-sign-up.styles.scss'

const SigninSignup = () => {
    return (
        <div className="sign-in-and-sign-up">
            <Signin />
            <SignUp />
        </div>
    )
}

export default SigninSignup;