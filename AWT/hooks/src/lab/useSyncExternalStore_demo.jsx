import React, { useSyncExternalStore } from "react";

function subscribe(callback) {
  window.addEventListener("online", callback);
  window.addEventListener("offline", callback);

  return () => {
    window.removeEventListener("online", callback);
    window.removeEventListener("offline", callback);
  };
}

function getSnapshot() {
  return navigator.onLine;
}

function getServerSnapshot() {
  return true;
}

export default function UseSyncExternalStore_demo() {
  const isOnline = useSyncExternalStore(
    subscribe,
    getSnapshot,
    getServerSnapshot
  );

  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      <h1>Network Status</h1>
      <h2 style={{ color: isOnline ? "green" : "red" }}>
        {isOnline ? "🟢 Online" : "🔴 Offline"}
      </h2>
    </div>
  );
}