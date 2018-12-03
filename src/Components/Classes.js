import React from 'react';
import {BrowserRouter as Router, Route, Link} from 'react-router-dom';

export default class Classes extends React.Component {
	componentDidMount() {
  		window.scrollTo(0, 0)
	}
	render() {
		return (
			
			<div className="ClassSchedule">

				<h1>Class Schedule</h1>
				<div className="class-panel-container">
					<div className="class-panel class-panel1">
						<h3>First Day of Ballet</h3>
						<h4>Introduction/Assessment</h4>
						<h5>Sundays 2:00pm-3:00pm</h5>
						<h5 style={{"color":"red"}}>Reservation Required.</h5>
						<h5>email jasmin@balletbodybyjasmin.com to request a reservation.</h5>

						<h6>Description:</h6>
						<p>
							First Day of Ballet is designed for students who have never taken a ballet class ever. It is an intro/assessment class and we will be determining after this class whether you are ready to move on to Barre and Center for Beginners or if (in rare cases) need to repeat First Day of Ballet.
						</p>
						<p>
							(Returning students who would like a refresher on the bare basics are welcome to attend).
						</p>
						<p>
							Jasmin breaks down five foundation steps of ballet: plié, tendu, dégagé, rond de jambe, and fondu. You must be exposed to these steps as a foundation before you are able to move on to more complex ballet steps. In First Day of Ballet, the entire hour-long class is at the barre in order for students to learn these foundation steps with the support of the barre.
						</p>
					</div>
					<div className="class-panel class-panel2">
						<h3>Barre and Center for Beginners</h3>
						<h4>Level 1</h4>
						<h5>Sundays 3:00pm-4:00pm</h5>
						<h6>Description:</h6>
						<p>
							Barre and Center for Beginners is for students who have taken the First Day of Ballet class one or more times, or have taken ballet in the past and are familiar with plié, tendu, dégagé, rond de jambe, and fondu.
						</p>
						<p>
							In Barre and Center, you will rely on the knowledge you have gained in First Day of Ballet to learn new steps. After warm-up and barre exercises, students will learn a short combination dance in the center floor. The combination gracefully pieces together steps that were just learned at the barre, and will have you leaving class feeling like a real dancer!
						</p>
					</div>
					<div className="location-panel">
						<h3>Location:</h3>
						<p>Classes are held in the blue building on the southwest corner of NE MLK and Morris. Enter on the Morris side, through the gate that is farthest to the right as you are facing the building. If the gate is locked, text 503-388-9340 to be let in.</p>
						<h3>Parking:</h3>
						<p>Street parking on Morris.</p>
					</div>
					
				</div>

			</div>
		);
	}
}