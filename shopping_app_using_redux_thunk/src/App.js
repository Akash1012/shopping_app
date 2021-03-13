import React, { lazy, Suspense } from "react";
import { Switch, Route, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
// import "./App.css";
import { GlobalStyle } from './global.style'

// import HomePage from "./pages/homepage/homepage.component";
// import ShopPage from './pages/shop/shop.component';

import { auth, createUserProfileDocument } from "./firebase/firebase.utils";

import Header from './compoments/header/header.component';
// import CheckOutPage from '../src/pages/checkout/checkout.component';
// import SignInAndSignUpPage from './pages/sign-in-and-sign-up/sign-in-and-sign-up.components'
import { selectCurrentUser } from '../src/redux/user/userSelector'
import { checkUserSession } from './redux/user/user.action';

import { setCurrentUser } from './redux/user/user.action'
import ErrorBoundary from './compoments/error-boundary/error-boundary.compoment';

// import { selectCollectionForPreview } from './redux/shop/shop.selector';

const HomePage = lazy(() => import('./pages/homepage/homepage.component'));
const ShopPage = lazy(() => import('./pages/shop/shop.component'));
const CheckOutPage = lazy(() => import('./redux/user/user.action'));
const SignInAndSignUpPage = lazy(() => import('./pages/sign-in-and-sign-up/sign-in-and-sign-up.components'));

class App extends React.Component {
    unsubscribeFromAuth = null;


    componentDidMount() {

        const { setCurrentUser, checkUserSession } = this.props;
        // checkUserSession(); // this is used in redux-saga

        this.unsubscribeFromAuth = auth.onAuthStateChanged(async userAuth => {
            if (userAuth) { // if something change in userAuth then this userAuth call
                console.log("USER AUTH", userAuth);
                const userRef = await createUserProfileDocument(userAuth);
                console.log("User Ref", userRef);
                userRef.onSnapshot(snapshot => {
                    // getting user data and call setCurrentUser
                    setCurrentUser({
                        id: snapshot.id,
                        ...snapshot.data()
                    })
                })
            } else {
                setCurrentUser(
                    userAuth
                )
            }
            // Send partecular data to the firebase
            // addCollectionAndDocuments('collections', collectionArray.map(obj => {
            //     return {
            //         title: obj.title,
            //         items: obj.items
            //     }
            // }));
        })
    }

    componentWillUnmount() {
        this.unsubscribeFromAuth();
    }

    render() {
        console.log("currentUser", this.props.currentUser)
        return (
            <div>
                {/* Global Style */}
                <GlobalStyle />
                <Header />
                <Switch>
                    <ErrorBoundary>
                        <Suspense fallback={<div>...Loading</div>}>
                            <Route exact path='/' component={HomePage} />
                            <Route path='/shop' component={ShopPage} />
                            <Route exact path='/checkout' component={CheckOutPage} />
                            {/*<Route exact path='/signin' component={SignInAndSignUpPage}/>*/}
                            <Route exact path='/signin' render={() => this.props.currentUser ? <Redirect to='/' /> : <SignInAndSignUpPage />} />
                        </Suspense>
                    </ErrorBoundary>
                </Switch>
            </div>
        )
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        setCurrentUser: (user) => {
            dispatch(setCurrentUser(user))
        }

        // checkUserSession: () => dispatch(checkUserSession())
    }
}



const mapStateToProps = (state) => {
    return {
        currentUser: selectCurrentUser(state),
        // collectionArray: selectCollectionForPreview(state)
    }
}


export default connect(mapStateToProps, mapDispatchToProps)(App);

// Other ways

// const mapStateToProps = (state) => {
//     return {
//         currentUser: state.user.currentUser
//     }
// }