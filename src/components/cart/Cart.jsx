// Dependências
import React from "react";
// Componentes
import CustomButton from "../custom-buttom/CustomButton";

// CSS
import "./cart.scss";

const Cart = () => {
  return (
    <div className="cart-dropdown">
      <div className="cart-items">
        <CustomButton>GO TO CHECKOUT</CustomButton>
      </div>
    </div>
  );
};
export default Cart;
