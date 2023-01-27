import React from 'react';
import KK from '../../assets/img/kkpic-removedbg-.png';
import { AiFillGithub, AiFillLinkedin } from 'react-icons/ai';
import { FaGlobe } from 'react-icons/fa';

const Speakers = () => {
  const socials = [
    {
      Icon: AiFillGithub,
      url: 'https://github.com/CodeBuildder',
    },
    {
      Icon: AiFillLinkedin,
      url: 'https://www.linkedin.com/in/kaushikkums/',
    },
    {
      Icon: FaGlobe,
      url: 'https://kaushiks.xyz/',
    },
  ];

  const handleOpenUrl = (url: string) => () => {
    window.open(url, '_blank');
  };

  return (
    <div className="flex flex-col items-center z-10 w-full">
      <div className='text-[40px] font-["Orbitron"] mt-16 mb-10'>Speaker</div>
      <img className="h-60 w-60 mt-10" src={KK} alt="KK dp" />
      <div className='text-[32px] font-["Lato"] my-8'>Kaushik Kumaran</div>
      <div className='text-[16px] font-["Raleway"]'>
        Cloud Engineer at Searce Inc
      </div>
      <div className='text-[16px] font-["Raleway"] mb-8'>
        Webmaster at IEEE SRM WAD
      </div>
      <div className="flex mb-20 xl:mb-0 lg:pb-8 text-4xl gap-8">
        {socials.map(({ Icon, url }, index) => (
          <Icon
            className="hover:cursor-pointer"
            onClick={handleOpenUrl(url)}
            key={index}
          />
        ))}
      </div>
    </div>
  );
};

export default Speakers;
