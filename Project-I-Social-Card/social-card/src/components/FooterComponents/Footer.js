import React from 'react';
import './Footer.css';
import message from '../../assets/message.png';
import heart from '../../assets/heart.png';
import mail from '../../assets/mail.png';
import retweet from '../../assets/retweet.png';

const footer = () => {
	return (
		<div className="Footer">
			<div className="FooterArea">
				<img src={message} alt="message icon" />
			</div>
			<div className="FooterArea">
				<img src={retweet} alt="retweet icon" />
				{/* hardcoded, needs refactored */}
				<p>6</p>
			</div>
			<div className="FooterArea">
				<img src={heart} alt="heart icon" />
				{/* hardcoded, needs refactored */}
				<p>4</p>
			</div>
			<div className="FooterArea">
				<img src={mail} alt="mail icon" />
			</div>
		</div>
	);
};

export default footer;
