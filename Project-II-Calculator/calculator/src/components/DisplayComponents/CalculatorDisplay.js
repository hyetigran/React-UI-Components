import React from 'react';
import './Display.css';

const calculatorDisplay = props => {
	return (
		<div className="Display">
			<output name="displayValue" value={props.value} />
		</div>
	);
};

export default calculatorDisplay;
