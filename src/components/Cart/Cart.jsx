import React, {useContext} from "react";
import "./Cart.css";
import CartItem from "./CartItem";
import Modal from "../UI/Modal";
import CartContext from "../../store/cart-context";

const Cart = (props) => {
  const cartCtx = useContext(CartContext);

  const totalAmount = `$${cartCtx.totalAmount.toFixed(2)}`;
  const hasItems = cartCtx.items.length > 0;

  const cartItemRemoveHandler = (id) => {};

  const cartItemAddHandler = (item) => {};

  const cartItems = (
    <ul className="cart-items">
      {cartCtx.items.map((item) => (
        <CartItem key={item.id} name={item.name} amount={item.amount} price={item.price} onRemove={cartItemRemoveHandler.bind(null, item.id)} onAdd={cartItemAddHandler.bind(null, item)} />
      ))}
    </ul>
  );

  return (
    <Modal onClose={props.onHideCart}>
      {cartItems}
      <div className="total">
        <span>Total Amount</span>
        <span>{totalAmount}</span>
      </div>
      <div className="actions">
        <button className="button--alt" onClick={props.onHideCart}>
          Close
        </button>
        {hasItems && <button className="order-button">Order</button>}
      </div>
    </Modal>
  );
};

export default Cart;
