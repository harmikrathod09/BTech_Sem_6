import React from 'react'
import prisma from '../lib/prisma';
import Link from 'next/link';
import DeleteBtn from '../ui/deleteBtn';
import ProductCard from '../ui/ProductCard';

export default async function ProductPage() {
  const product = await prisma.product.findMany();
  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-7xl mx-auto px-4">
        <div className="mb-6">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-3xl font-semibold text-slate-900">Products</h1>
              <p className="text-sm text-gray-500">Manage your product inventory</p>
            </div>
            <div>
              <Link href="/product/add" className="inline-flex items-center px-3 py-2 bg-blue-600 text-white rounded-md text-sm font-semibold hover:bg-blue-700">
                + New Product
              </Link>
            </div>
          </div>
        </div>

        {/* Mobile: cards */}
        <div className="md:hidden grid grid-cols-1 sm:grid-cols-2 gap-4">
          {product.map((p: any) => (
            <ProductCard key={p.id} product={p} />
          ))}
        </div>

        {/* Desktop: table */}
        <div className="hidden md:block bg-white shadow rounded-lg overflow-hidden">
          <div className="overflow-x-auto">
            <table className="min-w-full divide-y divide-gray-200">
              <thead className="bg-gray-50">
                <tr>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">ID</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Name</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Quantity</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Price</th>
                  <th className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">Actions</th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                {product.map((p: any) => (
                  <tr key={p.id} className="hover:bg-gray-50">
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{p.id}</td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-slate-900">{p.name}</td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${
                        p.quantity > 50 ? 'bg-green-100 text-green-800' : p.quantity > 20 ? 'bg-yellow-100 text-yellow-800' : 'bg-red-100 text-red-800'
                      }`}>{p.quantity}</span>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-semibold text-slate-900">${p.price.toString()}</td>
                    <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                      <div className="flex items-center justify-end gap-3">
                        <Link href={`/product/${p.id}`} className="text-blue-600 hover:text-blue-800 hover:underline">View</Link>
                        <DeleteBtn id={p.id} />
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  )
}