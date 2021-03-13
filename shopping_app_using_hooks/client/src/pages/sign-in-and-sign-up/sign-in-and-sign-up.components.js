import React from "react";
import './sign-in-and-sign-up.style.scss'
import SignIn from '../../compoments/sign-in/sign-in.component'
import SignUp from "../../compoments/sign-up/sign-up.component";

const SignInAndSignUpPage = () => {
    return (
        <div className="sign-in-and-sign-up">
            <SignIn/>
            <SignUp />
        </div>
    )
}

export default SignInAndSignUpPage