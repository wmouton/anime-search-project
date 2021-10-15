import React, { useState, useEffect } from "react";
import Header from "./components/Header";
import Sidebar from "./components/Sidebar";
import MainContent from "./components/MainContent";

function App() {
	const [animeList, setAnimeList] = useState([]);
	const [topAnime, setTopAnime] = useState([]);
	const [search, setSearch] = useState("");

	const GetTopAnime = async () => {
		const temp = await fetch(
			`https://api.jikan.moe/v3/top/anime/1/bypopularity`
		).then((res) => res.json());

		setTopAnime(temp.top.slice(0, 50));
	};

	const HandleSearch = (e) => {
		e.preventDefault();
		console.log(search);
		// FethcAnime(search);
	};

	useEffect(() => {
		GetTopAnime();
	}, []);

	return (
		<div className='App'>
			<Header />
			<div className='content-wrap'>
				<Sidebar topAnime={topAnime} />
				<MainContent HandleSearch={HandleSearch} />
			</div>
		</div>
	);
}

export default App;
