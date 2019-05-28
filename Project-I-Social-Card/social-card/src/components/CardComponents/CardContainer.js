import React, { Component } from 'react';
import './Card.css';
import CardContent from './CardContent';
import CardBanner from './CardBanner';

const content = {
	title: 'Get started with React',
	text: 'React makes it painless to create interactive UIs. Design simple views for each state in your application.',
	link: 'https://www.reactjs.org',
	linkText: 'reactjs.org'
};
class CardContainer extends Component {
	clickHandler = () => {
		return (window.location.href = 'https://www.reactjs.org');
	};
	render() {
		return (
			<div className="CardContainer" onClick={this.clickHandler}>
				<CardBanner />
				<CardContent
					title={content.title}
					text={content.text}
					link={content.link}
					linkText={content.linkText}
				/>
			</div>
		);
	}
}

export default CardContainer;
