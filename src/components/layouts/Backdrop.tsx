import React from 'react';
// import BackgroundVideo from '../../assets/background/background.mp4';
import BackgroundVideo from '../../assets/background/background.gif';

const Backdrop = () => {
	return (
		<div className='fixed top-0 left-0 w-full h-screen -z-10'>
			{/* <video className='w-full h-full object-cover' autoPlay loop>
				<source src={BackgroundVideo} type='video/mp4' />
			</video> */}
			<img
				src={BackgroundVideo}
				alt='Hello, Cloud backdrop'
				className='w-full h-full object-cover -z-10'
			/>
		</div>
	);
};

export default Backdrop;
