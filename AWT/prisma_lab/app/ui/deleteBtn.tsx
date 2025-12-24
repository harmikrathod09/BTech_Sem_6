"use client";

import React from "react";
import deleteProduct from "../action/deleteProduct";

export default function DeleteBtn({ id }: { id: number }) {
  const handleDelete = async () => {
    const ok = confirm("Are you sure you want to delete this product?");
    if (!ok) return;

    await deleteProduct(id);
  };

  return (
    <button
      onClick={handleDelete}
      aria-label={`Delete product ${id}`}
      className={`inline-flex items-center gap-2 rounded-md px-3 py-1.5 text-sm font-medium text-red-600 border border-red-200 hover:bg-red-50 hover:text-red-700 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-1 transition-all duration-200`}
    >
      🗑️ Delete
    </button>
  );
}
