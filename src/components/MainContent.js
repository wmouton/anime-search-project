import React from "react";

const MainContent = ({ HandleSearch, search, setSearch, animeList }) => {
	return (
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
			<div className='anime-list'>
				{animeList.map((anime) => (
					<div className='anime-card'>{anime.title}</div>
				))}
			</div>
		</main>
	);
};

export default MainContent;
