import React from 'react';

export function SearchFilters({ onSearchChange, onDepartmentChange, onYearChange }) {
  return (
    <div className="bg-white p-4 rounded-lg shadow-md space-y-4">
      <div>
        <input
          type="text"
          placeholder="Search by subject..."
          onChange={(e) => onSearchChange(e.target.value)}
          className="w-full p-2 border rounded-md"
        />
      </div>
      <div className="grid grid-cols-2 gap-4">
        <select
          onChange={(e) => onDepartmentChange(e.target.value)}
          className="p-2 border rounded-md"
        >
          <option value="">All Departments</option>
          <option value="Computer Science">Computer Science</option>
          <option value="Electrical">Electrical</option>
          <option value="Mechanical">Mechanical</option>
        </select>
        <select
          onChange={(e) => onYearChange(e.target.value)}
          className="p-2 border rounded-md"
        >
          <option value="">All Years</option>
          <option value="2023">2023</option>
          <option value="2022">2022</option>
          <option value="2021">2021</option>
        </select>
      </div>
    </div>
  );
}