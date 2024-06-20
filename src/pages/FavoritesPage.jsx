import React, { useEffect } from 'react';

import { Box, Divider, Stack, Typography, Button } from '@mui/material';
import { useState } from 'react';
import Container from '../components/Container';
import CircularRate from '../components/CircularRate';
import { handleGetFavouriteMovie } from '../services/userService';

const moviesList = [
	{
		id: 1,
		poster: 'https://image.tmdb.org/t/p/w500/1g0dhYtq4irTY1GPXvft6k4YLjm.jpg',
		title: 'Spider-Man: No Way Home ',
		director: 'Jon Watts',
		genre: 'Hành Động, Viễn Tưởng',
		rating: 8.2,
	},
	{
		id: 2,
		poster: 'https://image.tmdb.org/t/p/w500/74xTEgt7R36Fpooo50r9T25onhq.jpg',
		title: 'The Batman',
		director: 'Matt Reeves',
		genre: 'Hành Động, Trinh thám',
		rating: 7.2,
	},
	{
		id: 3,
		poster: 'https://image.tmdb.org/t/p/w500/1pdfLvkbY9ohJlCjQH2CZjjYVvJ.jpg',
		title: 'Dune: Part Two',
		director: 'Denis Villeneuve',
		genre: 'Hành Động, Viễn Tưởng',
		rating: 9.2,
	},
];

function FavoritesPage() {
	const [movies, setMovies] = useState(moviesList);

	const count = moviesList.length;

	const userData = sessionStorage.getItem('userData');
	const fetchFavouriteMovie = async () => {
		if (userData) {
			const parsedUserData = JSON.parse(userData);
			const userEmail = parsedUserData.account.email;
			const response = await handleGetFavouriteMovie(userEmail);
			console.log(response);
		} else {
			console.log(1);
		}
	};

	useEffect(() => {
		fetchFavouriteMovie();
	}, []);

	return (
		<>
			{userData ? (
				<Box
					sx={{
						width: '100%',
						margin: 'auto',
						padding: 10,
						backgroundColor: 'black',
					}}>
					<Container header={`Danh sách phim ưa thích: (${count})`}>
						<Stack spacing={3}>
							{movies.map((item) => (
								<Box key={item.id}>
									<Box
										sx={{
											width: '100%',
											height: '226.875px',
											padding: '8px',
											display: 'flex',
											flexDirection: 'row',
											justifyContent: 'space-between',
											'&:hover': {
												backgroundColor: '#131313',
											},
										}}>
										<Box
											sx={{
												display: 'flex',
												flexDirection: 'row',
												gap: '32px',
											}}>
											<Box
												sx={{
													position: 'relative',
													backgroundSize: 'cover',
													backgroundPosition: 'center',
													backgroundColor: 'darkgrey',
													backgroundImage: ` url(${item.poster})`,
													width: '131.8px',
													height: '210.875px',
												}}
											/>
											<Stack spacing={2}>
												<Typography color="white" variant="h6">
													{item.title}
												</Typography>
												<Typography color="white" variant="body1">
													{item.director}
												</Typography>
												<Typography color="white" variant="caption">
													{item.genre}
												</Typography>
												<CircularRate value={item.rating} />
											</Stack>
										</Box>
										<Button variant="contained">Xoá</Button>
									</Box>

									<Divider
										sx={{
											display: { xs: 'block', md: 'none' },
										}}
									/>
								</Box>
							))}
						</Stack>
					</Container>
				</Box>
			) : (
				<div className="h-[476px] bg-black w-[100%] p-6">
					<p className="text-white pt-8 text-lg">
						Nếu bạn muốn xem danh sách phim yêu thích hãy {' '}
						<a href="/login" className="text-[#ff0000]">
							đăng nhập
						</a>
					</p>
				</div>
			)}
		</>
	);
}

export default FavoritesPage;
