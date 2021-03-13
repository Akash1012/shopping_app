import React from 'react';
import StripeCheckout from "react-stripe-checkout";
import axios from 'axios';

const StripeCheckoutButton = (props) => {
    const { price } = props
    const priceForStripe = price * 100;
    const publishablekey = 'pk_test_VUydhW3rlRfISYLyzJgrtvws00VrZeyQzZ';
    const onToken = (token) => {
        axios({
            url: 'payment',
            method: 'post',
            data: {
                amount: priceForStripe,
                token: token
            }
        })
            .then(response => {
                alert('succesful payment');
            })
            .catch(error => {
                console.log('Payment Error: ', error);
                alert('succesful payment');
            });
    };
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