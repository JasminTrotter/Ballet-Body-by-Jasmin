import React from 'react';
import {BrowserRouter as Router, Route, Link} from 'react-router-dom';
import logo from '../assets/images/logo.png';

export default class Navbar extends React.Component {
      constructor(props) {
        super(props);
        // this.addActiveClass= this.addActiveClass.bind(this);
        this.state = {
            active: false,
        };
       }
          hamburgerShow() {
              const currentState = this.state.active;
              this.setState({ active: !currentState });
          };
      
 

      render() {

            if(this.state.active) {
                  return (
                        <nav className="mobileNav" style={{"backgroundColor":"#B7DBF5", "zIndex":"9999"}}>
                              <div className="logo-container">
                                <img src={logo} className="App-logo" alt="ballet body by jasmin logo" />
                              </div>
                              <button className="hamburger" onClick={()=>{this.hamburgerShow()}}>Menu <i class="fa fa-angle-double-up"></i></button>
                              <Link to="/" className="navlink" onClick={()=>window.location.reload()}>Home</Link>
                              <Link to="/an-authentic-ballet-class" className="navlink" onClick={()=>{this.hamburgerShow()}}>An Authentic Ballet Class</Link> 
                              <Link to="/you-belong-here" className="navlink" onClick={()=>{this.hamburgerShow()}}>You Belong Here</Link>    
                              <Link to="/classes" className="navlink" onClick={()=>{this.hamburgerShow()}}>Classes</Link>
                              <Link to="/pricing" className="navlink" onClick={()=>{this.hamburgerShow()}}>Pricing</Link>
                              <Link to="/meet-jasmin" className="navlink" onClick={()=>{this.hamburgerShow()}}>Meet Jasmin</Link>
                              <Link to="/FAQ" className="navlink" onClick={()=>{this.hamburgerShow()}}>FAQ</Link>
                              <Link to="/contact" className="navlink" onClick={()=>{this.hamburgerShow()}} style={{"marginBottom":"20px"}}>Contact</Link>

                        </nav>

                  );

            }
      	return (
      		<div className="navbar">
            		<nav className="desktopNav">
                  <img src={logo} className="App-logo" alt="ballet body by jasmin logo" />
            			<Link to="/" className="navlink" onClick={()=>window.location.reload()}>Home</Link>
                  		<Link to="/an-authentic-ballet-class" className="navlink">An Authentic Ballet Class</Link> 
                  		<Link to="/you-belong-here" className="navlink">You Belong Here</Link>    
                  		<Link to="/classes" className="navlink">Classes</Link>
                  		<Link to="/pricing" className="navlink">Pricing</Link>
                  		<Link to="/meet-jasmin" className="navlink">Meet Jasmin</Link>
                  		<Link to="/FAQ" className="navlink">FAQ</Link>
                  		<Link to="/contact" className="navlink">Contact</Link>

            		</nav>
                        
                        <nav className="mobileNav hidden">
                              <div className="logo-container">
                                <img src={logo} className="App-logo" alt="ballet body by jasmin logo" />
                              </div>
                              <button className="hamburger" onClick={()=>{this.hamburgerShow()}}>Menu <i class="fa fa-angle-double-down"></i></button>
                        </nav>
                  
                  </div>
      	);
      }
}