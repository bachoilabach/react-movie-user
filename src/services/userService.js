import axios from '../axious';
const handleLoginApi = (userEmail, userPassword) => {
	return axios.post('/api/login', {
		email: userEmail,
		password: userPassword,
	});
};

const handleSignUpApi = (userEmail, userPassword,userFullName, roleID) => {
	return axios.post('/api/user/create-new-user', {
		email: userEmail,
		password: userPassword,
		fullName: userFullName,
		roleID: roleID,
	});
};

const handleUpdateUserDataApi = (userData) => {
	console.log(userData)
	return axios.put('/api/user/edit-user', {
		user: userData,
	});
};

export {
	handleLoginApi,
	handleSignUpApi,
	handleUpdateUserDataApi,
};
