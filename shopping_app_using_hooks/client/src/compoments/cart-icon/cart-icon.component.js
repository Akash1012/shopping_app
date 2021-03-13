import React, { useContext } from 'react';
import { connect } from 'react-redux'
import { toggleCartHidden } from '../../redux/cart/cart.action'
import { selectCartItemsCount } from '../../redux/cart/cartSelector';
import { ReactComponent as ShoppingIcon } from '../../assets/image/shopping-bag.svg';
import './cart-icon.style.scss';
import { CartContext } from '../../providers/cart/cart.providers';

const CartIcon = (props) => {
    const { toggleCardHidden, itemCount } = props;
    const { toggleHidden, cartItemsCount } = useContext(CartContext);

    return (
        <div className="cart-icon" onClick={toggleHidden}>
            <ShoppingIcon className='shopping-icon' />
            <span className='item-count'>{cartItemsCount}</span>
        </div>
    )
}

// const mapDispatchToProps = (dispatch) => {
//     return {
//         toggleCardHidden: () => dispatch(toggleCartHidden())
//     }
// }

// const mapStateToProps = (state) => {
//     return {
//         itemCount: selectCartItemsCount(state)
//     }
// }


// export default connect(mapStateToProps)(CartIcon);

export default CartIcon;

// Other ways 

// const mapStateToProps = ({ cart: { cartItems } }) => {
//     console.log("Why Calling mee ...");
//     return {
//         itemCount: cartItems.reduce((accumaltedQuantity, cartItem) => {
//             return accumaltedQuantity + cartItem.quantity
//         }, 0)
//     }
// }

