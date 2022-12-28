import React from 'react';
import { FaAws } from 'react-icons/fa';
import { SiGooglecloud } from 'react-icons/si';
import { VscRocket } from 'react-icons/vsc';

const Perks = () => {
  const techstacks = [
    {
      Icon: FaAws,
      title: 'Amazon Web Services (AWS)',
      description:
        'AWS is designed to allow application providers, ISVs, and vendors to quickly and securely host your applications – whether an existing application or a new SaaS-based application.',
    },
    {
      Icon: SiGooglecloud,
      title: 'Google Cloud Platform (GCP)',
      description:
        'Meet your business challenges head on with cloud computing services from Google, including data management, hybrid & multi-cloud, and AI & ML.',
    },
    {
      Icon: VscRocket,
      title: 'Learn how to deploy',
      description:
        'Deploy Secure, Reliable, & Scalable Websites, Apps or Processes with Free Cloud Computing.Deploy Secure, Reliable, & Scalable Websites, Apps or Processes with Cloud Computing Services.',
    },
  ];

  return (
    <div className="z-10 w-full pb-40  md:px-20" id="perks">
      <h2 className='font-["Orbitron"] font-semibold text-[40px] leading-[50.16px] text-center'>
        What's in it for you?
      </h2>
      <div className="font-[Raleway] text-[16px] leading-[24px] mt-[80px] max-w-4xl mx-auto px-4">
        {techstacks.map(({ Icon, title, description }, index) => (
          <div
            key={index}
            className={`flex flex-col text-center mb-16 sm:mb-10 last-of-type:mb-0 md:flex-row md:text-left md:even:flex-row-reverse gap-y-6 gap-x-10 items-center md:even:text-right`}
          >
            <Icon className="text-[80px] md:text-[140px] text-white" />
            <div className="">
              <h4 className="text-2xl font-semibold">{title}</h4>
              <p className="mt-8 md:mt-4">{description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Perks;
