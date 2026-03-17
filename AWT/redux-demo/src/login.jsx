import React from "react";
import { useDispatch } from "react-redux";
import { login } from "./authslice";

function Login() {
  const dispatch = useDispatch();

  const handleLogin = () => {
    const userData = { name: "Harmik", email: "harmik@gmail.com" };
    dispatch(login(userData));
  };

  return (
    <div>
      <button onClick={handleLogin}>Login</button>
    </div>
  );
}

export default Login;