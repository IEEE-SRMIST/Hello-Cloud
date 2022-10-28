import React from 'react';

const Footer = () => {
	return <div className='flex flex-col items-center font-["Orbitron"] border-t z-10 w-full backdrop-blur-sm bg-black/80 mt-auto'>
		<div className='mt-5'>MADE WITH ❤️ BY IEEE SRM SB</div>
		<div className='text-[10px] my-4'>
			<a href="">PRIVACY</a>
			<a href="" className='mx-5'>TERMS</a>
			<a href="">CODE OF CONDUCT</a>
		</div>
	</div>;
};

export default Footer;
