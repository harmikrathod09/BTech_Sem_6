import React, { useContext } from "react";
import { CartContext } from "../context/cartContext";

export default function Product() {

  const { addToCart } = useContext(CartContext);

  const products = [
    { id: 1, name: "Laptop", price: 50000 },
    { id: 2, name: "Mobile", price: 20000 }
  ];

  return (
    <div>
      <h2>Products</h2>

      {products.map((p) => (
        <div key={p.id}>
          <p>{p.name} - ₹{p.price}</p>
          <button onClick={() => addToCart(p)}>
            Add to Cart
          </button>
        </div>
      ))}
    </div>
  );
}