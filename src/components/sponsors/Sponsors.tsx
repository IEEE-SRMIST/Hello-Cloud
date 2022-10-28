import React from 'react';
import Salseforce from '../../assets/img/Salesforce_removedbg.png'

const Sponsors = () => {
	return (
		<div className='flex flex-col items-center z-10 w-full h-screen backdrop-blur-sm bg-black/80'>
			<div className='text-[40px] font-["Orbitron"] my-16'>Sponsors:</div>
			<div>
				<div>
					<img className="h-60 w-80" src={Salseforce}/>
				</div>
			</div>
		</div>
	);
};

export default Sponsors;
