import React from 'react';
import StripeCheckout from "react-stripe-checkout";

const StripeCheckoutButton = (props) => {
    const { price } = props
    const priceForStripe = price * 100;
    const publishablekey = 'pk_test_VUydhW3rlRfISYLyzJgrtvws00VrZeyQzZ';
    const onToken = (token) => {
        alert('Payment Succesful ...');
    }
    return (
        <StripeCheckout
            label="Pay Now"
            name="Gupta Clothing Ltd."
            billingAddress
            shippingAddress
            image="https://i.pinimg.com/originals/0b/ef/fd/0beffd6341cf43a6e794df3a7326fae9.png"
            description={`Your total price is $ ${price}`}
            amount={priceForStripe}
            panelLabel="Pay Now"
            token={onToken}
            stripeKey={publishablekey}
        />
    )
}

export default StripeCheckoutButton