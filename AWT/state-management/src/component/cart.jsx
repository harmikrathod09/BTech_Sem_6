import React, { useContext } from "react";
import { CartContext } from "../context/cartContext";

export default function Cart() {

  const { cart, removeFromCart } = useContext(CartContext);

  return (
    <div>
      <h2>Cart</h2>

      {cart.length === 0 && <p>No items in cart</p>}

      {cart.map((item, index) => (
        <div key={index}>
          <p>{item.name} - ₹{item.price}</p>
          <button onClick={() => removeFromCart(index)}>
            Remove
          </button>
        </div>
      ))}

    </div>
  );
}