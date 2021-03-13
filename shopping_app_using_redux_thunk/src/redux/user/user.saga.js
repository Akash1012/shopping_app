import { takeLatest, put, all, call, take } from 'redux-saga/effects'
import UserActionTypes from './user.type';
import { SignInSuccess, SignInFailure, signOutSuccess, signOutFailure, signUpFailure, signUpSuccess } from './user.action';
import { auth, googleProvider, createUserProfileDocument, getCurrentUser } from '../../firebase/firebase.utils';


export function* getSnapshotFromUserAuth(userAuth, additionalData) {
    console.log("Calling bro ...");
    try {
        const userRef = yield call(createUserProfileDocument, userAuth, additionalData)
        const userSnapshot = yield userRef.get();
        yield put(SignInSuccess({
            id: userSnapshot.id,
            ...userSnapshot.data()
        }))
    } catch (error) {
        yield put(SignInFailure(error))
    }
}

export function* signInWithGoogle() {
    try {
        const { user } = yield auth.signInWithPopup(googleProvider);
        yield call(getSnapshotFromUserAuth, user); // or yield getSnapshotFromUserAuth(user);
    } catch (error) {
        yield put(SignInFailure(error))
    }
}

export function* signInWithEmail({ payload: { email, password } }) {
    // const { email, password } = payload.payload
    try {
        const { user } = yield auth.signInWithEmailAndPassword(email, password);
        yield getSnapshotFromUserAuth(user); //recommened way
    } catch (error) {
        yield put(SignInFailure(error))
    }
}

export function* isUserAuthenticated() {
    try {
        const userAuth = yield getCurrentUser();
        console.log("Saga", userAuth);
        if (!userAuth) return;
        yield getSnapshotFromUserAuth(userAuth);

    } catch (error) {
        yield put(SignInFailure(error))
    }
}

export function* signOut() {
    try {
        yield auth.signOut();
        yield put(signOutSuccess());
    } catch (error) {
        yield put(signOutFailure(error))
    }
}

export function* signUp({ payload: { email, password, displayName } }) {
    try {
        const { user } = yield auth.createUserWithEmailAndPassword(email, password); // getting email
        yield put(signUpSuccess({ user, displayName: { displayName } }));
    } catch (error) {
        yield put(signUpFailure(error))
    }
}

export function* signInAfterSignUp({ payload: { user, additionalData } }) {
    yield getSnapshotFromUserAuth(user, additionalData);
}

export function* onGoogleSignInStart() {
    yield takeLatest(UserActionTypes.GOOGLE_SIGN_IN_START, signInWithGoogle);
}

export function* onEmailSignStart() {
    console.log("Email Start");
    yield takeLatest(UserActionTypes.EMAIL_SIGN_IN_START, signInWithEmail)
}

export function* onCheckUserSession() {
    yield takeLatest(UserActionTypes.CHECK_USER_SESSION, isUserAuthenticated)
}

export function* onSignOutStart() {
    yield takeLatest(UserActionTypes.SIGN_OUT_START, signOut)
}

export function* onSignUpSuccess() {
    yield takeLatest(UserActionTypes.SIGN_UP_SUCCESS, signInAfterSignUp)
}

export function* onSignUpStart() {
    yield takeLatest(UserActionTypes.SIGN_UP_START, signUp)
}

export function* userSagas() {
    yield all([
        call(onGoogleSignInStart),
        call(onEmailSignStart),
        call(onCheckUserSession),
        call(onSignOutStart),
        call(onSignUpStart),
        call(onSignUpSuccess)
    ])
}
