import React from 'react'
import FormInput from '../form-input/form-input.component'
import CustomButton from '../../compoments/custom-button/custom-button.component'
import { auth, signInWithGoogle } from '../../firebase/firebase.utils'
import { googleSignInStart, emailSignInStart } from '../../redux/user/user.action';
import { connect } from 'react-redux';
import './sign-in.style.scss'

class SignIn extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            email: '',
            password: ''
        }
    }

    handleSubmit = async (event) => {
        event.preventDefault();
        const { email, password } = this.state;
        const { emailSignInStart } = this.props;
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

    handleChange = (event) => {
        const { value, name } = event.target;
        this.setState({
            [name]: value
        })
    }

    render() {
        const { email, password } = this.state;
        const { googleSignInStart } = this.props;
        return (
            <div className="sign-in">
                <h2>I already have an account</h2>
                <span>Sign in with your email and password</span>
                <form onSubmit={this.handleSubmit}>
                    <FormInput type="email" label='email' name='email' value={email}
                        handleChange={this.handleChange} required />

                    <FormInput type="password" label='password' name='password' value={password}
                        handleChange={this.handleChange}
                        required />
                    <div className="buttons">
                        <CustomButton type="submit">Sign In </CustomButton>
                        <CustomButton type='button' onClick={googleSignInStart} isGoogleSignIn>Sign In With Google </CustomButton>
                    </div>

                </form>
            </div>
        )
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        googleSignInStart: () => dispatch(googleSignInStart()),
        emailSignInStart: (email, password) => dispatch(emailSignInStart({ email, password }))
    }
}


export default connect(null, mapDispatchToProps)(SignIn)