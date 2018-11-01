import React, { Component } from 'react';
import logo from '../assets/images/logo.jpg';
import ig from '../assets/images/ig.png';
import fb from '../assets/images/fb.png';
import yelp from '../assets/images/yelpers.png';

export default function Header(props) {
	return(
		<header className="App-header">
          <img src={logo} className="App-logo" alt="ballet body by jasmin logo" />
          <div className="tagbox">
	          <div className="tagline">"Beauty is Born at the Barre"</div>
	          <div className="social-div">
		          <a href="https://www.facebook.com/balletbodybyjasmin" target="_blank"><img src={fb} className="social-logo" alt="facebook link" /></a>
		          <a href="https://www.instagram.com/balletbodybyjasmin/" target="_blank"><img src={ig} className="social-logo" alt="instagram link" /></a>
	          </div>
	          <div className="yelp-box">
	          	<a href="https://www.yelp.com/biz/ballet-body-by-jasmin-beaverton" target="_blank"><img src={yelp} alt="yelp logo" className="yelp-logo"/></a>
	          </div>
          </div>
        </header>
	);
}