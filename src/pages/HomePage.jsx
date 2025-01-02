import React from 'react'
import Filters from '../components/Filters';
import PYQList from '../components/PYQList';
import Navbar from '../components/Navbar';
import Header from '../components/Header';

function HomePage() {
  return (
    <div className="bg-gradient-to-t from-gray-700 via-gray-900 to-black min-h-screen bg-gray-50">
      <Navbar/>
      <Header/>
        <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="rounded-lg shadow-sm p-6">
            <Filters />
            <PYQList />
          </div>
        </main>
      </div>
  )
}

export default HomePage