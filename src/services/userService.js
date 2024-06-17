import axios from '../axious';
const handleLoginApi = (userEmail, userPassword) => {
	return axios.post('/api/login', {
		email: userEmail,
		password: userPassword,
	});
};

const handleSignUpApi = (userEmail, userPassword, userFullName, roleID) => {
	return axios.post('/api/user/create-new-user', {
		email: userEmail,
		password: userPassword,
		fullName: userFullName,
		roleID: roleID,
	});
};

const handleUpdateUserDataApi = (userData) => {
	console.log(userData);
	return axios.put('/api/user/edit-user', {
		user: userData,
	});
};

const handleGetFavouriteMovie = (email) => {
	return axios.get(`/api/favourite/favourite-movies?email=${email}`, {
		email: email,
	});
};

const handleAddFavouriteMovie = (email, movieID) => {
	return axios.post('/api/favourite/add-favourite-movie', {
		email: email,
		movieID: movieID,
	});
};

const handleDeleteFavouriteMovie = (email, movieID) => {
	return axios.delete('/api/favourite/delete-favourite-movie', {
		data: {
			email: email,
			movieID: movieID,
		},
	});
};

export {
	handleLoginApi,
	handleSignUpApi,
	handleUpdateUserDataApi,
	handleGetFavouriteMovie,
	handleAddFavouriteMovie,
	handleDeleteFavouriteMovie,
};
