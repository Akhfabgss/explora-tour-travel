import React from 'react'

const navbar = () => {
  return (
    <nav className="flex items-center justify-between px-6 lg:px-12 py-6">
        <div className="flex items-center gap-2">
          <div className="w-9 h-9 bg-purple-600 text-white flex items-center justify-center font-bold rounded">
            T
          </div>
          <span className="font-semibold text-lg">Treact</span>
        </div>

        <ul className="hidden md:flex gap-8 text-sm font-medium text-gray-700">
          <li className="hover:text-purple-600 cursor-pointer">About</li>
          <li className="hover:text-purple-600 cursor-pointer">Blog</li>
          <li className="hover:text-purple-600 cursor-pointer">Pricing</li>
          <li className="hover:text-purple-600 cursor-pointer">Login</li>
        </ul>
      </nav>
  )
}

export default navbar