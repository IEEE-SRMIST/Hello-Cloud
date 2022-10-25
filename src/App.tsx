import React from 'react';
import About from './components/about/About';
import Landing from './components/landing/Landing';
import Backdrop from './components/layouts/Backdrop';
import Footer from './components/layouts/Footer';
import Navbar from './components/layouts/Navbar';
import Perks from './components/perks/Perks';
import Speakers from './components/speakers/Speakers';
import Sponsors from './components/sponsors/Sponsors';

function App() {
	return (
		<div className='w-full h-screen relative'>
			<Navbar />
			<Backdrop />
			<Landing />
			<About />
			<Perks />
			<Sponsors />
			<Speakers />
			<Footer />
		</div>
	);
}

export default App;
