import React from 'react';
import {BrowserRouter as Router, Route, Link} from 'react-router-dom';
import ig from '../assets/images/ig.png';
import fb from '../assets/images/fb.png';
import gmail from '../assets/images/gmail.png';

export default function Contact(props) {

	return (
		
		<div className="Contact">
			<h1>Contact</h1>
			<p>
				If you have any questions, or would like to be sent email update alerts, or just want to say hi, the best way to reach me is by email! I hope to see you in class soon.
			</p>
			<h5>email</h5>
			<a href="mailto:jasmin@balletbodybyjasmin.com" target="_blank"><img src={gmail} className="social-logo" /></a>
			<p>jasmin@balletbodybyjasmin.com</p>
			<h5>phone</h5>
			<p>(503) 388-9340</p>
			<h5>Let's Socialize!</h5>
			<div className="social-contacts">
			<a href="facebook.com/balletbodybyjasmin" target="_blank"><img src={fb} className="social-logo" /></a>
			<a href="instagram.com/balletbodybyjasmin" target="_blank"><img src={ig} className="social-logo" /></a>
			</div>
		</div>
	);
}