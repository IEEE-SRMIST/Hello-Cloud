import React from 'react';
import Footer from '../layouts/Footer';
import speakers from './data';
import SpeakerInfo from './Tamplet'

const Speakers = () => {
  const spokeperson = speakers.map(info =>{
    return <SpeakerInfo
              name = {info.name}
              image = {info.image}
              des1 = {info.des1}
              des2 = {info.des2}
              github = {info.github}
              linkedin = {info.linkedin}
              portfolio = {info.portfolio}
            />
})
  return (
    <div className="flex flex-col items-center z-10 w-full">
      <div className='text-[40px] font-["Orbitron"] mt-16 mb-10'>Speaker</div>
      <div className='flex flex-col item-center justify-around md:flex-row'>
      {spokeperson}
      </div>
      <Footer />
    </div>
  );
};

export default Speakers;