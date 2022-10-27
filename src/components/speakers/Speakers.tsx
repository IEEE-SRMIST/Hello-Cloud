import React from 'react';
import KK from '../../assets/img/kkpic-removedbg-.png'
import Github from '../../assets/svg/GitHub_desktop.svg'
import Linkedin from '../../assets/svg/LinkedIn_desktop.svg'
import Portfolio from '../../assets/svg/Portfolio_desktop.svg'


const Speakers = () => {
	return (
		<div className='flex flex-col items-center z-10 w-full h-screen backdrop-blur-sm bg-black/80'>
			<div className='text-[40px] font-["Orbitron"] mt-16 mb-10'>Speaker</div>
			<img className="h-80 w-80 mt-10" src={KK}/>
			<div className='text-[32px] font-["Lato"] my-8'>Kaushik Kumaran</div>
			<div className='text-[16px] font-["Raleway"]'>Cloud Engineer at Searce Inc</div>
			<div className='text-[16px] font-["Raleway"] mb-8'>Webmaster at IEEE SRM WAD</div>
			<div className='flex'>
				<img className="h-10 w-10" src={Github}/>
				<img className="mx-12 h-10 w-10" src={Linkedin}/>
				<img className="h-10 w-10" src={Portfolio}/>
			</div>
		</div>
	);
};

export default Speakers;
