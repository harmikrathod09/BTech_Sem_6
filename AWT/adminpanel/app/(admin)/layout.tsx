import Link from 'next/link'
import React from 'react'

export default function layout({children}:{children:React.ReactNode}) {
  return (
    <div className="min-h-screen bg-gray-50">
      <nav className="bg-white shadow-sm border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex justify-between items-center h-16">
            <div className="flex space-x-8">
              <Link href="/dashboard" className="text-gray-700 hover:text-indigo-600 font-medium transition-colors no-underline">
                Dashboard
              </Link>
              <Link href="/user" className="text-gray-700 hover:text-indigo-600 font-medium transition-colors no-underline">
                Users
              </Link>
            </div>
            <div>
              <Link href="/login" className="text-gray-700 hover:text-indigo-600 font-medium transition-colors no-underline">
                Logout
              </Link>
            </div>
          </div>
        </div>
      </nav>
      {children}
    </div>
  )
}
