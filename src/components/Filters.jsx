import React from 'react';
import { usePYQ } from '../context/PYQContext';

const branches = ["Computer Science", "Electrical", "Mechanical"];
const years = [2023, 2022, 2021, 2020];

export default function Filters() {
  const { setSelectedBranch, setSelectedYear, selectedBranch, selectedYear } = usePYQ();

  return (
    <div className="flex flex-col md:flex-row gap-4 mb-8">
      <div className="w-full md:flex-1">
        <label htmlFor="branch" className="block text-xl font-medium text-blue-700 mb-2">
          Branch
        </label>
        <select
          id="branch"
          className="w-full p-2 border border-gray-300 rounded-md "
          value={selectedBranch}
          onChange={(e) => setSelectedBranch(e.target.value)}
        >
          <option value="">All Branches</option>
          {branches.map((branch) => (
            <option key={branch} value={branch}>
              {branch}
            </option>
          ))}
        </select>
      </div>

      <div className="w-full md:flex-1">
        <label htmlFor="year" className="block text-xl font-medium text-blue-700 mb-2">
          Year
        </label>
        <select
          id="year"
          className="w-full p-2 border border-gray-300 rounded-md "
          value={selectedYear || ''}
          onChange={(e) => setSelectedYear(e.target.value ? Number(e.target.value) : null)}
        >
          <option value="">All Years</option>
          {years.map((year) => (
            <option key={year} value={year}>
              {year}
            </option>
          ))}
        </select>
      </div>
    </div>
  );
}
