import React, { useContext } from 'react'
import './cart-dropdown.style.scss';
import CustomButton from "../custom-button/custom-button.component";
import CartItem from '../cart-item/cart-item.component';
import { selectCartItems } from '../../redux/cart/cartSelector'
import { toggleCartHidden } from '../../redux/cart/cart.action'
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom'
import { CartContext } from '../../providers/cart/cart.providers';


const CartDropdown = (props) => {
    const { history, hidden } = props;
    const { toggleHidden, cartItems } = useContext(CartContext);
    return (
        <div className='cart-dropdown'>
            <div className='cart-items'>
                {
                    cartItems.length ?
                        (
                            cartItems.map(cartItem => {
                                return <CartItem key={cartItem.id} item={cartItem} />
                            }
                            )) :
                        <span className='empty-message'>Your cart is empty </span>
                }
            </div>
            <CustomButton onClick={() => {
                history.push('/checkout');
                toggleHidden();
            }}>GO TO CHECKOUT</CustomButton>
        </div>
    )
}

// const mapDispatchToProps = (dispatch) => {
//     return {
//         hidden: () => dispatch(toggleCartHidden())
//     }
// }

// const mapStateToProps = (state) => {
//     return {
//         cartItems: selectCartItems(state)
//     }
// }

// export default withRouter(connect(mapStateToProps, mapDispatchToProps)(CartDropdown))

export default withRouter(CartDropdown)



// Other Ways

// const mapStateToProps = ({ cart: { cartItems } }) => {
//     return {
//         // CartItems: state.cart.cartItems
//         cartItems: cartItems
//     }
// }
