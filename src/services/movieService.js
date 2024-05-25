import axios from '../axious';

const handleGetMovieByImdb = () => {
	return axios.get('/api/movie/get-movies-by-Imdb');
};

const getAllMovies = (id) => {
	return axios.get(`/api/movie/get-all-movies?id=${id}`, {
		movieID: id,
	});
};

const handleGteMovieByRelease = () => {
	return axios.get('/api/movie/get-movies-by-release');
};

export { handleGetMovieByImdb, getAllMovies, handleGteMovieByRelease };
