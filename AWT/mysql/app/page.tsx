import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-600 via-purple-600 to-pink-500 relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-white rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-yellow-300 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob animation-delay-2000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-pink-300 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob animation-delay-4000"></div>
      </div>

      <main className="relative flex flex-col items-center justify-center min-h-screen px-4 sm:px-6 text-center">
        <div className="max-w-5xl mx-auto">
          {/* Hero Section */}
          <div className="mb-12 animate-fade-in">
            <div className="text-8xl md:text-9xl mb-6 animate-bounce-slow">🛒</div>
            <h1 className="text-5xl md:text-7xl font-extrabold leading-tight tracking-tight text-white mb-6 drop-shadow-lg">
              Welcome to Our
              <span className="block bg-gradient-to-r from-yellow-200 via-pink-200 to-blue-200 bg-clip-text text-transparent">
                Product Store
              </span>
            </h1>
            <p className="max-w-3xl text-xl md:text-2xl leading-relaxed text-white/90 mx-auto mb-10 drop-shadow-md">
              Discover our curated collection of premium products. Quality meets style, delivered right to your doorstep with exceptional service.
            </p>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16">
            <Link
              className="group relative flex h-14 items-center justify-center gap-3 rounded-xl bg-white text-blue-600 px-8 text-lg font-bold transition-all duration-300 hover:scale-110 hover:shadow-2xl hover:shadow-white/50"
              href="/products"
            >
              <span>Browse Products</span>
              <span className="transition-transform duration-300 group-hover:translate-x-1">→</span>
            </Link>
            <a
              className="flex h-14 items-center justify-center gap-3 rounded-xl border-2 border-white/50 backdrop-blur-sm bg-white/10 text-white px-8 text-lg font-bold transition-all duration-300 hover:bg-white/20 hover:border-white hover:scale-110"
              href="https://nextjs.org/docs"
              target="_blank"
              rel="noopener noreferrer"
            >
              Learn More
            </a>
          </div>

          {/* Features Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            <div className="group bg-white/95 backdrop-blur-sm rounded-2xl shadow-xl p-8 transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:bg-white">
              <div className="text-6xl mb-4 transform transition-transform duration-300 group-hover:scale-125 group-hover:rotate-12">🚀</div>
              <h3 className="text-2xl font-bold text-gray-900 mb-3">Fast Delivery</h3>
              <p className="text-gray-600 leading-relaxed">Lightning-fast shipping to get your products delivered quickly and safely to your door.</p>
            </div>
            <div className="group bg-white/95 backdrop-blur-sm rounded-2xl shadow-xl p-8 transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:bg-white">
              <div className="text-6xl mb-4 transform transition-transform duration-300 group-hover:scale-125 group-hover:rotate-12">✨</div>
              <h3 className="text-2xl font-bold text-gray-900 mb-3">Quality Assured</h3>
              <p className="text-gray-600 leading-relaxed">Every product is carefully curated, tested, and guaranteed to meet our high standards.</p>
            </div>
            <div className="group bg-white/95 backdrop-blur-sm rounded-2xl shadow-xl p-8 transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:bg-white">
              <div className="text-6xl mb-4 transform transition-transform duration-300 group-hover:scale-125 group-hover:rotate-12">💬</div>
              <h3 className="text-2xl font-bold text-gray-900 mb-3">24/7 Support</h3>
              <p className="text-gray-600 leading-relaxed">Our dedicated support team is always ready to help with any questions or concerns.</p>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
