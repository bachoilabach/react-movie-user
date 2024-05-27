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

const getAllDirectorsMovie = (id) => {
	return axios.get(`/api/get-all-moviedirectors?id=${id}`, {
		movieID: id,
	});
};

const getAllCountries = (id) => {
	return axios.get(`/api/country/get-all-countries?id=${id}`, {
		countryID: id,
	});
};

const getAllActorsMovie = (id) => {
	return axios.get(`/api/get-all-movieactors?id=${id}`, {
		movieID: id,
	});
};

export {
	handleGetMovieByImdb,
	getAllMovies,
	handleGteMovieByRelease,
	getAllDirectorsMovie,
	getAllCountries,
	getAllActorsMovie
};
