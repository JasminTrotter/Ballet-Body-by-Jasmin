import React from 'react';
import {BrowserRouter as Router, Route, Link} from 'react-router-dom';

export default class FAQ extends React.Component {
	componentDidMount() {
  		window.scrollTo(0, 0)
	}

	render() {
		return (
			
			<div className="faq">
				<h1>Frequently Asked Questions</h1>
				<div className="Q-holder">
					<div className="aQ">
						<h3>"I have no grace or coordination and I am afraid of embarrassing myself. How could I dare to set foot in a ballet class?"</h3>
						<p>
							You belong here. A ballet workout is just what you need to develop the grace and coordination you wish to have. One of the things I love most about ballet is that it's very logical. Learning ballet is done in increments, with each basic step as a building block for more complex movements later down the road. That's why you won't get lost in overly complicated choreography or be asked to do anything outside of your abilities. In this class, you build up your strength and movement vocabulary step by step. Additionally, each step itself is logical in its mechanics--where your weight is held, which muscles are engaged, and how your body is aligned in executing the step. I break down each step to its fundamental parts, and you will be taught clearly both through visual demonstration and verbal communication. Finally, you won't embarrass yourself here--all of your fellow classmates are beginners like you!
						</p>
						</div>
					<div className="aQ">
						<h3>"What should I wear to class?"</h3>
						<p>
							It is important for correcting alignment that I see the lines of your body. Please wear form-fitting, stretchable clothing (leggings, tights, tank tops, leotards, yoga pants). If bottoms are loose-fitting, please have shorts that you can move easily in and that reveal the leg up to the knee.
							To more easily glide the feet along the floor, I recommend wearing socks (without rubber lining on bottom) or ballet shoes.
							Please wear any long hair tied back in ponytail or bun.
						</p>
					</div>
						<div className="aQ">
						<h3>"It's been forever since my last ballet class/I haven't taken a ballet class since I was a little kid/I've never taken a ballet class before. Can I still take your class?"</h3>
						<p>
							It's great if you have been exposed to ballet before, and also great if you've never set foot in a dance studio. No prior dance experience is required for this class. Also, there have been quite a few students who have taken ballet before a long time ago and are returning to it at my beginner-level class in order to reintroduce themselves and rebuild their strength. My class is beneficial even for students with some dance background. Even for experienced dancers, beginning ballet classes can still be very challenging for you if you really work it!
						</p>
					</div>
					<div className="aQ">
						<h3>"Can men take the ballet class?"</h3>
						<p>
							Yes! It is especially beneficial for men who would like to gain strength and balance. Ballet sculpts your body into long, lean muscles. In order to perform ballet exercises correctly, you are required to continuously engage the gluteus medius (an often underdeveloped muscle) to stabilize the pelvis and keep your balance in a single leg stance. Ballet also strengthens the back muscles for more upright posture. Unlike weight lifting, which isolates single muscle groups at a time, ballet is a more efficient workout because it works the full body harmoniously. Through studying ballet, you will be teaching your body how to move with the ease and coordination. Ballet also increases flexibility in male bodies, which tend to be less flexible and who tend to overlook the important role flexibility plays in balancing the body. A balanced body is a healthy body!
						</p>
					</div>
					<div className="aQ">
						<h3>"I am an older, overweight and out of shape woman. I don't want to be in a class of super young skinny women. I know how intimidated and body conscious I am. Are there variable ages and body sizes in the class?"</h3>
						<p>
							I enthusiastically welcome all adults to come to class. I strive to provide an inclusive space for students of all ages and body types. This is a class for people who have never done ballet before, or who are still at beginner level in ballet, so incoming students are not expected to be in great shape. Ballet exercises have many benefits to the body, including strength, endurance, and agility. Over time in taking my class, you will notice improvements in your core strength and posture. Also, I take into account prior injuries and modify exercises to suit your body. I have one student with a knee injury whom I make special accommodations for. You'll find that my class can be low-impact for your joints, yet still offers the benefits of a high-intensity workout. I encourage you to give the class a try! I welcome you to my class and look forward to working with you!
						</p>
					</div>
					<div className="aQ">
						<h3>"Are the classes in a strictly progressive series or is my attendance flexible?"</h3>
						<p>
							The classes are not a series. You may join a class at any week without missing material from the previous week or falling behind. Ballet Body by Jasmin's unique structure allows students to attend (or not attend) classes week to week at their own varying levels of commitment and availability. You are simply asked to take at least one First Day of Ballet class before attending any of the Barre and Center for Beginners classes. This is because you will need to know material you learned from First Day of Ballet in order to execute the movements you will be doing in Barre and Center for Beginners. All First Day of Ballet classes are exactly the same in format. Each Barre and Center for Beginners class is different, offering new movements and dance routines to learn each class.
						</p>
					</div>
				</div>
				<div className="button-margin">
					<a href="https://student-portal-balletbody.herokuapp.com/" target="_blank" className="naving-button button-margin">Sign Me Up!</a>
					<Link to='/contact' className="naving-button button-margin">I've Still Got Questions!</Link>
				</div>
			</div>
		);
	}
}