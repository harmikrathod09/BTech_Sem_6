import React from 'react'
import Link from 'next/link'

export default function ProductPage() {
  const products = [
    { id: 1, name: "Product 1", price: "$99.99", description: "Description for product 1" },
    { id: 2, name: "Product 2", price: "$149.99", description: "Description for product 2" },
    { id: 3, name: "Product 3", price: "$79.99", description: "Description for product 3" },
  ]

  return (
    <div className="min-h-screen bg-gray-50 p-6">
      <div className="max-w-7xl mx-auto">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900">Products</h1>
          <p className="text-gray-600 mt-2">Browse our product catalog</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {products.map((product) => (
            <div key={product.id} className="bg-white rounded-lg shadow hover:shadow-lg transition-shadow duration-200">
              <div className="p-6">
                <h2 className="text-xl font-semibold text-gray-900 mb-2">{product.name}</h2>
                <p className="text-gray-600 text-sm mb-4">{product.description}</p>
                <div className="flex justify-between items-center">
                  <span className="text-2xl font-bold text-indigo-600">{product.price}</span>
                  <Link 
                    href={`/product/${product.id}`}
                    className="bg-indigo-600 hover:bg-indigo-700 text-white font-semibold py-2 px-4 rounded-lg transition-colors duration-200 no-underline"
                  >
                    View Details
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
