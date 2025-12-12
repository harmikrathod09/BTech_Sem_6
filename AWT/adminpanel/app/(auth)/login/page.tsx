"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";

export default function LoginPage() {
  const route = useRouter();
  const [role, setRole] = useState<"admin" | "client">("client");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();

    if (role === "admin") {
      route.push("/dashboard");
    } else {
      route.push("/dashboard");
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 flex items-center justify-center p-4">
      <div className="max-w-md w-full bg-white rounded-2xl shadow-xl p-8 space-y-6">
        <h2 className="text-2xl font-bold text-center text-gray-900">Welcome Back</h2>

        <form onSubmit={handleLogin} className="space-y-5">
          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-2">Login As</label>
            <div className="flex gap-6">
              <label className="flex items-center cursor-pointer">
                <input
                  type="radio"
                  id="adminRole"
                  value="admin"
                  checked={role === "admin"}
                  onChange={(e) => setRole(e.target.value as "admin")}
                  className="w-4 h-4 text-indigo-600 focus:ring-indigo-500"
                />
                <span className="ml-2 text-gray-700">Admin</span>
              </label>

              <label className="flex items-center cursor-pointer">
                <input
                  type="radio"
                  id="clientRole"
                  value="client"
                  checked={role === "client"}
                  onChange={(e) => setRole(e.target.value as "client")}
                  className="w-4 h-4 text-indigo-600 focus:ring-indigo-500"
                />
                <span className="ml-2 text-gray-700">Client</span>
              </label>
            </div>
          </div>

          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-2">Email</label>
            <input
              type="email"
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent outline-none transition"
              placeholder="Enter your email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>

          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-2">Password</label>
            <input
              type="password"
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent outline-none transition"
              placeholder="Enter your password"
              required
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>

          <button 
            type="submit" 
            className="w-full bg-indigo-600 hover:bg-indigo-700 text-white font-semibold py-3 px-4 rounded-lg transition-colors duration-200"
          >
            Login
          </button>
        </form>

        <div className="text-center">
          <p className="text-gray-600">
            Don't have an account?{" "}
            <Link href="/register" className="text-indigo-600 hover:text-indigo-700 font-semibold no-underline">
              Register
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}
