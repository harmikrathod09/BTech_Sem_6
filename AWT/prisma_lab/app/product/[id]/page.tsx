import prisma from '@/app/lib/prisma';
import Link from 'next/link';
import DeleteBtn from '@/app/ui/deleteBtn';
import React from 'react'

export default async function ProductById({ params }: { params: { id: string } }) {
    const { id: idParam } = await params;
    const id = Number(idParam);
    
    const product = await prisma.product.findUnique({
        where: { id }
    });

    if (!product) {
        return (
            <div className="min-h-screen bg-gray-50 flex items-center justify-center px-4">
                <div className="text-center">
                    <h1 className="text-4xl font-bold text-gray-900 mb-2">Product Not Found</h1>
                    <p className="text-gray-600 mb-6">The product you're looking for doesn't exist.</p>
                    <Link href="/product" className="text-blue-600 hover:text-blue-800 font-medium">
                        ← Back to Products
                    </Link>
                </div>
            </div>
        );
    }

    const stockStatus = product.quantity > 50 ? 'In Stock' : product.quantity > 20 ? 'Low Stock' : 'Very Low Stock';
    const stockColor = product.quantity > 50 ? 'text-green-600' : product.quantity > 20 ? 'text-yellow-600' : 'text-red-600';

    return (
        <div className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto">
                {/* Back Button */}
                <Link 
                    href="/product" 
                    className="inline-flex items-center text-sm text-gray-600 hover:text-gray-900 mb-6 transition-colors"
                >
                    ← Back to Products
                </Link>

                {/* Product Card */}
                <div className="bg-white rounded-lg shadow-lg overflow-hidden">
                    {/* Header Section */}
                    <div className="bg-gradient-to-r from-blue-500 to-blue-600 px-8 py-6">
                        <h1 className="text-3xl font-bold text-white mb-2">{product.name}</h1>
                        <p className="text-blue-100 text-sm">Product ID: {product.id}</p>
                    </div>

                    {/* Content Section */}
                    <div className="px-8 py-6">
                        {/* Description */}
                        <div className="mb-8">
                            <h2 className="text-sm font-semibold text-gray-500 uppercase tracking-wider mb-2">
                                Description
                            </h2>
                            <p className="text-gray-700 text-lg leading-relaxed">
                                {product.description || 'No description available.'}
                            </p>
                        </div>

                        {/* Product Details Grid */}
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            {/* Price Card */}
                            <div className="bg-gray-50 rounded-lg p-6 border border-gray-200">
                                <div className="flex items-center justify-between">
                                    <div>
                                        <p className="text-sm font-medium text-gray-500 mb-1">Price</p>
                                        <p className="text-3xl font-bold text-gray-900">
                                            ${product.price.toString()}
                                        </p>
                                    </div>
                                    <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center">
                                        <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                                        </svg>
                                    </div>
                                </div>
                            </div>

                            {/* Quantity Card */}
                            <div className="bg-gray-50 rounded-lg p-6 border border-gray-200">
                                <div className="flex items-center justify-between">
                                    <div>
                                        <p className="text-sm font-medium text-gray-500 mb-1">Quantity Available</p>
                                        <p className="text-3xl font-bold text-gray-900 mb-1">
                                            {product.quantity ?? 0}
                                        </p>
                                        <p className={`text-sm font-semibold ${stockColor}`}>
                                            {stockStatus}
                                        </p>
                                    </div>
                                    <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center">
                                        <svg className="w-6 h-6 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" />
                                        </svg>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Action Buttons */}
                        <div className="mt-8 flex flex-col sm:flex-row gap-4">
                            <button className="flex-1 bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors shadow-sm">
                                Add to Cart
                            </button>
                            <div className="flex-1 flex gap-4">
                                <Link href={`/product/${product.id}/edit`} className="flex-1 inline-flex items-center justify-center bg-gray-200 text-gray-700 px-6 py-3 rounded-lg font-semibold hover:bg-gray-300 transition-colors">
                                    Edit Product
                                </Link>
                                <DeleteBtn id={product.id} />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}