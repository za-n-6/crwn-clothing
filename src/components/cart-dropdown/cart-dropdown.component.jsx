import React from "react";

import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import { withRouter } from "react-router-dom";

import CustomButton from "../custom-button/custom-button.component";

import CartItem from "../cart-item/cart-item.component";

import { selectCartItems } from "../../redux/cart/cart.selectors";
import { toggleCartHidden } from "../../redux/cart/cart.actions";

import "./cart-dropdown.styles.scss";

const CartDropdown = ({ cartItems, history, dispatch }) => (
  <div className="cart-dropdown">
    <div className="cart-items">
      {cartItems.length ? (
        cartItems.map((cartItem) => (
          <CartItem key={cartItem.id} item={cartItem} />
        ))
      ) : (
        <span className="empty-message"> Your cart is empty</span>
      )}
    </div>
    <CustomButton
      onClick={() => {
        history.push("./checkout");
        dispatch(toggleCartHidden());
      }}
    >
      GO TO CHECKOUT
    </CustomButton>
  </div>
);

//const mapStateToProps = ({ cart: { cartItems }})=> ({
//  cartItems
//}) ;
//replacing the above code with selectors code

const mapStateToProps = createStructuredSelector({
  cartItems: selectCartItems,
});

//In order to get access to actions we usually write mapDispatchToProps
//but if we donot give second parameter in CONNECT that is mapDispatchToProps ,connect
// automatically dispatches into our component as a property

export default withRouter(connect(mapStateToProps)(CartDropdown));
