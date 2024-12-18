import axios from 'axios';

const API_URL = 'http://127.0.0.1:8000';

const axiosInstance = axios.create({
    baseURL: API_URL,
});

axiosInstance.interceptors.response.use(
    response => response,  // if the response is valid, return it as is
    async (error) => {
        if (error.response.status === 401) {
            // Token expired, try refreshing it
            const refreshToken = localStorage.getItem('refresh_token');

            try {
                const response = await axios.post(`${API_URL}/refresh/`, {
                    refresh: refreshToken
                });

                const { access } = response.data;
                alert('access token call')
                localStorage.setItem('access_token', access); // Store new access token

                // Retry the failed request with the new access token
                error.config.headers['Authorization'] = `Bearer ${access}`;

                return axiosInstance(error.config);
            } catch (refreshError) {
                console.error('Refresh token failed:', refreshError);
                // Handle logout or redirect to login page
            }
        }
        return Promise.reject(error);
    }
);

export default axiosInstance;
