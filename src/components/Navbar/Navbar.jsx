import React, { useState } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';
import './Navbar.css';

const Navbar = () => {
	const [click, setClick] = useState(false);
	const handleClick = () => setClick(!click);

	return (
		<div className="header">
			<div className="container">
				<h1 className='Text-nav'>
					Crypto <span className="primary">Software</span>
				</h1>
				<ul className={click ? 'nav-menu active' : 'nav-menu'}>
					<li>
						<a href="/">Home</a>
					</li>
					<li>
						<a href="/">Featured</a>
					</li>
					<li>
						<a href="/">Earn</a>
					</li>
					<li>
						<a href="/">Contact</a>
					</li>
				</ul>

				<div className="hamburger" onClick={handleClick}>
					{click ? <FaTimes size={20} style={{ color: '#333333' }} /> : <FaBars size={20} style={{ color: '#333333' }} />}
				</div>
			</div>
		</div>
	);
};

export default Navbar;
