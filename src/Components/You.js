import React from 'react';
import {BrowserRouter as Router, Route, Link} from 'react-router-dom';
import youBelong from '../assets/images/you-belong.png';


export default class You extends React.Component {
	componentDidMount() {
  		window.scrollTo(0, 0)
	}

	render() {
		return (
			
			<div className="you-article" style={{"textAlign":"left"}}>
				<img src={youBelong} className="imagine"/>
				<h1>You Belong Here.</h1>
				<p>
					Ballet Body by Jasmin is a safe, welcoming, and judgement-free environment for all bodies. Our student body represents a broad range of ages, sizes, and abilities.
				</p>
				<p>
					Here, you will never face discrimination based on size, age, race, religion, gender identity/presentation, or sexual orientation. 
				</p>
				<h2 className="spicy-header ballet-body">What makes a Ballet Body?</h2>
				<p>
					At Ballet Body by Jasmin, we're reclaiming the meaning of "ballet body." It's a complete myth that only young and slender bodies are eligible to participate. Ballet Body by Jasmin values the way ballet dancing is diversely expressed through each unique body.
				</p>
				<p>
					In class, we target a goal of perfect execution, while knowing that perfection will never be attained even by the greatest professional ballerina. In this striving for perfection, we are strengthening our bodies to become the best possible version of ourselves. We build core strength, flexibility, coordination, and greater ease of movement -- benefits that we carry over into our everyday lives. No matter your age, shape, or size, there is space at the barre for you and you are welcome here. 
				</p>
			</div>

		);
	}
}