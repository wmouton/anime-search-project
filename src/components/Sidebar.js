import React from "react";

const Sidebar = ({ topAnime }) => {
	return (
		<>
			<aside>
				<nav>
					<h3>Top 10 Anime</h3>
					{topAnime.map((anime) => (
						<a
							href={anime.url}
							target='_blank'
							key={anime.mal_id}
							rel='noreferrer'
						>
							{anime.title}
						</a>
					))}
				</nav>
			</aside>
		</>
	);
};

export default Sidebar;
