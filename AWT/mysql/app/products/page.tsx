import React from "react";
import Link from "next/link";
import { Product } from "@/types/product";

export default async function Page() {
  let products: Product[] = [];
  let error: string | null = null;

  try {
    const res = await fetch("http://localhost:3000/api/product", {
      cache: "no-store",
    });

    if (!res.ok) {
      throw new Error("Failed to fetch products");
    }

    products = await res.json();
  } catch (err) {
    error = err instanceof Error ? err.message : "Failed to fetch products";
  }

  if (error) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-red-50 to-red-100 flex items-center justify-center p-4">
        <div className="bg-white rounded-lg shadow-xl p-8 max-w-md w-full">
          <h2 className="text-2xl font-bold text-red-600 mb-2">❌ Error</h2>
          <p className="text-gray-700">{error}</p>
          <p className="text-gray-600 text-sm mt-4">Check your API route and database connection.</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50">
      <div className="max-w-6xl mx-auto px-4 py-12">
        <div className="mb-12">
          <h1 className="text-5xl font-bold text-gray-900 mb-2">📦 Product Catalog</h1>
          <p className="text-gray-600 text-lg">Browse our collection of products</p>
        </div>

        {products.length === 0 ? (
          <div className="text-center py-12">
            <p className="text-gray-500 text-xl">No products found.</p>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {products.map((p) => (
              <Link key={p.id} href={`/products/${p.id}`}>
                <div className="bg-white rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300 overflow-hidden cursor-pointer h-full">
                  <div className="bg-gradient-to-r from-blue-500 to-purple-500 h-32 flex items-center justify-center">
                    <span className="text-5xl">🛍️</span>
                  </div>
                  <div className="p-6">
                    <h2 className="text-xl font-bold text-gray-900 mb-2 truncate">{p.name}</h2>
                    {p.description && (
                      <p className="text-gray-600 text-sm mb-4 line-clamp-2">{p.description}</p>
                    )}
                    <div className="flex items-center justify-between">
                      <span className="text-2xl font-bold text-blue-600">₹{p.price}</span>
                      <span className="inline-block bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm font-semibold">
                        {p.quantity > 0 ? "In Stock" : "Out of Stock"}
                      </span>
                    </div>
                    <p className="text-gray-500 text-xs mt-3">Qty: {p.quantity}</p>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
