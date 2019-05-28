import React from 'react';
import './Card.css';
import CardContent from './CardContent';
import CardBanner from './CardBanner';

const cardContainer = () => {
	return (
		<div className="CardContainer" onClick="https://www.reactjs.org">
			<CardBanner />
			<CardContent />
		</div>
	);
};

export default cardContainer;
