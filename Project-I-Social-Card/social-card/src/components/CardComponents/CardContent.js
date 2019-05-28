import React from 'react';
import './Card.css';

const cardContent = ({ title, text, linkText }) => {
	return (
		<div>
			<h3>{title}</h3>
			<p className="CardText">{text}</p>
			<p className="CardLink">{linkText}</p>
		</div>
	);
};

export default cardContent;
