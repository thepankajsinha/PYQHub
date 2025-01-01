import React from 'react';
import { FileText, Download } from 'lucide-react';

export function PYQCard({ subject, year, semester, department, pdfUrl }) {
  return (
    <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
      <div className="flex items-start justify-between">
        <div className="flex-1">
          <h3 className="text-lg font-semibold text-gray-900">{subject}</h3>
          <div className="mt-2 space-y-1">
            <p className="text-sm text-gray-600">Department: {department}</p>
            <p className="text-sm text-gray-600">Year: {year}</p>
            <p className="text-sm text-gray-600">Semester: {semester}</p>
          </div>
        </div>
        <FileText className="h-6 w-6 text-indigo-600" />
      </div>
      <div className="mt-4">
        <a
          href={pdfUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center px-4 py-2 bg-indigo-600 text-white rounded-md hover:bg-indigo-700 transition-colors"
        >
          <Download className="h-4 w-4 mr-2" />
          Download PDF
        </a>
      </div>
    </div>
  );
}