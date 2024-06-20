import React, { useEffect } from 'react';
import { useState } from 'react';
import {
	handleDeleteFavouriteMovie,
	handleGetFavouriteMovie,
} from '../services/userService';
import MediaItem from '../components/MediaItem';
import { toast } from 'react-toastify';

function FavoritesPage() {
	const [movies, setMovies] = useState([]);
	const [clickBtn, setClickBtn] = useState(false);

	const userData = sessionStorage.getItem('userData');
	if (userData) {
		const parsedUserData = JSON.parse(userData);
		var userEmail = parsedUserData.account.email;
	}
	const fetchFavouriteMovie = async () => {
		if (userData) {
			const response = await handleGetFavouriteMovie(userEmail);
			setMovies(response.favourMoviesDetail);
			console.log(response.favourMoviesDetail);
		} else {
			console.log('Bạn chưa đăng nhập');
		}
	};

	const deleteMovie = async (movieID) => {
		setClickBtn(!clickBtn);
		await handleDeleteFavouriteMovie(userEmail, movieID);
		toast.success('Đã xóa phim yêu thích');
		fetchFavouriteMovie();
	};

	useEffect(() => {
		fetchFavouriteMovie();
	}, []);

	return (
		<>
			{userData ? (
				<div className="px-24 py-14 flex flex-wrap gap-[42px] bg-black">
					{movies.length === 0 ? (
						<div className="h-[476px] bg-black w-[100%] p-6">
							<p className="text-white pt-8 text-lg">
								Bạn không có phim nào trong danh sách yêu thích
							</p>
						</div>
					) : (
						movies.map((movie, index) => (
							<div>
								<MediaItem
									key={index}
									imgUrl={movie.background}
									score={movie.imdb}
									title={movie.title}
									releaseDate={movie.release}
									movieID={movie.movieID}
								/>
								<button
									className="bg-[#ff0000] w-full text-white text-lg rounded-md py-1 hover:opacity-85"
									onClick={() => deleteMovie(movie.movieID)}>
									Xóa
								</button>
							</div>
						))
					)}
				</div>
			) : (
				<div className="h-[476px] bg-black w-[100%] p-6">
					<p className="text-white pt-8 text-lg">
						Nếu bạn muốn xem danh sách phim yêu thích hãy{' '}
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
