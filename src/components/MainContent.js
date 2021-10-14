import React from "react";

const MainContent = () => {
	return (
		<div>
			<main>
				<div className='main-head'>
					<form className='search-box'>
						<input type='search' placeholder='Search for anime...' required/>
					</form>
				</div>
			</main>
		</div>
	);
};

export default MainContent;
