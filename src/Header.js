import React, { Component } from 'react';

export default class Header extends Component {
	constructor() {
		super();
		this.state = {
			// Obj that stores initial state like memory
			name: 'Jassim',
			points: 100
		};
	}

	render() {
		return (
			<header>
				<div className="logo"> React E-Commerce </div>
			</header>
		);
	}
}
