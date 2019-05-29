import React from 'react';
import './Display.css';

const calculatorDisplay = props => {
	return <div className="Display">{props.input}</div>;
};

export default calculatorDisplay;
