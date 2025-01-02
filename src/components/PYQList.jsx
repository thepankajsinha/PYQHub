import React from 'react';
import { usePYQ } from '../context/PYQContext';
import { FileDown } from 'lucide-react';

export default function PYQList() {
  const { filteredPYQs } = usePYQ();

  if (filteredPYQs.length === 0) {
    return (
      <div className="text-center py-8">
        <p className="text-gray-500">No PYQs found matching your filters.</p>
      </div>
    );
  }

  return (
    <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
      {filteredPYQs.map((pyq) => (
        <div
          key={pyq.id}
          className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow"
        >
          <div className="flex justify-between items-start mb-4">
            <div>
              <h3 className="text-lg font-semibold text-gray-900">{pyq.subject}</h3>
              <p className="text-sm text-gray-600">{pyq.title}</p>
            </div>
            <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-blue-100 text-blue-800">
              {pyq.year}
            </span>
          </div>
          
          <p className="text-sm text-gray-600 mb-4">{pyq.branch}</p>
          
          <a
            href={pyq.downloadUrl}
            className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
          >
            <FileDown className="w-4 h-4 mr-2" />
            Download
          </a>
        </div>
      ))}
    </div>
  );
}