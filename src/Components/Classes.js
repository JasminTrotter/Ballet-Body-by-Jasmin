import React from 'react';
import {BrowserRouter as Router, Route, Link} from 'react-router-dom';

import ClassPanel from "./ClassPanel";



//more descriptions under "Read More"
const firstDayDescription = "First Day of Ballet is designed for students who have never taken a ballet class ever. It is an intro/assessment class and we will be determining after this class whether you are ready to move on to Barre and Center for Beginners or if (in rare cases) need to repeat First Day of Ballet."
const firstDayDescription1 = "(Returning students who would like a refresher on the bare basics are welcome to attend).";
const firstDayDescription2 = "Jasmin breaks down five foundation steps of ballet: plié, tendu, dégagé, rond de jambe, and fondu. You must be exposed to these steps as a foundation before you are able to move on to more complex ballet steps. In First Day of Ballet, the entire hour-long class is at the barre in order for students to learn these foundation steps with the support of the barre.";
const barreAndCenterDescription = "Barre and Center for Beginners is for students who have taken the First Day of Ballet class one or more times, or have taken ballet in the past and are familiar with plié, tendu, dégagé, rond de jambe, and fondu.";
const barreAndCenterDescription1 = "In Barre and Center, you will rely on the knowledge you have gained in First Day of Ballet to learn new steps. After warm-up and barre exercises, students will learn a short combination dance in the center floor. The combination gracefully pieces together steps that were just learned at the barre, and will have you leaving class feeling like a real dancer!";
// const barreAndCenterDescription2 = "";

export default class Classes extends React.Component {
	
	componentDidMount() {
  		window.scrollTo(0, 0)
	}

	render() {
		return (
			
			<div className="ClassSchedule">

				<h1>Classes</h1>
				<div className="class-panel important-info">
					<h3>Important Information:</h3>
					<p>Current class times are indicated on the calendar below.</p>
					<p>For new students who need to take the introductory First Day of Ballet lesson, contact me if you desire a class time other than what is listed on the calendar. I will do my best to accommodate you.</p>
					<h4 style={{"color":"red",fontSize: '19px'}}>All classes require prior reservation.</h4>
					<h5>email jasmin@balletbodybyjasmin.com to request a reservation.</h5>

				</div>

				<div className="google-calendar">
					<iframe src="https://calendar.google.com/calendar/b/1/embed?title=Class%20Schedule&amp;showPrint=0&amp;showTabs=1&amp;showCalendars=0&amp;showTz=0&amp;mode=AGENDA&amp;height=500&amp;wkst=1&amp;bgcolor=%23FFFFFF&amp;src=jasmin%40balletbodybyjasmin.com&amp;color=%231badf8&amp;ctz=America%2FLos_Angeles" 
						style={{"borderWidth":"0"}} 
						width="390" 
						height="500" 
						frameborder="0" 
						scrolling="no">
					</iframe>
				</div>
				<div className="class-panel-container">
					<ClassPanel header={"First Day of Ballet"} subHeader={"Introduction/Assessment"} description={firstDayDescription} more1={firstDayDescription1} more2={firstDayDescription2} />
					<ClassPanel header={"Barre and Center for Beginners"} subHeader={"Level 1"} description={barreAndCenterDescription} more1={barreAndCenterDescription1} />
					
				</div>
				

					
					<div className="location-panel">
						<h3>Location:</h3>
						<p>Classes are held in the blue building on the southwest corner of NE MLK and Morris. Enter on the Morris side, through the gate that is farthest to the right as you are facing the building. If the gate is locked, text 503-388-9340 to be let in.</p>
						<h3>Parking:</h3>
						<p>Street parking on Morris.</p>
					</div>
					
			</div>

			
		);
	}
}