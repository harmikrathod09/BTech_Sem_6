"use client";

import Link from "next/link";
import DeleteBtn from "./deleteBtn";
import React from "react";

export default function ProductCard({ product }: { product: any }) {
  return (
    <article className="bg-white rounded-lg shadow-sm p-4 flex flex-col justify-between hover:shadow-md transition-shadow">
      <div>
        <div className="flex items-start justify-between">
          <h3 className="text-lg font-semibold text-slate-900">{product.name}</h3>
          <span className="text-sm text-gray-500">#{product.id}</span>
        </div>

        <p className="mt-3 text-sm text-gray-600 line-clamp-3">{product.description || 'No description available.'}</p>

        <div className="mt-4 flex items-center gap-3">
          <div className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-gray-100 text-gray-800">
            ${product.price.toString()}
          </div>
          <div className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${product.quantity > 50 ? 'bg-green-100 text-green-800' : product.quantity > 20 ? 'bg-yellow-100 text-yellow-800' : 'bg-red-100 text-red-800'}`}>
            {product.quantity}
          </div>
        </div>
      </div>

      <div className="mt-4 flex items-center justify-between gap-3">
        <Link href={`/product/${product.id}`} className="text-sm text-blue-600 hover:text-blue-800">
          View
        </Link>
        <div>
          <DeleteBtn id={product.id} />
        </div>
      </div>
    </article>
  );
}
