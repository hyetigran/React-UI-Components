import React from 'react';
import './Card.css';

const cardContent = () => {
	return (
		<div>
			<h3>Get started with React</h3>
			<p className="CardText">
				React makes it painless to create interactive UIs. Design simple views for each state in your
				application.
			</p>
			<p className="CardLink">https://www.reactjs.org</p>
		</div>
	);
};

export default cardContent;
