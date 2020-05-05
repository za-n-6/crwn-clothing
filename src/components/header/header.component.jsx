import React from "react";

import { connect } from "react-redux";

import { createStructuredSelector } from "reselect";

import { auth } from "../../firebase/firebase.utils";

import CartIcon from "../cart-icon/cart-icon.component";

import CartDropdown from "../cart-dropdown/cart-dropdown.component";

import { selectCartHidden } from "../../redux/cart/cart.selectors";
import { selectCurrentUser } from "../../redux/user/user.selectors";

import { ReactComponent as Logo } from "../../assets/crown.svg";

import {
  HeaderContainer,
  LogoContainer,
  OptionsContainer,
  OptionLink,
} from "./header.styles";

const Header = ({ currentUser, hidden }) => (
  <HeaderContainer>
    <LogoContainer to="/">
      <Logo className="logo "></Logo>
    </LogoContainer>

    <OptionsContainer>
      <OptionLink to="/shop">SHOP</OptionLink>
      <OptionLink to="/shop">CONTACT</OptionLink>

      {currentUser ? (
        <OptionLink as="div" onClick={() => auth.signOut()}>
          SIGN OUT
        </OptionLink>
      ) : (
        <OptionLink to="/signin">SIGN IN</OptionLink>
      )}

      <CartIcon />
    </OptionsContainer>

    {hidden ? null : <CartDropdown />}
  </HeaderContainer>
);

//const mapStateToProps = ({ user: { currentUser }, cart: { hidden } }) => ({
//  currentUser,
// hidden,
//});

//Now the above code can be written with Selectors as :

//const mapStateToProps = (state)=> ( {
//currentUser: selectCurrentUser(state),
//hidden: selectCartHidden (state)
//})

// But with createStructuredSelector,the given properties are automatically
// going to point to the correct selectors.

const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser,
  hidden: selectCartHidden,
});

export default connect(mapStateToProps)(Header);
