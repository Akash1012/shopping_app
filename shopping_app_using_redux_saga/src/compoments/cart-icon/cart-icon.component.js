import React from 'react';
import { connect } from 'react-redux'
import { toggleCartHidden } from '../../redux/cart/cart.action'
import { selectCartItemsCount } from '../../redux/cart/cartSelector';
import { ReactComponent as ShoppingIcon } from '../../assets/image/shopping-bag.svg';
import './cart-icon.style.scss';

const CartIcon = (props) => {
    const { toggleCardHidden, itemCount } = props;
    return (
        <div className="cart-icon" onClick={toggleCardHidden}>
            <ShoppingIcon className='shopping-icon' />
            <span className='item-count'>{itemCount}</span>
        </div>
    )
}

const mapDispatchToProps = (dispatch) => {
    return {
        toggleCardHidden: () => dispatch(toggleCartHidden())
    }
}

const mapStateToProps = (state) => {
    return {
        itemCount: selectCartItemsCount(state)
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(CartIcon);

// Other ways 

// const mapStateToProps = ({ cart: { cartItems } }) => {
//     console.log("Why Calling mee ...");
//     return {
//         itemCount: cartItems.reduce((accumaltedQuantity, cartItem) => {
//             return accumaltedQuantity + cartItem.quantity
//         }, 0)
//     }
// }

