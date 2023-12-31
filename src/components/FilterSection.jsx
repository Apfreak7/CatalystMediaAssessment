import React from 'react';

export default function FilterSection({ filterTitle, children }) {
  return (
    <div className='flex flex-col'>
      <span className='mb-2 font-light text-xl text-gray-700'>{filterTitle}</span>
      {children}
    </div>
  );
}
