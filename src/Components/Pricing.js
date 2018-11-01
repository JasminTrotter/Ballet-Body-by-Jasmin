import React from 'react';
import {BrowserRouter as Router, Route, Link} from 'react-router-dom';

export default function Pricing(props) {

	return (
		
		<div className="Pricing">
			<h1>Pricing</h1>
			<div className="price-container">
				<div className="price-item">
					<h3>Basic Package</h3>
					<h4>2 Classes $32</h4>
					<p>
						The perfect package for those who are still testing the waters. If you're trying ballet for the first time, give your body a chance to adjust to a new way of moving. Take at least two classes before you decide whether or not ballet is your thing. Plus, each class is $16 when you buy a pair (regular drop-in rate $18 per class). Basic Packages expires one month from first use. Packages may be redeemed for any classes offered by Ballet Body by Jasmin.
					</p>
					<button>Buy Now</button>
				</div>
				<div className="price-item">
					<h3>Trainer Package</h3>
					<h4>4 Classes for $62</h4>
					<p>
						Our most popular package! Incorporate ballet training into your fitness routine and come to class regularly. Plus, each class is only $15.50 (regular drop-in rate is $18 per class). Trainer Package expires 6 weeks from first use. Packages may be redeemed for any classes offered by Ballet Body by Jasmin.
					</p>
					<button>Buy Now</button>
				</div>
				<div className="price-item">
					<h3>Royal Package</h3>
					<h4>8 Classes for $120</h4>
					<p>
						Dedication and perseverance are qualities of a true ballet dancer. Slay your fitness goals by keeping ballet as an integral part of your workout routine. This is our best offer--each class is only $15! (regular drop-in rate is $18 per class). Royal Package expires 12 weeks from first use. Packages may be redeemed for any classes offered by Ballet Body by Jasmin.
					</p>
					<button>Buy Now</button>
				</div>
			</div>
		</div>
	);
}