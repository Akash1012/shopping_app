import React from 'react';
import './checkout-item.style.scss';
import { connect } from 'react-redux'
import { clearItemdFromCart, addItem, removeItem } from '../../redux/cart/cart.action'

const CheckoutItem = (props) => {
    const { cartItem, clearItem, addItem, removeItem } = props
    const { imageUrl, name, price, quantity } = cartItem
    return (
        <div className='checkout-item'>
            <div className="image-container">
                <img src={imageUrl} alt="Item" />
            </div>
            <span className='name'>
                {name}
            </span>
            <span className='quantity'>
                <div className="arrow" onClick={() => removeItem(cartItem)}>&#10094;</div>
                <span className="value"> {quantity}</span>
                <div className="arrow" onClick={() => addItem(cartItem)}>&#10095;</div>
            </span>
            <span className='price'>
                {price}
            </span>
            <div className="remove-button" onClick={() => clearItem(cartItem)}>
                &#10005;
            </div>
        </div>
    )
}

const mapDispatchToProps = (dispatch) => {
    return {
        clearItem: (item) => dispatch(clearItemdFromCart(item)),
        addItem: (item) => dispatch(addItem(item)),
        removeItem: item => dispatch(removeItem(item))
    }
}



export default connect(null, mapDispatchToProps)(CheckoutItem)