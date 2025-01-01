import React from 'react';
import { BookOpen } from 'lucide-react';

export function Header() {
  return (
    <header className="bg-indigo-600 text-white py-6 px-4 shadow-lg">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <div className="flex items-center space-x-3">
          <BookOpen className="h-8 w-8" />
          <h1 className="text-2xl font-bold">University PYQ Portal</h1>
        </div>
      </div>
    </header>
  );
}