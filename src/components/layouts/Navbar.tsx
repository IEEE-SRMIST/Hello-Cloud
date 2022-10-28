// import React from 'react';
import Logo from '../../assets/img/ieee.png';
import sponser from '../../assets/img/salesForce-removedbg.png';
import React, { useState, useEffect } from 'react';
import { AiOutlineMenu, AiOutlineClose } from 'react-icons/ai';

// import { useState } from 'react';

// const Navbar = () => {
//   // function Menu(e) {
//   //   let list = document .querySelector('ul');
//   //   e.name === 'menu' ? e.name = "close" : e.name = "menu"
//   // }

//   const [navbar, setNavbar] = useState(false);
//   return (
//     <>
//       <nav className="w-full ">
//         <div className="justify-between px-2 mx-auto lg:max-w-7xl md:items-center md:flex md:px-4">
//           <div>
// <div className="flex items-center justify-between py-1 md:py-3 md:block">
{
  /* <div className="space-x-2">
                <img
                  src={Logo}
                  alt="IEEE Logo"
                  className="md:h-36 h-24 inline"
                />
                <img
                  src={sponser}
                  alt="Sales Force logo"
                  className="md:h-36 h-24 inline "
                />
              </div> */
}

//               <div className="md:hidden">
//                 <button
//                   className="p-2 text-white  rounded-md outline-none focus:border-gray-400 focus:border"
//                   onClick={() => setNavbar(!navbar)}
//                 >
//                   {navbar ? (
//                     <svg
//                       xmlns="http://www.w3.org/2000/svg"
//                       className="w-6 h-6"
//                       viewBox="0 0 20 20"
//                       fill="currentColor"
//                     >
//                       <path
//                         fillRule="evenodd"
//                         d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
//                         clipRule="evenodd"
//                       />
//                     </svg>
//                   ) : (
//                     <svg
//                       xmlns="http://www.w3.org/2000/svg"
//                       className="w-6 h-6"
//                       fill="none"
//                       viewBox="0 0 24 24"
//                       stroke="currentColor"
//                       strokeWidth={2}
//                     >
//                       <path
//                         strokeLinecap="round"
//                         strokeLinejoin="round"
//                         d="M4 6h16M4 12h16M4 18h16"
//                       />
//                     </svg>
//                   )}
//                 </button>
//               </div>
//             </div>
//           </div>
//           <div className="">
//             <div
//               className={`flex-1 justify-self-center pb-3 mt-8 md:block md:pb-0 md:mt-0 md:bg-transparent bg-black  md:z-100   ${
//                 navbar ? 'block' : 'hidden'
//               }`}
//             >
//               <ul className="items-center justify-center space-y-8 md:flex md:space-x-6 md:space-y-0">
//                 <li className="text-white text-2xl hover:text-blue-600">
//                   <a href="#">About Us</a>
//                 </li>
//                 <li className="text-white text-2xl hover:text-blue-600">
//                   <a href="#">About the Event</a>
//                 </li>
//                 <li className="text-white text-2xl hover:text-blue-600">
//                   <a href="#">Sponsors</a>
//                 </li>
//               </ul>
//             </div>
//           </div>
//         </div>
//       </nav>
//     </>
//   );
// };

// export default Navbar;

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
          <img src={Logo} alt="IEEE Logo" className="md:h-36 h-24 inline" />
          <img
            src={sponser}
            alt="Sales Force logo"
            className="md:h-36 h-24 inline "
          />
        </div>
        <ul style={{ color: `${textColor}` }} className="hidden sm:flex">
          <li className="p-4 text-2xl hover:text-blue-600">
            <a href="#">About Us</a>
          </li>
          <li className="p-4 text-2xl hover:text-blue-600">
            <a href="#">About the Event</a>
          </li>
          <li className="p-4 text-2xl hover:text-blue-600">
            <a href="#">Sponsors</a>
          </li>
        </ul>

        {/* Mobile Button */}
        <div onClick={handleNav} className="block sm:hidden z-10">
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
              ? 'sm:hidden absolute top-0 left-0 right-0 bottom-0 flex justify-center items-center w-full h-screen bg-black text-center ease-in duration-300'
              : 'sm:hidden absolute top-0 left-[-100%] right-0 bottom-0 flex justify-center items-center w-full h-screen bg-black text-center ease-in duration-300'
          }
        >
          <ul>
            <li
              onClick={handleNav}
              className="p-4 text-4xl hover:text-blue-600"
            >
              <a href="/">About Us</a>
            </li>
            <li
              onClick={handleNav}
              className="p-4 text-4xl hover:text-blue-600"
            >
              <a href="/#gallery">About the Event</a>
            </li>
            <li
              onClick={handleNav}
              className="p-4 text-4xl hover:text-blue-600"
            >
              <a href="/work">Sponsors</a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
