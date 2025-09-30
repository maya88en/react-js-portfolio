// Footer.jsx
import React from 'react'; 
import { FontAwesomeIcon } 
	from '@fortawesome/react-fontawesome'; 
import { faLinkedin, faGithub} 
	from '@fortawesome/free-brands-svg-icons'; 
// import { faTwitter } from '@fortawesome/free-brands-svg-icons';
import './style.css';

const Footer = () => { 
return ( 
	<footer className="footer"> 
	<div className="container"> 
		<div className="row"> 
		<div className="col-md-6"> 
			<p> September 2025 .</p> 
		</div> 
		<div className="col-md-6 text-md-right"> 
			<ul className="social-icons list-unstyled"> 
			<li> 
				<a 
href="https://www.linkedin.com/in/maya-alfeky-89b062a3/" target="_blank" rel=""> 
				<FontAwesomeIcon icon={faLinkedin} /> 
				</a> 
			</li> 
			<li> 
				<a href= 
"https://github.com/maya88en" target="_blank" rel=""> 
				<FontAwesomeIcon icon={faGithub} /> 
				</a> 
			</li> 
			{/* <li> 
				<a href= 
"https://twitter.com/yourusername" target="_blank" rel="noopener noreferrer"> 
				<FontAwesomeIcon icon={faTwitter} /> 
				</a> 
			</li>  */}
			</ul> 
		</div> 
		</div> 
	</div> 
	</footer> 
); 
}; 

export default Footer;