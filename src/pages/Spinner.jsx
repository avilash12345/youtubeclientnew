import React from 'react';

const Spinner = () => {
  return (
    <>
    <h6 className='text-center text-xl font-semibold text-green-700'>Please wait download in progress....</h6>
    <div className="flex justify-center items-center">
      <div className="w-10 h-10 border-4 border-blue-500 border-t-transparent border-solid rounded-full animate-spin"></div>
    </div>
    </>
  );
};

export default Spinner;
