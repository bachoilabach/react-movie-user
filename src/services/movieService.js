import axios from '../axious';

const handleGetMovieByImdb = () => {
	return axios.get('/api/movie/get-movies-by-Imdb');
};

const getAllMovies = (id) => {
	return axios.get(`/api/movie/get-all-movies?id=${id}`, {
		movieID: id,
	});
};

const handleGetMovieByRelease = () => {
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

const getMoviesByActorID = (id)=>{
	return axios.get(`/api/movie/get-movies-actorID?id=${id}`,{
		actorID: id
	})
}

const getCommentByMoviID = (id)=>{
	return axios.get(`/api/comment/get-comment-by-movieID?id=${id}`,{
		movieID: id
	})
}

export {
	handleGetMovieByImdb,
	getAllMovies,
	handleGetMovieByRelease,
	getAllDirectorsMovie,
	getAllCountries,
	getAllActorsMovie,
	getMoviesByActorID,
	getCommentByMoviID
};
