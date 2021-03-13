import React, { createContext, useState, useEffect } from 'react';
import { clearItemdFromCart } from '../../redux/cart/cart.action';
import { addItemToCart, removeItemFromCart, getCartItemsCount, filterItemFromCart, getCartTotal } from './cart.utils';

export const CartContext = createContext(
    {
        hiddens: true,
        toggleHidden: () => {
            console.log("Function is calling .... !");
        },
        cartItem: [],
        addItemt: () => { },
        removeItem: () => { },
        clearItemFromCart: () => { },
        cartItemsCount: 0,
        cartTotal: 0
    }
)

// Compoment

const CartProvider = ({ children }) => {
    const [hiddens, setHiddens] = useState(true);
    const toggleHiddens = () => setHiddens(!hiddens);
    const [cartItems, setCartItems] = useState([]);
    const [cartItemsCount, setCartItemsCount] = useState(0);
    const [cartTotal, setCartTotal] = useState(0);

    const addItem = (item) => setCartItems(addItemToCart(cartItems, item))
    const removeItem = (item) => setCartItems(removeItemFromCart(cartItems, item))
    const clearItemFromCart = (item) => setCartItems(filterItemFromCart(cartItems, item))
    // const totalAmount = (item) => setTotalAmount(total(cartItems, item))
    useEffect(() => {
        setCartItemsCount(getCartItemsCount(cartItems));
        setCartTotal(getCartTotal(cartItems));
    }, [cartItems])
    return (
        <CartContext.Provider value={{
            hiddens: hiddens,
            toggleHidden: toggleHiddens,
            cartItems,
            addItem,
            removeItem,
            cartItemsCount,
            clearItemFromCart,
            total: cartTotal

        }}>
            {children}
        </CartContext.Provider>
    )
}

export default CartProvider;