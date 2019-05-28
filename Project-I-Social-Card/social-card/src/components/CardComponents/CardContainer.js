import React, { Component } from 'react';
import './Card.css';
import CardContent from './CardContent';
import CardBanner from './CardBanner';

class CardContainer extends Component {
	clickHandler = () => {
		return (window.location.href = 'https://reactjs.org');
	};
	render() {
		return (
			<div className="CardContainer" onClick={this.clickHandler}>
				<CardBanner />
				<CardContent />
			</div>
		);
	}
}

export default CardContainer;
