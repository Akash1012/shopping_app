import UserActionTypes from './user.type'

export const setCurrentUser = (user) => {
    return {
        type: UserActionTypes.SET_CURRENT_USER,
        payload: user
    }
}

export const googleSignInStart = () => {
    return {
        type: UserActionTypes.GOOGLE_SIGN_IN_START
    }
}

export const SignInSuccess = (user) => {
    return {
        type: UserActionTypes.SIGN_IN_SUCCESS,
        payload: user
    }
}

export const SignInFailure = (error) => {
    return {
        type: UserActionTypes.SIGN_IN_FAILURE,
        payload: error
    }
}

export const emailSignInStart = (emailAndPassword) => {
    return {
        type: UserActionTypes.EMAIL_SIGN_IN_START,
        payload: emailAndPassword
    }
}

export const checkUserSession = () => {
    console.log("Action firing broo..");
    return {
        type: UserActionTypes.CHECK_USER_SESSION
    }
}


export const signOutStart = () => {
    return {
        type: UserActionTypes.SIGN_OUT_START
    }
}


export const signOutSuccess = () => {
    return {
        type: UserActionTypes.SIGN_OUT_SUCCESS
    }
}

export const signOutFailure = (error) => {
    return {
        type: UserActionTypes.SIGN_OUT_FAILURE,
        payload: error
    }
}

export const signUpStart = userCredentials => {
    return {
        type: UserActionTypes.SIGN_UP_START,
        payload: userCredentials
    }
}

export const signUpSuccess = ({ user, addtionalData }) => {
    return {
        type: UserActionTypes.SIGN_UP_SUCCESS,
        payload: { user, addtionalData }
    }
}


// export const signUpSuccess = (userCredentials) => {
//     console.log("userCredentials", userCredentials)
//     return {
//         type: UserActionTypes.SIGN_UP_SUCCESS,
//         payload: userCredentials
//     }
// }


export const signUpFailure = error => {
    return {
        type: UserActionTypes.SIGN_UP_FAILURE,
        payload: error
    }
}