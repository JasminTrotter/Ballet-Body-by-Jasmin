import React from 'react';
import {BrowserRouter as Router, Route, Link} from 'react-router-dom';
import Authentic from './Authentic';
import teaching from '../assets/images/teaching.png';
import Video from './Video';


export default class Home extends React.Component {

	render() {
		return (
			
			<div className="Home">
				<h1>Welcome to Ballet Body by Jasmin</h1>
				<p>...an authentic ballet class for adult beginners.</p>
				<p className="spicy-header">Based in Portland, Oregon.</p>
				<Video />
				<img src={teaching} className="mobile-video-option" onClick={() => {window.open('https://www.facebook.com/balletbodybyjasmin/videos/1450342838352816')}}/>
				<h5 className="mobile-video-option">Click on the image to view an informational video</h5>
				<div className="home-text">
					<h2>In Jasmin's Ballet Class...</h2>
					<p>We do a barre set that is the actual series of exercises real ballet dancers do to warm up and strengthen their muscles. (But don't worry, Jasmin will teach you these step by step from the absolute basic beginner level!) Ballet's barre exercises are in a specific order that is designed to progressively warm up your body for dancing. The barre series has been developed in the classical ballet tradition over hundreds of years.</p>
					<Link style={{"textDecoration":"none"}}to='/an-authentic-ballet-class'><div className="naving-button margin-top"> Tell Me More!</div></Link>
				</div>
			</div>
		);
	}
}
