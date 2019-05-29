import React from 'react';
import './Button.css';

const actionButton = props => (
	<div className="ClearButton" onClick={props.handleClear}>
		{props.children}
	</div>
);

export default actionButton;
