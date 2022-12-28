import React from 'react';

const Footer = () => {
  return (
    <div className='flex flex-col items-center font-["Orbitron"] z-10 w-full mt-10'>
      <span className="w-16 border-t"></span>
      <div className="mt-5">MADE WITH ❤️ BY IEEE SRM SB</div>
      <div className="text-[10px] my-4 flex gap-4">
        <a
          href="https://www.ieeesrmist.in/privacypolicy"
          target={'_blank'}
          rel="noreferrer"
        >
          PRIVACY
        </a>
        <a
          href="https://www.ieeesrmist.in/codeofconduct"
          target={'_blank'}
          rel="noreferrer"
        >
          CODE OF CONDUCT
        </a>
      </div>
    </div>
  );
};

export default Footer;
