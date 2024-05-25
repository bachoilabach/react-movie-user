import React, { useEffect, useState } from 'react';
import MediaItem from './MediaItem';
import 'react-multi-carousel/lib/styles.css';

import { handleGetMovieByImdb, handleGteMovieByRelease } from '../services/movieService';

const MediaSlider = ({title}) => {
	const [movies, setMovies] = useState([]);
	const fetchMovie = async () => {
		try {
			if (title === 'Phim được đánh giá cao') {
				let response = await handleGetMovieByImdb();
				setMovies(response.movies);
			}
			if(title === 'Phim mới ra mắt'){
				let response = await handleGteMovieByRelease();
				setMovies(response.movies)
			}
		} catch (error) {
			console.log(error);
		}
	};

	useEffect(() => {
		fetchMovie();
	}, [title]);

	return (
		<div className="flex gap-5 ml-2 ">
			{movies.map((movie, index) => (
				<MediaItem
					key={index}
					imgUrl={movie.background}
					score={movie.imdb}
					title={movie.title}
					releaseDate={movie.release}
				/>
			))}
		</div>
	);
};

export default MediaSlider;
