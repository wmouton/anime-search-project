import { useState, useEffect } from "react";
import Header from "./components/Header";

function App() {
	const [animeList, setAnimeList] = useState([]);
	const [topAnime, setTopAnime] = useState([]);
	const [search, setSearch] = useState("");

	return (
		<div className='App'>
			<Header />
		</div>
	);
}

export default App;
