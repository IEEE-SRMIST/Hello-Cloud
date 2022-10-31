// import React from 'react';
import Logo from '../../assets/img/ieee.png';
import sponser from '../../assets/img/salesForce-removedbg.png';
import React, { useState, useEffect } from 'react';
import { AiOutlineMenu, AiOutlineClose } from 'react-icons/ai';

const Navbar = () => {
  const [nav, setNav] = useState(false);
  const [color, setColor] = useState('transparent');
  const [textColor, setTextColor] = useState('white');

  const handleNav = () => {
    setNav(!nav);
  };

  useEffect(() => {
    const changeColor = () => {
      if (window.scrollY >= 90) {
        setColor('transparent');
        setTextColor('#ffffff');
      } else {
        setColor('transparent');
        setTextColor('#ffffff');
      }
    };
    window.addEventListener('scroll', changeColor);
  }, []);

  return (
    <div
      style={{ backgroundColor: `${color}` }}
      className=" left-0 top-0 w-full z-10 ease-in duration-300"
    >
      <div className="max-w-[1240px] m-auto flex justify-between items-center p-4 text-white">
        <div className="space-x-2">
          <a href="https://www.ieeesrmist.in/" target="_blank" rel="noreferrer">
            <img src={Logo} alt="IEEE Logo" className="md:h-36 h-24 inline" />
          </a>
          <a
            href="https://www.linkedin.com/company/salesforce-student-group/"
            target="_blank"
            rel="noreferrer"
          >
            <img
              src={sponser}
              alt="Sales Force logo"
              className="md:h-36 h-24 inline "
            />
          </a>
        </div>
        <ul style={{ color: `${textColor}` }} className="hidden md:flex">
          <li className="p-3 text-2xl hover:text-blue-600">
            <a
              href="https://www.ieeesrmist.in/#about"
              target="_blank"
              rel="noreferrer"
            >
              About Us
            </a>
          </li>
          <li className="p-3 text-2xl hover:text-blue-600">
            <a href="#about">About the Event</a>
          </li>
          <li className="p-3 text-2xl hover:text-blue-600">
            <a href="#sponsors">Sponsors</a>
          </li>
        </ul>

        {/* Mobile Button */}
        <div onClick={handleNav} className="block md:hidden z-10">
          {nav ? (
            <AiOutlineClose size={20} style={{ color: `${textColor}` }} />
          ) : (
            <AiOutlineMenu size={20} style={{ color: `${textColor}` }} />
          )}
        </div>
        {/* Mobile Menu */}
        <div
          className={
            nav
              ? 'md:hidden absolute top-0 left-0 right-0 bottom-0 flex justify-center items-center w-full h-screen bg-black text-center ease-in duration-300'
              : 'md:hidden absolute top-0 left-[-100%] right-0 bottom-0 flex justify-center items-center w-full h-screen bg-black text-center ease-in duration-300'
          }
        >
          <ul>
            <li
              onClick={handleNav}
              className="p-4 text-4xl hover:text-blue-600"
            >
              <a
                href="https://www.ieeesrmist.in/#about"
                target="_blank"
                rel="noreferrer"
              >
                About Us
              </a>
            </li>
            <li
              onClick={handleNav}
              className="p-4 text-4xl hover:text-blue-600"
            >
              <a href="/#about">About the Event</a>
            </li>
            <li
              onClick={handleNav}
              className="p-4 text-4xl hover:text-blue-600"
            >
              <a href="#sponsors">Sponsors</a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
