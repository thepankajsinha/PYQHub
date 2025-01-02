import React, { createContext, useContext, useState } from 'react';
import pyqData from '../data/pyqs.js';

const PYQContext = createContext(undefined);


export function PYQProvider({ children }) {
  const [selectedBranch, setSelectedBranch] = useState('');
  const [selectedYear, setSelectedYear] = useState(null);

  const filteredPYQs = pyqData.filter(pyq => {
    const isBranchMatch = !selectedBranch || pyq.branch === selectedBranch;
    const isYearMatch = !selectedYear || pyq.year === selectedYear;
    return isBranchMatch && isYearMatch;
  });

  return (
    <PYQContext.Provider value={{ selectedBranch, selectedYear, setSelectedBranch, setSelectedYear, filteredPYQs }}>
      {children}
    </PYQContext.Provider>
  );
}

export const usePYQ = () => useContext(PYQContext);
