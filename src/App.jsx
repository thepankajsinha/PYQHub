import React from 'react';
import Filters from './components/Filters';
import PYQList from './components/PYQList';

function App() {
  return (
      <div className="min-h-screen bg-gray-50">
        <header className="bg-white shadow-sm">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
            <div className="flex items-center">
              <h1 className="text-3xl font-bold text-gray-900">PYQ Download Portal</h1>
            </div>
          </div>
        </header>

        <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="bg-white rounded-lg shadow-sm p-6">
            <h2 className="text-xl font-semibold text-gray-900 mb-6">
              Find Previous Year Question Papers
            </h2>
            <Filters />
            <PYQList />
          </div>
        </main>
      </div>
  );
}

export default App;