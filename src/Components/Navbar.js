import React from 'react';
import {BrowserRouter as Router, Route, Link} from 'react-router-dom';

export default function Navbar(props) {

	return (
		
		<nav className="navbar">

			<Link to="/">Home</Link>
      		<Link to="/an-authentic-ballet-class">An Authentic Ballet Class</Link> 
      		<Link to="/you-belong-here">You Belong Here</Link>    
      		<Link to="/classes">Classes</Link>
      		<Link to="/pricing">Pricing</Link>
      		<Link to="/meet-jasmin">Meet Jasmin</Link>
      		<Link to="/FAQ">FAQ</Link>
      		<Link to="/contact">Contact</Link>

		</nav>
	);
}