import React, { useState } from 'react';
import { SearchFilters } from './SearchFilters';
import { PYQList } from './PYQList';
import { usePYQFilter } from '../hooks/usePYQFilters.jsx';
import { pyqs } from '../data/pyqs';

export function PYQDashboard() {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedDepartment, setSelectedDepartment] = useState('');
  const [selectedYear, setSelectedYear] = useState('');

  const filteredPYQs = usePYQFilter(pyqs, {
    searchTerm,
    department: selectedDepartment,
    year: selectedYear ? parseInt(selectedYear) : undefined,
  });

  return (
    <div className="space-y-6">
      <SearchFilters
        onSearchChange={setSearchTerm}
        onDepartmentChange={setSelectedDepartment}
        onYearChange={setSelectedYear}
      />
      <PYQList pyqs={filteredPYQs} />
    </div>
  );
}