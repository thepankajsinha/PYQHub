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
        <div className='p-4 md:p-8'>
          <Filters />
          <PYQList />
        </div>
      </div>
  )
}

export default HomePage
