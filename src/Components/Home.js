import React from 'react';
import {BrowserRouter as Router, Route, Link} from 'react-router-dom';
import Authentic from './Authentic';

import Video from './Video';


export default class Home extends React.Component {

	render() {
		return (
			
			<div className="Home">
				<Video />
				<h2>In Jasmin's Ballet Class...</h2>
				<p>We do a barre set that is the actual series of exercises real ballet dancers do to warm up and strengthen their muscles. (But don't worry, Jasmin will teach you these step by step from the absolute basic beginner level!) Ballet's barre exercises are in a specific order that is designed to progressively warm up your body for dancing. The barre series has been developed in the classical ballet tradition over hundreds of years.</p>
				<Link className="button" to='/an-authentic-ballet-class'>Tell Me More!</Link>
			</div>
		);
	}
}

//<FacebookVideo appId={'1044505092340802'} videoId={'1450342838352816'} width={500} autoplay />

// <FacebookProvider appId="1044505092340802">
//         			<EmbeddedPost href="https://www.facebook.com/balletbodybyjasmin/photos/a.874172839303155/1785403881513375/?type=3&theater" width="500" />
//       			</FacebookProvider>