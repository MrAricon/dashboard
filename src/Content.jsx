'use client'
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts'
import { Users, DollarSign, ShoppingCart } from 'lucide-react'

const data = [
  { name: 'Jan', Sales: 4000, Users: 2400 },
  { name: 'Feb', Sales: 3000, Users: 1398 },
  { name: 'Mar', Sales: 2000, Users: 9800 },
  { name: 'Apr', Sales: 2780, Users: 3908 },
  { name: 'May', Sales: 1890, Users: 4800 },
  { name: 'Jun', Sales: 2390, Users: 3800 },
]

export function Content() {
  return (
    <main className="flex-1 overflow-x-hidden overflow-y-auto bg-gray-100">
      <div className="container mx-auto px-6 py-8">
        <h3 className="text-3xl font-medium text-gray-700 mb-6">Dashboard Overview</h3>
        <div className="grid gap-6 mb-8 md:grid-cols-2 xl:grid-cols-3">
          <div className="flex items-center p-4 bg-white rounded-lg shadow-xs">
            <div className="p-3 mr-4 text-blue-500 bg-blue-100 rounded-full">
              <Users className="w-5 h-5" />
            </div>
            <div>
              <p className="mb-2 text-sm font-medium text-gray-600">Total Users</p>
              <p className="text-lg font-semibold text-gray-700">8,282</p>
            </div>
          </div>
          <div className="flex items-center p-4 bg-white rounded-lg shadow-xs">
            <div className="p-3 mr-4 text-green-500 bg-green-100 rounded-full">
              <DollarSign className="w-5 h-5" />
            </div>
            <div>
              <p className="mb-2 text-sm font-medium text-gray-600">Total Revenue</p>
              <p className="text-lg font-semibold text-gray-700">$200,521</p>
            </div>
          </div>
          <div className="flex items-center p-4 bg-white rounded-lg shadow-xs">
            <div className="p-3 mr-4 text-pink-500 bg-pink-100 rounded-full">
              <ShoppingCart className="w-5 h-5" />
            </div>
            <div>
              <p className="mb-2 text-sm font-medium text-gray-600">Total Sales</p>
              <p className="text-lg font-semibold text-gray-700">215,542</p>
            </div>
          </div>
        </div>
        <div className="mt-8 bg-white rounded-lg shadow-xs">
          <div className="p-4 border-b">
            <h4 className="text-lg font-semibold text-gray-600">Sales and Users</h4>
          </div>
          <div className="p-4" style={{ height: '400px' }}>
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={data}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip />
                <Legend />
                <Bar dataKey="Sales" fill="#8884d8" />
                <Bar dataKey="Users" fill="#82ca9d" />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>
        <div className="mt-8 bg-white rounded-lg shadow-xs overflow-hidden">
          <div className="p-4 border-b">
            <h4 className="text-lg font-semibold text-gray-600">Recent Activity</h4>
          </div>
          <table className="w-full">
            <thead>
              <tr className="text-xs font-semibold tracking-wide text-left text-gray-500 uppercase border-b bg-gray-50">
                <th className="px-4 py-3">Name</th>
                <th className="px-4 py-3">Title</th>
                <th className="px-4 py-3">Status</th>
                <th className="px-4 py-3">Role</th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y">
              <tr className="text-gray-700">
                <td className="px-4 py-3">
                  <div className="flex items-center text-sm">
                    <div className="relative hidden w-8 h-8 mr-3 rounded-full md:block">
                      <img className="object-cover w-full h-full rounded-full" src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80" alt="" />
                    </div>
                    <div>
                      <p className="font-semibold">John Doe</p>
                      <p className="text-xs text-gray-600">john@example.com</p>
                    </div>
                  </div>
                </td>
                <td className="px-4 py-3 text-sm">Software Engineer</td>
                <td className="px-4 py-3 text-xs">
                  <span className="px-2 py-1 font-semibold leading-tight text-green-700 bg-green-100 rounded-full">Active</span>
                </td>
                <td className="px-4 py-3 text-sm">Owner</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </main>
  )
}
