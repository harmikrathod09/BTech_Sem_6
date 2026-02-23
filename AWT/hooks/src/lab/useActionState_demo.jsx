import React, { useActionState } from "react";

async function handleLogin(prevState, formData) {
  const email = formData.get("email");
  const password = formData.get("password");

  if (!email || !email.includes("@")) {
    return { error: "Invalid email" };
  }

  if (!password || password.length < 6) {
    return { error: "Password must be at least 6 characters" };
  }

  console.log(email, password);

  return { error: null, success: "Login successful" };
}

export default function UseActionState_demo() {
  const [state, formAction] = useActionState(handleLogin, {
    error: null,
    success: null,
  });

  return (
    <div>
      <form action={formAction}>
        <input type="text" name="email" placeholder="Enter email" />
        <input type="password" name="password" placeholder="Enter password" />

        {state?.error && <p>{state.error}</p>}
        {state?.success && <p>{state.success}</p>}

        <button type="submit">Login</button>
      </form>
    </div>
  );
}