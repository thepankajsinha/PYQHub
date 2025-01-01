import { useMemo } from 'react';

export function usePYQFilter(pyqs, filters) {
  return useMemo(() => {
    return pyqs.filter((pyq) => {
      const matchesSearch = pyq.subject
        .toLowerCase()
        .includes(filters.searchTerm.toLowerCase());
      const matchesDepartment = !filters.department || pyq.department === filters.department;
      const matchesYear = !filters.year || pyq.year === filters.year;

      return matchesSearch && matchesDepartment && matchesYear;
    });
  }, [pyqs, filters.searchTerm, filters.department, filters.year]);
}