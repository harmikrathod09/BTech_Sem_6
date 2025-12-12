import React from 'react'
import Link from 'next/link'

export default async function ProductID({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params
  
  return (
    <div className="min-h-screen bg-gray-50 p-6">
      <div className="max-w-4xl mx-auto">
        <Link href="/product" className="text-indigo-600 hover:text-indigo-700 mb-4 inline-block no-underline">
          ← Back to Products
        </Link>

        <div className="bg-white rounded-lg shadow p-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-4">Product {id}</h1>
          
          <div className="space-y-6">
            <div>
              <h2 className="text-xl font-semibold text-gray-800 mb-2">Product Details</h2>
              <p className="text-gray-600">This is a detailed view of product {id}.</p>
            </div>

            <div className="border-t border-gray-200 pt-6">
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <p className="text-sm text-gray-600">Price</p>
                  <p className="text-2xl font-bold text-indigo-600">$99.99</p>
                </div>
                <div>
                  <p className="text-sm text-gray-600">Availability</p>
                  <p className="text-lg font-semibold text-gray-900">In Stock</p>
                </div>
              </div>
            </div>

            <div className="border-t border-gray-200 pt-6">
              <h3 className="text-lg font-semibold text-gray-800 mb-2">Description</h3>
              <p className="text-gray-600">
                This is a sample product description. You can add more details about the product here.
              </p>
            </div>

            <div className="pt-6">
              <button className="w-full bg-indigo-600 hover:bg-indigo-700 text-white font-semibold py-3 px-4 rounded-lg transition-colors duration-200">
                Add to Cart
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
