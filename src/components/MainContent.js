import React from "react";

const MainContent = ({ HandleSearch, search, setSearch }) => {
	return (
		<div>
			<main>
				<div className='main-head' onSubmit={HandleSearch}>
					<form className='search-box'>
						<input
							type='search'
							placeholder='Search for anime...'
							required
							value={search}
							onChange={(e) => setSearch(e.target.value)}
						/>
					</form>
				</div>
			</main>
		</div>
	);
};

export default MainContent;
