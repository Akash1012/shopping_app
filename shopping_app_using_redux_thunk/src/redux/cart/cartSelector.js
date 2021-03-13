import { createSelector } from 'reselect';

const selectCart = (state) => state.cart; // Input Selector

export const selectCartHidden = createSelector(
    [selectCart],
    cart => {
        return cart.hidden
    }

)

export const selectCartItems = createSelector(
    [selectCart],
    cart => {
        return cart.cartItems
    }
)

export const selectCartItemsCount = createSelector(
    [selectCartItems],
    cartItems => cartItems.reduce((accumaltedQuantity, cartItem) => {
        return accumaltedQuantity + cartItem.quantity
    }, 0)
)

export const selectCartItemsTotal = createSelector(
    [selectCartItems],
    cartItems => cartItems.reduce((accumaltedQuantity, cartItem) => {
        return accumaltedQuantity + cartItem.quantity * cartItem.price
    }, 0)
)