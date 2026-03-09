import React, { useContext } from "react";

import { AuthContext } from "./context/authContext";
import Login from "./component/login";
import Dashboard from "./component/dashboard";
import Product from "./component/product";
import Cart from "./component/cart";

function App() {
  const { user } = useContext(AuthContext);

  // return <div>{user ? <Dashboard /> : <Login />}</div>;

  return (
    <div>
      <h1>Shopping Cart using Context API</h1>

      <Product />
      <Cart />

    </div>
  );
}

export default App;