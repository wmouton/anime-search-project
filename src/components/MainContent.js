import React from "react";
import AnimeCard from "./AnimeCard";

const MainContent = ({ HandleSearch, search, setSearch, animeList, topAnime }) => {
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
					<AnimeCard anime={anime} key={anime.mal_id} />
				))}
			</div>
		</main>
	);
};

export default MainContent;
