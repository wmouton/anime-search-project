import React from "react";

const AnimeCard = ({ anime }) => {
	return (
		<article className='anime-card'>
			<a href={anime.url} target='_black' rel='noreferrer'>
				<figure>
					<img src={anime.image_url} alt='' />
				</figure>
				<h3>{anime.title}</h3>
			</a>
		</article>
	);
};

export default AnimeCard;
