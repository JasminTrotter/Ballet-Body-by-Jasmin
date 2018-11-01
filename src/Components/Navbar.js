import React from 'react';
import {BrowserRouter as Router, Route, Link} from 'react-router-dom';

export default function Navbar(props) {

	return (
		
		<nav className="desktopNav">

			<Link to="/" className="navlink" onClick={()=>window.location.reload()}>Home</Link>
      		<Link to="/an-authentic-ballet-class" className="navlink">An Authentic Ballet Class</Link> 
      		<Link to="/you-belong-here" className="navlink">You Belong Here</Link>    
      		<Link to="/classes" className="navlink">Classes</Link>
      		<Link to="/pricing" className="navlink">Pricing</Link>
      		<Link to="/meet-jasmin" className="navlink">Meet Jasmin</Link>
      		<Link to="/FAQ" className="navlink">FAQ</Link>
      		<Link to="/contact" className="navlink">Contact</Link>

		</nav>
	);
}