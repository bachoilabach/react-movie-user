import React from 'react';
import MediaItem from './MediaItem';
import 'react-multi-carousel/lib/styles.css';
const movies = [
	{
		title: 'Godzilla x Kong: The New Empire',
		releaseDate: '2024',
		score: '8',
		imgUrl: 'https://image.tmdb.org/t/p/w500/tMefBSflR6PGQLv7WvFPpKLZkyk.jpg',
	},
	{
		title: 'Godzilla x Kong: The New Empire',
		releaseDate: '2024',
		score: '8',
		imgUrl: 'https://image.tmdb.org/t/p/w500/tMefBSflR6PGQLv7WvFPpKLZkyk.jpg',
	},
	{
		title: 'Godzilla x Kong: The New Empire',
		releaseDate: '2024',
		score: '8',
		imgUrl: 'https://image.tmdb.org/t/p/w500/tMefBSflR6PGQLv7WvFPpKLZkyk.jpg',
	},
	{
		title: 'Godzilla x Kong: The New Empire',
		releaseDate: '2024',
		score: '8',
		imgUrl: 'https://image.tmdb.org/t/p/w500/tMefBSflR6PGQLv7WvFPpKLZkyk.jpg',
	},
	{
		title: 'Godzilla x Kong: The New Empire',
		releaseDate: '2024',
		score: '8',
		imgUrl: 'https://image.tmdb.org/t/p/w500/tMefBSflR6PGQLv7WvFPpKLZkyk.jpg',
	},
];

const MediaSlider = () => {
	return (
		<div className="flex">
			{movies.map((movie, index) => (
				<MediaItem
					key={index}
					imgUrl={movie.imgUrl}
					score={movie.score}
					title={movie.title}
					releaseDate={movie.releaseDate}
				/>
			))}
		</div>
	);
};

export default MediaSlider;
