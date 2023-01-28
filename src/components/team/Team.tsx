import React from 'react';
import Footer from '../layouts/Footer';
import teammembers from './teamData';
import SpeakerInfo from './tamplet2'

const Team = () => {
  const team = teammembers.map(info =>{
    return <SpeakerInfo
              name = {info.name}
              image = {info.image}
              linkedin = {info.linkedin}
            />
})
  return (
    <div className="flex flex-col items-center z-10 w-full">
      <div className='text-[40px] font-["Orbitron"] mt-16 mb-10'>Team</div>
      <div className='grid grid-cols-2 gap-16 md:grid-cols-3'>
      {team}
      </div>
      <Footer />
    </div>
  );
};

export default Team;