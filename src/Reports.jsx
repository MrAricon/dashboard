'use client'
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts'

const data = [
  { name: 'Jan', Sales: 4000, Expenses: 2400 },
  { name: 'Feb', Sales: 3000, Expenses: 1398 },
  { name: 'Mar', Sales: 2000, Expenses: 9800 },
  { name: 'Apr', Sales: 2780, Expenses: 3908 },
  { name: 'May', Sales: 1890, Expenses: 4800 },
  { name: 'Jun', Sales: 2390, Expenses: 3800 },
]

export function Reports() {
  return (
    <main className="flex-1 overflow-x-hidden overflow-y-auto bg-gray-100">
      <div className="container mx-auto px-6 py-8">
        <h3 className="text-3xl font-medium text-gray-700 mb-6">Reports</h3>
        <div className="bg-white shadow-md rounded-lg p-6">
          <h4 className="text-xl font-semibold mb-4">Sales vs Expenses</h4>
          <div style={{ height: '400px' }}>
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={data}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip />
                <Legend />
                <Bar dataKey="Sales" fill="#8884d8" />
                <Bar dataKey="Expenses" fill="#82ca9d" />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>
      </div>
    </main>
  )
}
