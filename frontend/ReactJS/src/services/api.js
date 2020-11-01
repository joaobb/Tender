import axios from 'axios';

const API_URL = process.env.REACT_APP_API_URL;

const api = axios.create({ baseURL: `${API_URL}/api/v1` });

const requestHandler = (request) => {
	const savedToken = localStorage.getItem('@Tender:token');
	if (savedToken) {
		const token = savedToken;
		request.headers.Authorization = token;
	}
	return request;
};

api.interceptors.request.use((request) => requestHandler(request));

api.interceptors.response.use(
	(response) => {
		return response;
	},
	function (error) {
		if (error.response) {
			if (error.response.status === 401) {
				//Token is invalid
				localStorage.clear();
				window.location.reload();
			}
		}
		return Promise.reject(error);
	}
);

export default api;
