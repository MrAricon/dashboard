'use client'
export function Footer() {
  return (
    <footer className="bg-white border-t">
      <div className="container mx-auto px-6 py-4">
        <div className="flex justify-between items-center">
          <div>
            <p className="text-gray-600 text-sm">© 2023 MyDashboard. All rights reserved.</p>
          </div>
          <div className="flex space-x-4">
            <a href="#" className="text-gray-600 hover:text-gray-800 text-sm">Terms</a>
            <a href="#" className="text-gray-600 hover:text-gray-800 text-sm">Privacy</a>
          </div>
        </div>
      </div>
    </footer>
  )
}
