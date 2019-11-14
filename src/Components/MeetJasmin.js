import React from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import logobullet from '../assets/images/logobullet.jpg';
import headshot from '../assets/images/jasmin-trotter-headshot.JPG';

export default class MeetJasmin extends React.Component {
	componentDidMount() {
		window.scrollTo(0, 0)
	}

	render() {
		return (
			<div className="article">
				<h1>Meet Jasmin</h1>
				<h2 className="spicy-header">Owner, Founder of Ballet Body by Jasmin</h2>
				<img src={headshot} className="headshot" />
				<p>Jasmin is a professional dancer with over 20 years of serious dance training. She...</p>
				<ul className="about-list">
					<li><img alt="dancer bullet point" className="social-logo bullet" src={logobullet} /><div className="about-text">graduated from University of California, Berkeley, with a BA in Interdisciplinary American Studies, with an area of concentration in Gender and Dance.</div></li>
					<li><img alt="dancer bullet point" className="social-logo bullet" src={logobullet} /><div className="about-text">performed in showcases with the Dance and Performance Studies and the Physical Education departments.</div></li>
					<li><img alt="dancer bullet point" className="social-logo bullet" src={logobullet} /><div className="about-text">was the TA for Ballet Level 1 at Berkeley.</div></li>
					<li><img alt="dancer bullet point" className="social-logo bullet" src={logobullet} /><div className="about-text">taught jazz dance in an after-school program at the Franklin Recreation Center in Oakland.</div></li>
					<li><img alt="dancer bullet point" className="social-logo bullet" src={logobullet} /><div className="about-text">was awarded the Julia Payne Dance Scholarship in 2014.</div></li>
					<li><img alt="dancer bullet point" className="social-logo bullet" src={logobullet} /><div className="about-text">graduated from Berkeley with highest honors.</div></li>
					<li><img alt="dancer bullet point" className="social-logo bullet" src={logobullet} /><div className="about-text">danced several soloist roles in performances with <a href="http://www.oakleyballet.com/" rel="noopener noreferrer" target="_blank">Footworks Youth Ballet</a>, including Snow Queen in The Nutcracker, Lilac Fairy in Sleeping Beauty, and Pas de Trois in Paquita.</div></li>
					<li><img alt="dancer bullet point" className="social-logo bullet" src={logobullet} /><div className="about-text">attended Summer Intensive Programs with American Ballet Theater, Princeton Dance and Theater Studio, and Boston Ballet, respectively, each of which had required her to be chosen from auditions among hundreds of other prospective program attendees.</div></li>
					<li><img alt="dancer bullet point" className="social-logo bullet" src={logobullet} /><div className="about-text">danced with <a href="https://polarisdance.org/" rel="noopener noreferrer" target="_blank">Polaris Dance Theater</a> for the 2017-2018 season.</div></li>
					<li><img alt="dancer bullet point" className="social-logo bullet" src={logobullet} /><div className="about-text">is a very passionate dance instructor and enjoys spreading the love of dance to the world.</div></li>
					<li><img alt="dancer bullet point" className="social-logo bullet" src={logobullet} /><div className="about-text">is also a very passionate Full Stack web developer, and she built this website from scratch with ReactJS. She works as a freelance web dev, so check out her portfolio <a href="https://jasmintrotter.github.io/portfolio" target="_blank">here</a> and shoot her an <a href="mailto:jasminmtrotter@gmail.com">email</a> for a quote if you are interested in her services.</div></li>
				</ul>
			</div>
		);

	}
}
