'use client'
import { Home, FileText, Users, Settings, X } from 'lucide-react'

const navItems = [
  { icon: Home, label: 'Dashboard', href: '/', page: 'dashboard' },
  { icon: FileText, label: 'Reports', href: '/', page: 'reports' },
  { icon: Users, label: 'Users', href: '/', page: 'users' },
  { icon: Settings, label: 'Settings', href: '/', page: 'settings' },
]

export function Sidebar({ open, setOpen, mobileMenuOpen, setCurrentPage }) {
  const handleNavigation = (page) => {
    setCurrentPage(page)
    if (setOpen) setOpen(false)
  }

  return (
    <div className={`${open ? 'translate-x-0' : '-translate-x-full'} ${mobileMenuOpen ? 'block' : 'hidden'} fixed inset-y-0 left-0 z-30 w-64 bg-gray-900 text-white transition-transform duration-300 ease-in-out lg:translate-x-0 lg:static lg:inset-0 lg:block`}>
      <div className="flex items-center justify-between h-16 bg-gray-800 px-4">
        <span className="text-xl font-semibold">MyDashboard</span>
        {setOpen && (
          <button
            onClick={() => setOpen(false)}
            className="lg:hidden p-2 rounded-md hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-gray-600"
          >
            <X className="w-5 h-5" />
            <span className="sr-only">Close sidebar</span>
          </button>
        )}
      </div>
      <nav className="mt-5">
        {navItems.map((item, index) => (
          <a
            key={index}
            href={item.href}
            className="flex items-center px-6 py-3 text-gray-300 hover:bg-gray-800 hover:text-white transition-colors duration-200"
            onClick={(e) => {
              e.preventDefault(); // Prevent the default navigation if you handle it manually
              handleNavigation(item.page); // Call your navigation handler
            }}
          >
            <item.icon className="w-5 h-5 mr-3" />
            {item.label}
          </a>
        ))}
      </nav>
    </div>
  )
}
