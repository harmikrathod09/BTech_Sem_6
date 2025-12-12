import React from 'react'

export default function DashboardPage() {
  return (
    <div className="min-h-screen bg-gray-50 p-6">
      <div className="max-w-7xl mx-auto">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900">Admin Dashboard</h1>
          <p className="text-gray-600 mt-2">Welcome to the admin dashboard</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-white rounded-lg shadow p-6">
            <h2 className="text-lg font-semibold text-gray-800 mb-2">Users</h2>
            <p className="text-gray-600 text-sm">Manage user accounts</p>
            <a href="/user" className="text-indigo-600 hover:text-indigo-700 text-sm font-medium mt-4 inline-block no-underline">
              View Users →
            </a>
          </div>

          <div className="bg-white rounded-lg shadow p-6">
            <h2 className="text-lg font-semibold text-gray-800 mb-2">Products</h2>
            <p className="text-gray-600 text-sm">Manage product catalog</p>
            <a href="/product" className="text-indigo-600 hover:text-indigo-700 text-sm font-medium mt-4 inline-block no-underline">
              View Products →
            </a>
          </div>

          <div className="bg-white rounded-lg shadow p-6">
            <h2 className="text-lg font-semibold text-gray-800 mb-2">Settings</h2>
            <p className="text-gray-600 text-sm">Configure system settings</p>
            <a href="#" className="text-indigo-600 hover:text-indigo-700 text-sm font-medium mt-4 inline-block no-underline">
              Open Settings →
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}
