import React from 'react';
import { Link } from 'react-router-dom'
import { connect } from 'react-redux';
import { ReactComponent as Logo } from '../../assets/image/crown.svg'; // This is a Special Syntax for importing SVG.
import './header.style.scss'
import { auth } from "../../firebase/firebase.utils";
import CartIcon from '../cart-icon/cart-icon.component';
import CartDropdown from '../cart-dropdown/cart-dropdown';
import { selectCurrentUser } from '../../redux/user/userSelector';
import { selectCartHidden } from '../../redux/cart/cartSelector'
import { signOutStart } from '../../redux/user/user.action'


// import { createSelectorCreator } from 'reselect'

const Header = (props) => {
    const { currentUser, hidden, signOutStart } = props;
    return (
        <div className="header">
            <Link className='logo-container' to='/'>
                <Logo src={Logo} alt="logo" className='logo' />
            </Link>
            <div className="options">
                <Link className="option" to='/shop'>SHOP</Link>
                <Link className="option" to='/shop'>CONTACT</Link>
                {
                    currentUser ?
                        // <div className='option' onClick={() => auth.signOut()}>SIGN OUT</div> :
                        <div className='option' onClick={signOutStart}>SIGN OUT</div> :

                        <Link className='option' to='/signin'>SIGN IN</Link>
                }
                <CartIcon />
            </div>
            {hidden ? null : <CartDropdown />}
        </div>
    )
}


const mapDispatchToProps = (dispatch) => {
    return {
        signOutStart: () => dispatch(signOutStart())
    }
}

const mapStateToProps = (state) => {
    return {
        currentUser: selectCurrentUser(state),
        hidden: selectCartHidden(state)
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Header);

// Other Ways

// const mapStateToProps = ({ user: { currentUser }, cart: { hidden } }) => {
//     return {
//         currentUser: currentUser,
//         hidden: hidden
//     }

// }

// const mapStateToProps = (state) => {
//     return {
//         currentUser: state.user.currentUser,
//         hidden: state.cart.hidden
//     }
// }


// ----------------------------------

// Use createSelectorCreator

// const mapStateToProps = createSelectorCreator(
//     {
//         currentUser: selectCurrentUser,
//         hidden: selectCartHidden
//     }
// )