import React from 'react';

function Header() {
  return (
    <div className='flex flex-col gap-5 items-center justify-center text-white px-4 sm:px-6 lg:px-8 mt-10'>
      <h1 className='text-3xl sm:text-4xl md:text-6xl font-bold text-center mb-3'>
        Master Your Exams with PYQs
      </h1>
      <p className='text-lg sm:text-xl md:text-3xl text-center'>
        "Access Previous Year Questions and Boost Your Exam Preparation. Download Now!"
      </p>
    </div>
  );
}

export default Header;