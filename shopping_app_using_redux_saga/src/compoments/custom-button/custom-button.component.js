import React from 'react'
import './custom-button.styles.scss'

const CustomButton = (props) => {
    const {children, isGoogleSignIn, inverted, ...otherProps} = props;
    return (
        <button
            className={` ${inverted ? 'inverted' : ''} ${isGoogleSignIn ? 'google-sign-in' : ''} custom-button`} {...otherProps}>
            {children}
        </button>
    )
}

export default CustomButton