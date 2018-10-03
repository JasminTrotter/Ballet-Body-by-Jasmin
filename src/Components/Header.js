import React, { Component } from 'react';
import logo from '../images/logo.jpg';

export default function Header(props) {
	return(
		<header className="App-header">
          <img src={logo} className="App-logo" alt="ballet body by jasmin logo" />
          
        </header>
	);
}