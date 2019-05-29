import React from 'react';
import './Button.css';

const buttonContainer = props => {
	return <div className={`ButtonContainer ${props.className}`}>{props.children}</div>;
};
export default buttonContainer;
