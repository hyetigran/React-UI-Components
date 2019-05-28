import React from 'react';
import './Header.css';
import HeaderContent from './HeaderContent';
import HeaderTitle from './HeaderTitle';
import ImageThumbnail from './ImageThumbnail';

const headerContainer = () => {
	return (
		<div className="HeaderContainer">
			<ImageThumbnail />
			<div>
				<HeaderTitle />
				<HeaderContent />
			</div>
		</div>
	);
};

export default headerContainer;
