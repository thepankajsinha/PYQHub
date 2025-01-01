import React from 'react';
import { Header } from './components/Header';
import { PYQDashboard } from './components/PYQDashboard';

function App() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      <main className="max-w-7xl mx-auto px-4 py-8">
        <PYQDashboard />
      </main>
    </div>
  );
}

export default App;