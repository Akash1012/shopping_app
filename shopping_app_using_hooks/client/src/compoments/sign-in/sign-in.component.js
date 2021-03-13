import React, { useState } from 'react'
import FormInput from '../form-input/form-input.component'
import CustomButton from '../../compoments/custom-button/custom-button.component'
import { auth, signInWithGoogle } from '../../firebase/firebase.utils'
import { googleSignInStart, emailSignInStart } from '../../redux/user/user.action';
import { connect } from 'react-redux';
import './sign-in.style.scss'

const SignIn = (props) => {


    const [userCredentials, setCredentials] = useState({ email: '', password: '' })

    // constructor(props) {
    //     super(props);
    //     this.state = {
    //         email: '',
    //         password: ''
    //     }
    // }

    const { email, password } = userCredentials;

    const handleSubmit = async (event) => {
        event.preventDefault();
        // const { email, password } = this.state;
        // const { email, password } = userCredentials;
        const { emailSignInStart } = props;
        emailSignInStart(email, password);


        // try {
        //     await auth.signInWithEmailAndPassword(
        //         email, password
        //     );
        //     this.setState({ // clearing the Input Text Field
        //         email: '',
        //         password: ''
        //     })
        // } catch (error) {
        //     console.log(error);
        // }

    }

    const handleChange = (event) => {
        const { value, name } = event.target;
        setCredentials({ ...userCredentials, [name]: value })
        // this.setState({
        //     [name]: value
        // })
    }

    // const { email, password } = this.state;
    const { googleSignInStart } = props;
    return (
        <div className="sign-in">
            <h2>I already have an account</h2>
            <span>Sign in with your email and password</span>
            <form onSubmit={handleSubmit}>
                <FormInput type="email" label='email' name='email' value={email}
                    handleChange={handleChange} required />

                <FormInput type="password" label='password' name='password' value={password}
                    handleChange={handleChange}
                    required />
                <div className="buttons">
                    <CustomButton type="submit">Sign In </CustomButton>
                    <CustomButton type='button' onClick={googleSignInStart} isGoogleSignIn>Sign In With Google </CustomButton>
                </div>

            </form>
        </div>
    )
}

const mapDispatchToProps = (dispatch) => {
    return {
        googleSignInStart: () => dispatch(googleSignInStart()),
        emailSignInStart: (email, password) => dispatch(emailSignInStart({ email, password }))
    }
}


export default connect(null, mapDispatchToProps)(SignIn)