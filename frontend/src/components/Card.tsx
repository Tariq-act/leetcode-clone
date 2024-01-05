import React from 'react';

const Card = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className='max-w-sm p-6 border border-gray-200 rounded-lg shadow-sm'>
      {children}
    </div>
  );
};

export default Card;
