import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { login, logout } from "./authSlice";
import { addToCart, removeFromCart } from "./cartSlice";

function ReduxDemo() {
  const [username, setUsername] = useState("");
  const [product, setProduct] = useState("");

  const auth = useSelector((state) => state.auth);
  const cart = useSelector((state) => state.cart.cartItems);

  const dispatch = useDispatch();

  return (
    <>
      <h2>User Authentication</h2>

      {!auth.isAuthenticated ? (
        <>
          <input
            type="text"
            placeholder="Enter username"
            onChange={(e) => setUsername(e.target.value)}
          />

          <button
            onClick={() =>
              dispatch(login({ name: username }))
            }
          >
            Login
          </button>
        </>
      ) : (
        <>
          <p>Welcome {auth.user.name}</p>

          <button onClick={() => dispatch(logout())}>
            Logout
          </button>
        </>
      )}

      <hr />

      <h2>Add To Cart</h2>

      <input
        type="text"
        placeholder="Product name"
        onChange={(e) => setProduct(e.target.value)}
      />

      <button
        onClick={() =>
          dispatch(
            addToCart({
              id: Date.now(),
              name: product,
            })
          )
        }
      >
        Add Product
      </button>

      <ul>
        {cart.map((item) => (
          <li key={item.id}>
            {item.name}

            <button
              onClick={() =>
                dispatch(removeFromCart(item.id))
              }
            >
              Remove
            </button>
          </li>
        ))}
      </ul>
    </>
  );
}

export default ReduxDemo;