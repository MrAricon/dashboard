'use client'

import { Bell, Search, Menu } from 'lucide-react'

export function Header({ setMobileMenuOpen }) {
  return (
    <header className="flex items-center justify-between px-6 py-4 bg-white border-b">
      <div className="flex items-center">
        <button
          onClick={() => setMobileMenuOpen(true)}
          className="text-gray-500 focus:outline-none lg:hidden mr-4"
        >
          <Menu className="w-6 h-6" />
        </button>
        <h1 className="text-2xl font-semibold text-gray-800">Dashboard</h1>
      </div>
      <div className="flex items-center space-x-4">
        <div className="relative">
          <span className="absolute inset-y-0 left-0 flex items-center pl-3">
            <Search className="w-5 h-5 text-gray-500" />
          </span>
          <input 
            className="w-full py-2 pl-10 pr-4 text-gray-700 bg-gray-100 border border-transparent rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent" 
            type="search" 
            placeholder="Search..." 
          />
        </div>
        <button className="relative text-gray-700 focus:outline-none">
          <Bell className="w-6 h-6" />
          <span className="absolute top-0 right-0 inline-flex items-center justify-center w-4 h-4 text-xs font-bold text-white bg-red-500 rounded-full">3</span>
        </button>
        <div className="relative">
          <button className="relative z-10 block w-8 h-8 overflow-hidden rounded-full shadow focus:outline-none">
            <img 
              className="object-cover w-full h-full" 
              src="https://images.unsplash.com/photo-1528892952291-009c663ce843?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=296&q=80" 
              alt="Your avatar" 
            />
          </button>
        </div>
      </div>
    </header>
  )
}
