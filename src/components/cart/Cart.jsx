// Dependências
import React from "react";
import { connect } from "react-redux";
// Componentes
import CustomButton from "../custom-buttom/CustomButton";
import CartItem from "../cart-item/CartItem";
// CSS
import "./cart.scss";

const Cart = ({ cartItems }) => {
  return (
    <div className="cart-dropdown">
      <div className="cart-items">
        {cartItems.map(cartItem => (
          <CartItem key={cartItem.id} item={cartItem} />
        ))}
      </div>
      <CustomButton>GO TO CHECKOUT</CustomButton>
    </div>
  );
};
const mapStateToProps = ({ cart: { cartItems } }) => ({
  cartItems
});
export default connect(mapStateToProps)(Cart);
