import React, { useContext } from "react";
import { AuthContext } from "../context/authContext";

function Dashboard() {
  const { user, logout } = useContext(AuthContext);

  return (
    <div>
      <h2>Welcome {user.username}</h2>
      <button onClick={logout}>Logout</button>
    </div>
  );
}

export default Dashboard;