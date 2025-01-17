import { useState } from 'react'
import { Sidebar } from './Sidebar'
import { Header } from './Header'
import { Content } from './Content'
import { Reports } from './Reports'
import { Users } from './Users'
import { Settings } from './Settings'
import { Footer } from './Footer'

export default function App() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [currentPage, setCurrentPage] = useState('dashboard')

  const renderPage = () => {
    switch(currentPage) {
      case 'dashboard':
        return <Content />;º
      case 'reports':
        return <Reports />;
      case 'users':
        return <Users />;
      case 'settings':
        return <Settings />;
      default:
        return <Content />;
    }
  }

  return (
    <div className="flex h-screen bg-gray-100">
      <Sidebar 
        mobileMenuOpen={mobileMenuOpen} 
        setMobileMenuOpen={setMobileMenuOpen}
        setCurrentPage={setCurrentPage}
      />
      <div className="flex flex-col flex-1 overflow-hidden">
        <Header setMobileMenuOpen={setMobileMenuOpen} />
        {renderPage()}
        <Footer />
      </div>
      {mobileMenuOpen && (
        <div className="fixed inset-0 z-50 lg:hidden" role="dialog" aria-modal="true">
          <div className="fixed inset-0 bg-gray-600 bg-opacity-75" aria-hidden="true"></div>
          <div className="relative flex flex-col w-full max-w-xs overflow-y-auto bg-white shadow-xl">
            <Sidebar 
              open={true} 
              setOpen={setMobileMenuOpen} 
              mobileMenuOpen={mobileMenuOpen}
              setCurrentPage={setCurrentPage}
            />
          </div>
        </div>
      )}
    </div>
  )
}
