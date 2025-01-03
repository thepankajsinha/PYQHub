import React from 'react';
import { usePYQ } from '../context/PYQContext';
import { Download  } from 'lucide-react';

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
          <div className="flex justify-between items-start mb-1">
            <div>
              <h3 className="text-lg font-semibold text-black">{pyq.subject}</h3>
              <p className="text-sm text-gray-600">{pyq.examtype}</p>
              <p className="text-sm text-gray-600">Semester: {pyq.semester}</p>
            </div>
            <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-blue-100 text-blue-800">
              {pyq.year}
            </span>
          </div>
          
          <p className="text-sm text-gray-600 mb-4">{pyq.branch}</p>
          
          <a
            href={pyq.downloadUrl}
            className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-blue-600 hover:bg-black"
          >
            <Download  className="w-4 h-4 mr-2" />
            Download
          </a>
        </div>
      ))}
    </div>
  );
}