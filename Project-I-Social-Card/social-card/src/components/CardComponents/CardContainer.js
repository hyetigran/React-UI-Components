import React, { Component } from 'react';
import './Card.css';
import CardContent from './CardContent';
import CardBanner from './CardBanner';

class CardContainer extends Component {
	state = {
		link: 'https://www.reactjs.org'
	};
	clickHandler = () => {
		return <a href={this.state.link} />;
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
