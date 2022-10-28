import React from 'react';

const Landing = () => {
  return (
    <div className="z-10  h-screen ">
      <div className="md:mt-42 md:ml-44 mt-32 ml-9 ">
        <div>
          <h1 className='md:text-7xl font-["Orbitron"] text-5xl '>
            Hello, Cloud!
          </h1>
        </div>
        <div className="mt-2">
          <button className="bg-white hover:bg-gray-300 border rounded-full px-4 py-2">
            <h1 className="text-2xl text-black">Register</h1>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Landing;
