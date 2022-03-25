import React from "react";
import "./Cart.css";
import Modal from "../UI/Modal";

const Cart = (props) => {
  const cartItems = (
    <ul className="cart-items">
      {[{id: "c1", name: "sushi", amount: 2, price: 12.99}].map((item) => (
        <li>{item.name}</li>
      ))}
    </ul>
  );

  return (
    <Modal onClose={props.onHideCart}>
      {cartItems}
      <div className="total">
        <span>Total Amount</span>
        <span>35.62</span>
      </div>
      <div className="actions">
        <button className="button--alt" onClick={props.onHideCart}>
          Close
        </button>
        <button className="order-button">Order</button>
      </div>
    </Modal>
  );
};

export default Cart;