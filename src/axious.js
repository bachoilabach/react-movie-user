import axios from 'axios';
import { toast } from 'react-toastify';

const jwtToken = localStorage.getItem('jwt');
console.log(jwtToken)

const instance = axios.create({
	baseURL: `http://localhost:8080`,
	withCredentials: true,
});


if (jwtToken) {
	instance.defaults.headers.common['Authorization'] = `Bearer ${jwtToken}`;
}

instance.interceptors.response.use(
	(response) => {
		// const { data } = response
		return response.data;
	},
	(err) => {
		const status = err.response?.status || 500;
		switch (status) {
			// forbidden (permission related issues)
			case 403: {
				return toast.error(`You don't have permission`);
			}
			// generic api error (server related) unexpected
			default: {
				return;
			}
		}
	}
);

export default instance;
