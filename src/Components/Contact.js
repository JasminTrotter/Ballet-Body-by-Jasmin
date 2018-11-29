import React from 'react';
import {BrowserRouter as Router, Route, Link} from 'react-router-dom';
import igblack from '../assets/images/ig-black.png';
import fbblack from '../assets/images/fb-black.png';
import gmail from '../assets/images/gmail.png';

import ig from '../assets/images/ig.png';
import fb from '../assets/images/fb.png';
import yelp from '../assets/images/yelpers.png';

export default class Contact extends React.Component {
	componentDidMount() {
  		window.scrollTo(0, 0)
	}

	render() {
		return (
			
			<div className="Contact">
				<h1>Contact</h1>
				<p>
					If you have any questions, or would like to be sent email update alerts, or just want to say hi, the best way to reach me is by email! I hope to see you in class soon.
				</p>
				<div className="contacts">
					<div className="email">
						<a href="mailto:jasmin@balletbodybyjasmin.com" target="_blank"><img src={gmail} className="social-logo" /></a>
						<div>balletbodybyjasmin@gmail.com</div>
					</div>

					<p className="contact-item">(503) 388-9340</p>

					
					<div className="social-contacts contact-item">
						<h5>Let's Socialize!</h5>
						<a href="https://www.facebook.com/balletbodybyjasmin" target="_blank"><img src={fbblack} className="social-logo" /></a>
						<a href="https://www.instagram.com/balletbodybyjasmin" target="_blank"><img src={igblack} className="social-logo" /></a>
					</div>
				</div>
			
			</div>
		);
	}
}