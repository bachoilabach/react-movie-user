import FavoriteIcon from '@mui/icons-material/Favorite';
// import FavoriteBorderOutlinedIcon from "@mui/icons-material/FavoriteBorderOutlined";
import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import { useEffect, useState } from 'react';

import { Box, Button, Divider, Stack, Typography, alpha } from '@mui/material';

import CircularRate from '../components/CircularRate';
import Container from '../components/Container';
import MovieComment from './MovieComment';

import uiConfigs from '../config/ui.configs';

import { Swiper, SwiperSlide } from 'swiper/react';
import { Link, useParams } from 'react-router-dom';
import {
	getAllActorsMovie,
	getAllCountries,
	getAllDirectorsMovie,
	getAllMovies,
} from '../services/movieService';
import { getAllDirectors } from '../services/directorService';
import { getAllActors } from '../services/actorService';

const MediaDetail = () => {
	const { id } = useParams();
	const [movie1, setMovie1] = useState({});
	const [director, setDirector] = useState();
	const [country, setCountry] = useState();
	const [actors, setActors] = useState([]);

	const fetchMovieById = async () => {
		try {
			const response = await getAllMovies(id);
			setMovie1(response.movies);

			// * Director
			const responseDirector = await getAllDirectorsMovie(id);
			const directorsMovie = responseDirector.moviedirectors.map(
				(director) => director.directorID
			);
			const responseDirectorsMovie = await getAllDirectors(directorsMovie);
			setDirector(responseDirectorsMovie.directors.name);

			// * Country
			const responseCountry = await getAllCountries(response.movies.countryID);
			setCountry(responseCountry.countries.countryName);

			// * Actor
			// Fetch actors for the movie
			const responseActor = await getAllActorsMovie(id);
			const actorIDs = responseActor.movieactors.map((actor) => actor.actorID);

			// Fetch details for each actor concurrently
			const actorsDetails = await Promise.all(
				actorIDs.map(async (actorID) => {
					const responseActorsMovie = await getAllActors(actorID);
					return responseActorsMovie.actors; // Adjust this line if response is structured differently
				})
			);

			// Flatten the array if getAllActors returns arrays
			const flattenedActors = actorsDetails.flat();
			setActors(flattenedActors);
		} catch (error) {
			console.log(error);
		}
	};

	useEffect(() => {
		fetchMovieById();
	}, [id]);

	return (
		<>
			<Box
				sx={{
					zIndex: '-1',
					position: 'relative',
					paddingTop: { xs: '60%', sm: '40%', md: '35%' },
					backgroundPosition: 'top',
					backgroundSize: 'cover',
					backgroundImage: `url(${movie1.thumbnail})`,
					backgroundAttachment: 'fixed',
					'&::before': {
						content: '""',
						position: 'absolute',
						left: 0,
						bottom: 0,
						width: '100%',
						height: '100%',
						pointerEvents: 'none',
						backgroundImage:
							'linear-gradient(to top, rgba(0,0,0,1), rgba(0,0,0,0))',
					},
				}}
			/>
			<Box
				sx={{
					color: 'white',
					maxWidth: '100%',
					margin: 'auto',
					padding: 20,
					bgcolor: 'black',
				}}>
				{/* media content */}
				<Box
					sx={{
						marginTop: { xs: '-10rem', md: '-15rem', lg: '-20rem' },
					}}>
					<Box
						sx={{
							display: 'flex',
							flexDirection: { md: 'row', xs: 'column' },
						}}>
						{/* poster */}
						<Box
							sx={{
								width: { xs: '70%', sm: '50%', md: '40%' },
								margin: { xs: '0 auto 2rem', md: '0 2rem 0 0' },
							}}>
							<Box
								sx={{
									paddingTop: '140%',
									position: 'relative',
									backgroundSize: 'cover',
									backgroundPosition: 'center',
									backgroundColor: 'darkgrey',
									backgroundImage: `url(${movie1.background})`,
									borderRadius: '8px',
								}}
							/>
						</Box>
						{/* poster */}

						{/* media info */}
						<Box
							sx={{
								width: { xs: '100%', md: '60%' },
								color: 'white',
							}}>
							<Stack spacing={3}>
								{/* title */}
								<Typography
									variant="h4"
									fontSize={{ xs: '2rem', md: '2rem', lg: '4rem' }}
									fontWeight="700"
									sx={{ ...uiConfigs.style.typoLines(2, 'left') }}>
									{movie1.title}
								</Typography>
								{/* title */}

								{/* rate and genres */}
								<Stack direction="row" spacing={1} alignItems="center">
									{/* rate */}
									<CircularRate value={movie1.imdb} />
									{/* rate */}
									<Divider orientation="vertical" />
									{/* genres */}
									Viễn Tưởng
									{/* genres */}
								</Stack>
								{/* rate and genres */}
								<Stack spacing={1} direction="column">
									<Typography variant="body1">Đạo diễn: {director}</Typography>
									<Typography variant="body1">Quốc gia: {country}</Typography>
									<Typography variant="body1">{movie1.release}</Typography>
								</Stack>

								{/* overview */}
								<Typography
									variant="body1"
									sx={{ ...uiConfigs.style.typoLines(5) }}>
									{movie1.description}
								</Typography>
								{/* overview */}

								{/* buttons */}
								<Stack direction="row" spacing={1}>
									<Button
										variant="text"
										sx={{
											width: 'max-content',
											'& .MuiButon-starIcon': { marginRight: '0' },
											color: '#ff0000'
										}}
										size="large"
										startIcon={
											<FavoriteIcon />
											// isFavorite ? (
											//   <FavoriteIcon />
											// ) : (
											//   <FavoriteBorderOutlinedIcon />
											// )
										}
										loadingPosition="start"
										// loading={onRequest}
										// onClick={onFavoriteClick}
									/>
									{/* <Link
                    to={routesGen.MediaWatch(
                      mediaType,
                      media.mediaId || media.id
                    )}
                  > */}
									<Button
										variant="contained"
										sx={{
											fontSize: '13px',
											backgroundColor: '#ff0000',
											'&:hover': {
												backgroundColor: alpha('#ff0000', 0.8),
											},
										}}>
										Xem ngay
									</Button>
									{/* </Link> */}
								</Stack>
								{/* buttons */}

								{/* cast */}
								<Container header="Diễn viên">
									<Box
										sx={{
											'& .swiper-slide': {
												width: { xs: '50%', md: '25%', lg: '20.5%' },
												color: 'primary.contrastText',
											},
										}}>
										<Swiper
											spaceBetween={10}
											slidesPerView={'auto'}
											grabCursor={true}
											style={{ width: '100%', height: 'max-content' }}>
											{actors.map((actor, index) => (
												<SwiperSlide key={index}>
													<Link to={`/actor/${actor.actorID}`}>
														<Box
															sx={{
																paddingTop: '120%',
																color: 'text.primary',
																position: 'relative',
																backgroundSize: 'cover',
																backgroundPosition: 'center',
																backgroundColor: 'darkgrey',
																backgroundImage: `url(${actor.image})`,
																borderRadius: '8px',
															}}>
															<Box
																sx={{
																	position: 'absolute',
																	width: '100%',
																	height: 'max-content',
																	bottom: 0,
																	padding: '8px',
																	backgroundColor: 'rgba(0,0,0,0.6)',
																}}>
																<Typography className="text-white">
																	{actor.name}
																</Typography>
															</Box>
														</Box>
													</Link>
												</SwiperSlide>
											))}
										</Swiper>
									</Box>
								</Container>
								{/* cast */}
							</Stack>
						</Box>
						{/* media info */}
					</Box>
				</Box>
				{/* media content */}

				{/* media videos */}
				<div className="pt-[2rem]">
					<Container header="Trailer giới thiệu">
						<div
							dangerouslySetInnerHTML={{ __html: movie1.html }}
							className="items-center"
						/>
					</Container>
				</div>
				{/* media videos */}

				{/* media reviews */}
				<MovieComment />
				{/* media reviews */}

				{/* media recommendation */}
				{/* <Container header="Có thể bạn sẽ thích">
          {media.recommend.length > 0 && (
            <RecommendSlide medias={media.recommend} mediaType={mediaType} />
          )}
          {media.recommend.length === 0 && (
            <MediaSlide
              mediaType={mediaType}
              mediaCategory={tmdbConfigs.mediaCategory.top_rated}
            />
          )}
        </Container> */}
				{/* media recommendation */}
			</Box>
		</>
	);
};

export default MediaDetail;
