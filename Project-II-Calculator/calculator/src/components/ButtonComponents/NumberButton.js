import React from 'react';
import './Button.css';

const isOperator = val => {
	return !isNaN(val) || val === '.' || val === '=';
};
const numberButton = props => {
	return (
		<button
			className={`NumButton ${isOperator(props.children) ? null : 'Operator'}`}
			onClick={() => props.handleClick(props.children)}
		>
			{props.children}
		</button>
	);
};

export default numberButton;
