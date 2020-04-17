import { createSelector } from "reselect";

const selectCart = (state) => state.cart;
//the above is input selector and its a function that gets the whole state
//and returns a slice of it only(one layer deep usually)

// Now we will build the output selector which is gonna use the abover input selector as well
// as createSelector

export const selectCartItems = createSelector(
  [selectCart],
  (cart) => cart.cartItems
);
export const selectCartHidden = createSelector(
  [selectCart],
  (cart) => cart.hidden
);

export const selectCartTotal = createSelector([selectCartItems], (cartItems) =>
  cartItems.reduce(
    (accumalatedQuantity, cartItem) =>
      accumalatedQuantity + cartItem.quantity * cartItem.price,
    0
  )
);

export const selectCartItemsCount = createSelector(
  [selectCartItems],
  (cartItems) =>
    cartItems.reduce(
      (accumalatedQuantity, cartItem) =>
        accumalatedQuantity + cartItem.quantity,
      0
    )
);

// the first argument is a collection array on input selectors
// the second argument is going to be a function that will return the  value
// that we want out of this selector
