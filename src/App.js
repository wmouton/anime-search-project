import { useState, useEffect } from "react";
import Header from "./components/Header";
import Sidebar from "./components/Sidebar";
import MainContent from "./components/MainContent";

function App() {
	const [animeList, setAnimeList] = useState([]);
	const [topAnime, setTopAnime] = useState([]);
	const [search, setSearch] = useState("");

	const GetTopAnime = async () => {
		const temp = await fetch(
			`https://api.jikan.moe/v3/top/type/page/subtype`
		);
	};

	return (
		<div className='App'>
			<Header />
			<div className='content-wrap'>
				<Sidebar topAnime={topAnime} />
				<MainContent />
			</div>
		</div>
	);
}

export default App;
