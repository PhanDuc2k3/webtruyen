import axios from 'axios';

const axiosClient = axios.create({
  baseURL: 'http://localhost:3001/api', // Thay bằng URL backend của bạn
  timeout: 10000,
});

axiosClient.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem('access_token'); // Lấy access_token từ localStorage
    if (token) {
      config.headers['Authorization'] = `Bearer ${token}`;
    }
    return config;
  },
  (error) => Promise.reject(error)
);

axiosClient.interceptors.response.use(
  (response) => response.data,
  async (error) => {
    const originalRequest = error.config;

    if (
      error.response &&
      error.response.status === 401 &&
      !originalRequest._retry
    ) {
      originalRequest._retry = true;

      // Làm mới token
      try {
        const refreshToken = localStorage.getItem('refresh_token');
        const { data } = await axios.post('http://localhost:3001/api/auth/refresh-token', {
          refresh_token: refreshToken,
        });

        localStorage.setItem('access_token', data.access_token);
        originalRequest.headers['Authorization'] = `Bearer ${data.access_token}`;
        return axiosClient(originalRequest); // Thực hiện lại request
      } catch (err) {
        console.error('Token refresh failed', err);
        localStorage.clear(); // Xóa token nếu làm mới thất bại
        window.location.href = '/login'; // Điều hướng về trang đăng nhập
      }
    }

    return Promise.reject(error);
  }
);

export default axiosClient;
