export const addItemToCart = (cartItems, cartItemToAdd) => {
  const existingCartItem = cartItems.find((cartItem) => {
    return cartItem.id === cartItemToAdd.id;
  });

  // If item is matched then it return the match object if not then it return undefinded .

  console.log("existingCartItem", cartItems);

  if (existingCartItem) {
    return cartItems.map((cartItem) => {
      return cartItem.id === cartItemToAdd.id
        ? {
          ...cartItem,
          quantity: cartItem.quantity + 1,
        }
        : cartItem;
    });
  }

  return [...cartItems, { ...cartItemToAdd, quantity: 1 }];
};


export const removeItemFromCart = (cartItems, cartItemToRemove) => {
  const existingCartItem = cartItems.find((cartItem) => {
    return cartItem.id === cartItemToRemove.id
  })

  if (existingCartItem.quantity === 1) {
    return cartItems.filter(cartItem => {
      return cartItem.id !== cartItemToRemove.id
    })
  }

  return cartItems.map((cartItem) => {
    return cartItem.id === cartItemToRemove.id
      ? {
        ...cartItem,
        quantity: cartItem.quantity - 1,
      } : cartItem
  })
}


export const filterItemFromCart = (cartItems, item) => cartItems.filter(cartItem => {
  return cartItem.id !== item.id
})


export const getCartTotal = cartItems =>
  cartItems.reduce(
    (accumalatedQuantity, cartItem) =>
      accumalatedQuantity + cartItem.quantity * cartItem.price,
    0
  );

export const getCartItemsCount = cartItems => cartItems.reduce((accumaltedQuantity, cartItem) => {
  return accumaltedQuantity + cartItem.quantity
}, 0)