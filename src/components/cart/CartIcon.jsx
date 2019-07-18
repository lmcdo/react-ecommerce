// Dependências
import React from "react";
import { ReactComponent as ShoppingIcon } from "../../assets/shopping-bag.svg";

// CSS
import "./cart-icon.scss";
const CartIcon = () => {
  return (
    <div className="cart-icon">
      <ShoppingIcon className="shopping-icon" />
      <span className="item-count">0</span>
    </div>
  );
};

export default CartIcon;
