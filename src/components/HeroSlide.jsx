import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import { Box, Button, Stack, Typography, alpha } from '@mui/material';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';

import CircularRate from './CircularRate';
import { useEffect, useState } from 'react';
import { handleGetMovieByImdb } from '../services/movieService.js';

// Mô phỏng dữ liệu bộ phim
const staticMovies = [
	{
		id: 1,
		title: 'Tên phim',
		backdrop_path:
			'https://image.tmdb.org/t/p/original/6a3aiSYNqABoV1Fq8n10LMOBxhH.jpg',
		overview:
			'Fast & Furious là một thương hiệu truyền hình tập trung vào một loạt các bộ phim hành động chủ yếu liên quan đến đua xe đường phố bất hợp pháp, trộm cắp và gián điệp.',
		vote_average: 8.5,
		genre: 'Hành động',
	},
	{
		id: 1,
		title: 'Tên phim',
		backdrop_path:
			'https://image.tmdb.org/t/p/original/6a3aiSYNqABoV1Fq8n10LMOBxhH.jpg',
		overview: 'Mô tả... ',
		vote_average: 8.5,
		genre: 'Hài hước',
	},
	{
		id: 1,
		title: 'Tên phim',
		backdrop_path:
			'https://image.tmdb.org/t/p/original/6a3aiSYNqABoV1Fq8n10LMOBxhH.jpg',
		overview: 'Mô tả...',
		vote_average: 8.5,
		genre: 'Phiêu lưu',
	},
];

const HeroSlide = () => {
	const [movies, setMovies] = useState([]);

	const fetchMovie = async () => {
		try {
			let response = await handleGetMovieByImdb();
			console.log(response.movies);
		} catch (error) {
			console.log(error);
		}
	};

	useEffect(() => {
		fetchMovie();
	}, []);

	return (
		<Box sx={{ position: 'relative' }}>
			<Swiper
				grabCursor={true}
				loop={true}
				style={{ width: '100%', backgroundColor: 'black' }}>
				{staticMovies.map((movie) => (
					<SwiperSlide key={movie.id}>
						<Box
							sx={{
								paddingTop: '56.25%', // Aspect ratio of 16:9
								backgroundPosition: 'center',
								backgroundSize: 'contain',
								backgroundImage: `linear-gradient(to right, rgba(0, 0, 0, 0.7) 5%, rgba(0, 0, 0, 0) 12%), linear-gradient(to bottom, rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, 1) 100%), url(${movie.backdrop_path})`,
								position: 'relative',
							}}>
							<Box
								sx={{
									position: 'absolute',
									top: 0,
									left: 0,
									width: '100%',
									height: '100%',
									backgroundColor: 'rgba(0,0,0,0.5)', // Dark overlay if needed for readability
									display: 'flex',
									flexDirection: 'column',
									padding: { sm: '10px', md: '5rem', lg: '10rem' },
								}}>
								<Stack spacing={4} direction="column">
									<Typography
										variant="h4"
										sx={{ fontSize: '50px' }}
										fontWeight="600"
										color={'white'}>
										{movie.title}
									</Typography>

									<Stack direction="row" spacing={2} alignItems="center">
										<CircularRate value={movie.vote_average} />

										<div className="text-white text-xs p-2 bg-[#ff0000] rounded-2xl">
											{movie.genre}
										</div>
									</Stack>

									<Typography
										variant="body1"
										color={'white'}
										className="w-3/5 ">
										{movie.overview}
									</Typography>

									<Button
										variant="contained"
										size="medium"
										startIcon={<PlayArrowIcon />}
										// component={Link}
										// to={routesGen.mediaDetail(mediaType, movie.id)}
										sx={{
											backgroundColor: '#ff0000',
											width: '130px',
											'&:hover': {
												backgroundColor: alpha('#ff0000', 0.8),
											},
										}}>
										Xem phim
									</Button>
								</Stack>
							</Box>
						</Box>
					</SwiperSlide>
				))}
			</Swiper>
		</Box>
	);
};

export default HeroSlide;
