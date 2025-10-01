//Header.jsx
// import {useState} from 'react'; 
import { Navbar, Nav } from 'react-bootstrap'; 
import { FontAwesomeIcon } 
from '@fortawesome/react-fontawesome'; 
import { faGithub, faLinkedin } 
from '@fortawesome/free-brands-svg-icons'; 
import { 
faInfoCircle, faCode, 
faFileAlt, faEnvelope 
} 
from '@fortawesome/free-solid-svg-icons'; 
import { Link } from 'react-router-dom'; 

import './Header.css'; 
import './style.css'; 




const Header = () => { 
	// const [isMenuOpen, setIsMenuOpen] = useState(false);

    // const toggleMenu = () => {
    //   setIsMenuOpen(!isMenuOpen);
    // };
return ( 
	
	<Navbar bg="dark" expand="lg"
	className="custom-navbar shadow-sm"> 
	<Navbar.Brand as={Link} to="/"
		className="brand-name"> 
		<span className="display-4 text-white ho"> 
		Maya
		</span> 
	</Navbar.Brand> 
	{/* <button 
		className="navbar-toggler"
		type="button"
		data-toggle="collapse"
		data-target="#navbarNav"
		aria-controls="navbarNav"
		aria-expanded="false"
		aria-label="Toggle navigation"
	> 
		<span className="navbar-toggler-icon"></span> 
	</button>  */}
	<div className=" text-white"
		id="navbarNav"> 
		<Nav className="ml-auto "> 
		<Nav.Link as={Link} to="/"> 
			<span>About</span> 
			<FontAwesomeIcon icon={faInfoCircle} 
			className="ml-2 text-light ho ho" /> 
		</Nav.Link> 
		<Nav.Link as={Link} to="/projects"> 
			<span>Projects</span> 
			<FontAwesomeIcon icon={faCode} 
			className="ml-2 text-light ho" /> 
		</Nav.Link> 
		<Nav.Link as={Link} to="/resume"> 
			<span>Resume</span> 
			<FontAwesomeIcon icon={faFileAlt} 
			className="ml-2 text-light ho" /> 
		</Nav.Link> 
		<Nav.Link as={Link} to="/contact"> 
			<span>Contact</span> 
			<FontAwesomeIcon icon={faEnvelope} 
			className="ml-2 text-light ho" /> 
		</Nav.Link> 
		</Nav> 
		<Nav className="ml-auto"> 
		<Nav.Link href="https://github.com/maya88en" target="_blank"> 
			<span className="sr-only">Github</span> 
			<FontAwesomeIcon icon={faGithub} size="lg"
			className='text-light ho' /> 
		</Nav.Link> 
		<Nav.Link href="https://www.linkedin.com/in/maya-alfeky-89b062a3/" target="_blank"> 
			<span className="sr-only">Linkedin</span> 
			<FontAwesomeIcon icon={faLinkedin} size="lg"
			className='text-light ho' /> 
		</Nav.Link> 
		</Nav> 
	</div> 
	    
    {/* <div className={isMenuOpen ? 'mobile-menu-open' : 'mobile-menu-closed'}> */}
      {/* Menu items */}
    {/* </div>
    <button onClick={toggleMenu}>☰</button> */}

	</Navbar> 
	
); 
}; 

export default Header;