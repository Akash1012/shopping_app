import React from 'react'
import './checkout.style.scss';
import { connect } from 'react-redux';
import { selectCartItems, selectCartItemsTotal } from '../../redux/cart/cartSelector';
import CheckoutItem from '../../compoments/checkout-item/checkout-item.component'
import StripeCheckoutButton from '../../compoments/stripe-button/stripe-button.component'

const CheckOutPage = (props) => {
    const { cartItems, total } = props
    return (
        <div className='checkout-page'>
            <div className="checkout-header">
                <div className="header-block">
                    <span>
                        Product
                    </span>
                </div>
                <div className="header-block">
                    <span>
                        Description
                    </span>
                </div>
                <div className="header-block">
                    <span>
                        Quantity
                    </span>
                </div>
                <div className="header-block">
                    <span>Price</span>
                </div>
                <div className="header-block">
                    <span>Remove</span>
                </div>
            </div>

            {
                cartItems.map(cartItem => {
                    return <CheckoutItem key={cartItem.id} cartItem={cartItem} />
                })
            }

            <div className='total'>
                <span>TOTAL: ${total}</span>
            </div>
            <div className="test-warning">
                ** Please use the following test credit card for payments
          <br />
          4242 4242 4242 4242 - Exp :10/30 - CVV: 123
        </div>
            <StripeCheckoutButton price={total} />
        </div>
    )
}

const mapStateToProps = (state) => {
    return {
        cartItems: selectCartItems(state),
        total: selectCartItemsTotal(state)
    }
}

export default connect(mapStateToProps)(CheckOutPage)