import React from 'react';
import img from '../../assets/Untitled.png';

export const DashBoard = () => {
  return (
    <div className='flex flex-col items-center justify-center h-screen'>
      <h2 className='text-2xl mb-4 ml-5'>Weather Analysis </h2>
      <div className='mb-4'>
        <img src={img} alt="Regression Graph" className='max-w-full h-auto' />
      </div>
    </div>
  );
};

export default DashBoard;
