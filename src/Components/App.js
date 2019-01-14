import React, { Component } from 'react';
import '../App.css';
import {HashRouter as Router, Route, Link} from 'react-router-dom'; 
import Navbar from './Navbar';
import Header from './Header';
import Home from './Home';
import Authentic from './Authentic';
import You from './You';
import Classes from './Classes';
import Pricing from './Pricing';
import MeetJasmin from './MeetJasmin';
import FAQ from './FAQ';
import Contact from './Contact';


class App extends Component {
  render() {
    return (
      <div className="App-container">
        <Router>
          <div className="App">
            <Header />
            <Navbar />
            
            <main>
              <Route exact path="/" component={Home} />
              <Route exact path="/an-authentic-ballet-class" component={Authentic} />
              <Route exact path="/you-belong-here" component={You} />
              <Route exact path="/classes" component={Classes} />
              <Route exact path="/pricing" component={Pricing} />
              <Route exact path="/meet-jasmin" component={MeetJasmin} />
              <Route exact path="/FAQ" component={FAQ} />
              <Route exact path="/contact" component={Contact} />

            </main>

          </div>
        </Router>
      </div>
    );
  }
}

export default App;
