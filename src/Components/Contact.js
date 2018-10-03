import React from 'react';
import {BrowserRouter as Router, Route, Link} from 'react-router-dom';

export default function Contact(props) {

	return (
		
		<div className="Contact">
			<h1>Contact</h1>
			<p>
				If you have any questions, or would like to be sent email update alerts, or just want to say hi, the best way to reach me is by email! I hope to see you in class soon.
			</p>
			<h5>email</h5>
			<p>jasmin@balletbodybyjasmin.com</p>
			<h5>phone</h5>
			<p>(503) 388-9340</p>
			<h5>Let's Socialize!</h5>
			<p>facebook.com/balletbodybyjasmin</p>
			<p>instagram.com/balletbodybyjasmin</p>
		</div>
	);
}