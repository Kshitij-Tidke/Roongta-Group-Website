import React from 'react';

function Heading({ title, className }) {
  return (
    <>
      <div className='pt-5 my-7'>
      <h2 className={`text-center text-3xl font-bold ${className}`}>
          {title}
          </h2>
      </div>
    </>
  );
}

export default Heading;
