import Link from "next/link";

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 flex items-center justify-center p-4">
      <div className="max-w-md w-full bg-white rounded-2xl shadow-xl p-8 space-y-6">
        <div className="text-center space-y-2">
          <h1 className="text-3xl font-bold text-gray-900">Welcome</h1>
          <p className="text-gray-600">Get started by logging in or creating an account</p>
        </div>

        <div className="space-y-4">
          <Link 
            href="/login"
            className="block w-full bg-indigo-600 hover:bg-indigo-700 text-white font-semibold py-3 px-4 rounded-lg text-center transition-colors duration-200 no-underline"
          >
            Login
          </Link>
          
          <Link 
            href="/register"
            className="block w-full bg-white hover:bg-gray-50 text-indigo-600 font-semibold py-3 px-4 rounded-lg text-center border-2 border-indigo-600 transition-colors duration-200 no-underline"
          >
            Register
          </Link>
        </div>
      </div>
    </div>
  );
}
