import React from 'react';
import { PYQCard } from './PYQCard';

export function PYQList({ pyqs }) {
  if (pyqs.length === 0) {
    return (
      <div className="text-center py-12">
        <p className="text-gray-500">No PYQs found matching your criteria.</p>
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {pyqs.map((pyq) => (
        <PYQCard key={pyq.id} {...pyq} />
      ))}
    </div>
  );
}