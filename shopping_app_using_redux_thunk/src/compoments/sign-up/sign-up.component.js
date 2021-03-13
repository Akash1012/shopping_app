import React from 'react'

import './sign-up.style.scss';
import CustomButton from "../custom-button/custom-button.component";
import { auth, createUserProfileDocument, } from "../../firebase/firebase.utils";
import FormInput from "../form-input/form-input.component";
import { connect } from 'react-redux';
import { signUpStart } from '../../redux/user/user.action'

class SignUp extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            displayName: '',
            email: '',
            password: '',
            confirmPassword: ''
        }
    }

    handleSubmit = async (event) => {
        event.preventDefault();
        const { signUpStart } = this.props
        const { displayName, email, password, confirmPassword } = this.state;
        if (password !== confirmPassword) {
            alert("Password don't match");
            return;
        }

        // signUpStart({ displayName, email, password })

        try {
            const { user } = await auth.createUserWithEmailAndPassword(email, password); // getting email
            console.log("Users", user);
            await createUserProfileDocument(user, { displayName: displayName });
            this.setState({
                displayName: '',
                email: '',
                password: '',
                confirmPassword: ''
            })
        } catch (error) {
            console.error(error)
        }
    }

    handleChange = (event) => {
        const { value, name } = event.target;
        this.setState({
            [name]: value,
            [name]: value
        })
    }

    render() {
        const { displayName, email, password, confirmPassword } = this.state;
        return (
            <div className="sign-up">
                <h2 className="title">
                    I do not have a account
                </h2>
                <span>
                    Sign up with your email and password
                </span>

                <form onSubmit={this.handleSubmit} className='sign-up-form'>
                    <FormInput type="text" label='Display Name' name='displayName' value={displayName}
                        handleChange={this.handleChange} required />

                    <FormInput type="email" label='Email' name='email' value={email}
                        handleChange={this.handleChange} required />

                    <FormInput type="password" label='Password' name='password' value={password}
                        handleChange={this.handleChange} required />

                    <FormInput type="password" label='Confirm Password' name='confirmPassword' value={confirmPassword}
                        handleChange={this.handleChange} required />

                    <CustomButton type="submit">Sign Up </CustomButton>

                </form>
            </div>
        )
    }
}


const mapStateToDispatch = (dispatch) => {
    return {
        signUpStart: (userCredentials) => dispatch(signUpStart(userCredentials))
    }
}

export default connect(null, mapStateToDispatch)(SignUp);