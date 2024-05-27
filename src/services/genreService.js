import axios from '../axious';
const getAllGenresMovie = (id) => {
	return axios.get(`/api/get-all-moviegenres?id=${id}`, {
		movieID: id,
	});
};

export {
    getAllGenresMovie
}
