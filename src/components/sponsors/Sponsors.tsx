import React from 'react';
import xyz from '../../assets/img/xyzLogo.png';
import cake from '../../assets/img/cake.png';

const Sponsors = () => {
  return (
    <div
      className="flex flex-col items-center z-10 w-full pb-40 mx-auto"
      id="sponsors"
    >
      <div className='text-[40px] font-["Orbitron"] my-16'>Sponsors:</div>
      <div>
        <div className="flex space-x-3 items-center mx-auto justify-between p-2">
          <img
            className="h-[20%] w-[40%] md:h-20 md:w-40"
            src={xyz}
            alt="xyz logo"
          />
          <img
            className="h-[20%] w-[50%] md:h-20 md:w-70"
            src={cake}
            alt="cake logo"
          />
        </div>
      </div>
    </div>
  );
};

export default Sponsors;
