import React, { useState } from 'react';
import MediaItem from './MediaItem';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import { Button } from '@mui/material';
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
		<div className="flex gap-5 ml-2 ">
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
