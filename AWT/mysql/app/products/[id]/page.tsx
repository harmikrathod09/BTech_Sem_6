import React from "react";
import Link from "next/link";
import { Product } from "@/types/product";

interface Params {
  params: Promise<{
    id: string;
  }>;
}

export default async function ProductPage({ params }: Params) {
  const { id } = await params;
  try {
    const res = await fetch(`http://localhost:3000/api/product/${id}`, {
      cache: "no-store",
    });

    if (!res.ok) {
      return (
        <div className="min-h-screen bg-gradient-to-br from-gray-100 to-gray-200 flex items-center justify-center p-4">
          <div className="bg-white rounded-lg shadow-xl p-8 max-w-md text-center">
            <h1 className="text-3xl font-bold text-gray-900 mb-2">Product Not Found</h1>
            <p className="text-gray-600 mb-6">The product you're looking for doesn't exist.</p>
            <Link href="/products" className="inline-block bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-6 rounded-lg transition-colors">
              Back to Products
            </Link>
          </div>
        </div>
      );
    }

    const product: Product = await res.json();

    return (
      <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50 py-12 px-4">
        <div className="max-w-3xl mx-auto">
          <Link href="/products" className="inline-flex items-center text-blue-600 hover:text-blue-700 mb-6 font-semibold">
            <span className="mr-2">←</span> Back to Products
          </Link>

          <div className="bg-white rounded-lg shadow-xl overflow-hidden">
            <div className="bg-gradient-to-r from-blue-500 to-purple-500 h-64 flex items-center justify-center">
              <span className="text-9xl">🛍️</span>
            </div>

            <div className="p-8">
              <h1 className="text-4xl font-bold text-gray-900 mb-4">{product.name}</h1>

              <div className="bg-gradient-to-r from-blue-100 to-purple-100 rounded-lg p-6 mb-6">
                <p className="text-gray-600 mb-4">Price</p>
                <p className="text-5xl font-bold text-blue-600">₹{product.price}</p>
              </div>

              {product.description && (
                <div className="mb-8">
                  <h2 className="text-2xl font-bold text-gray-900 mb-3">Description</h2>
                  <p className="text-gray-700 leading-relaxed text-lg">{product.description}</p>
                </div>
              )}

              <div className="grid grid-cols-2 gap-4 mb-8">
                <div className="bg-gray-50 rounded-lg p-4">
                  <p className="text-gray-600 text-sm font-semibold mb-1">Product ID</p>
                  <p className="text-2xl font-bold text-gray-900">{product.id}</p>
                </div>
                <div className="bg-gray-50 rounded-lg p-4">
                  <p className="text-gray-600 text-sm font-semibold mb-1">In Stock</p>
                  <p className={`text-2xl font-bold ${product.quantity > 0 ? "text-green-600" : "text-red-600"}`}>
                    {product.quantity} units
                  </p>
                </div>
                <div className="bg-gray-50 rounded-lg p-4">
                  <p className="text-gray-600 text-sm font-semibold mb-1">Created</p>
                  <p className="text-lg font-semibold text-gray-900">{new Date(product.created_at).toLocaleDateString()}</p>
                </div>
                <div className="bg-gray-50 rounded-lg p-4">
                  <p className="text-gray-600 text-sm font-semibold mb-1">Status</p>
                  <span className={`inline-block px-4 py-2 rounded-full text-sm font-bold ${
                    product.quantity > 0
                      ? "bg-green-100 text-green-800"
                      : "bg-red-100 text-red-800"
                  }`}>
                    {product.quantity > 0 ? "✓ Available" : "✗ Out of Stock"}
                  </span>
                </div>
              </div>

              <button className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-4 px-6 rounded-lg transition-colors mb-4 text-lg">
                {product.quantity > 0 ? "Add to Cart" : "Out of Stock"}
              </button>

              <Link href="/products" className="block text-center text-blue-600 hover:text-blue-700 font-semibold py-2">
                Continue Shopping
              </Link>
            </div>
          </div>
        </div>
      </div>
    );
  } catch (error) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-red-50 to-red-100 flex items-center justify-center p-4">
        <div className="bg-white rounded-lg shadow-xl p-8 max-w-md text-center">
          <h1 className="text-2xl font-bold text-red-600 mb-2">Error Loading Product</h1>
          <p className="text-gray-600 mb-6">Something went wrong. Please try again later.</p>
          <Link href="/products" className="inline-block bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-6 rounded-lg transition-colors">
            Back to Products
          </Link>
        </div>
      </div>
    );
  }
}
