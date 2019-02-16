import React from 'react';
import {BrowserRouter as Router, Route, Link} from 'react-router-dom';

export default class Authentic extends React.Component {
	componentDidMount() {
  		window.scrollTo(0, 0)
	}
	render() {
		return (
			
			<div className="authentic-article">
				
				<h1>An  Authentic  Ballet  Class  For  Beginners</h1>

				<p>Many of today's <i>barre method</i> classes are chiefly comprised of isometric exercises and include the use of weights, balls, bands, and other props to assist during the workout. While these classes are excellent workouts that contribute to improved strength and stamina, they do not teach the same exercises done at the barre during a Classical Ballet class. Although <i>barre method</i> programs include movements inspired by ballet, their exercises and sessions do not actually involve ballet dancing.</p>

				<p className="spicy-header">Ballet Body by Jasmin is different.</p>

				<p>Jasmin teaches a barre set that is the actual series of exercises real ballet dancers do to warm up and strengthen their muscles. (But don't worry, Jasmin will teach you these step by step from the absolute basic beginner level!) Barre exercises in Classical Ballet are in a specific order that is designed to progressively warm up your body for dancing. The barre series has been developed in the Classical Ballet tradition over hundreds of years. Ballet exercises use your own body weight to achieve strength and mind-body awareness. This leads to better balance, posture, and more graceful movement habits that the dancers carry over into their everyday lives.</p>

				<p>The exercises begin slowly with the dancer standing on both legs. As the barre progresses, the movements become faster, and the dancer must balance on their standing leg while moving their working leg. The dancers lift their legs higher as they near the end of the barre. All exercises at the barre start with the left hand holding the barre and are then repeated with the right hand holding, so that muscles on both sides of the dancer’s body get equal work.
				Jasmin attends to the unique issues of each body and allows students to fully understand the exercises. Ballet Body by Jasmin not only helps you work toward your fitness goals, but also gives you a foundation to pursue the refined look of a ballet dancer--the strength, balance, and grace of a ballet body. While the class is a workout designed to strengthen and tone muscle, you will also enjoy the benefits of stress relief and fun experiences that dancing has to offer.
				</p> 
				<div className="button-margin button-div">
					<Link className="naving-button" to="/classes">View Classes</Link>
				</div>
			</div>
		);
	}
}