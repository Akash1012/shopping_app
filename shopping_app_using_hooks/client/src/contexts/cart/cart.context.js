import { createContext } from 'react';

const CartContext = createContext(
    {
        hidden: true,
        toggleHidden: () => {
            console.log("Function is calling .... !");
        }
    }
)

export default CartContext;