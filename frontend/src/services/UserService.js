import axios from 'axios';

export const axiosJWT = axios.create();

export const loginUser = async (data) => {
    try {
        // Sử dụng đường dẫn tương đối
        const res = await axios.post('/api/user/singin', data);
        return res.data;
    } catch (error) {
        console.error('Error occurred while logging in:', error);
        throw error;
    }
};


export const singupUser = async (data) => {
    try {
        const res = await axios.post(`/api/user/singup`, data);  // Chỉ cần sử dụng /api
        return res.data;
    } catch (error) {
        console.error('Error ', error);
        throw error;
    }
};

export const getDetailsUser = async (id, access_token) => {
    try {
        const res = await axios.get(`/api/user/get-details/${id}`, {
            headers: {
                token: `Bearer ${access_token}`,
            }
        });
        return res.data;
    } catch (error) {
        console.error('Error ', error);
        throw error;
    }
};

export const refreshToken = async () => {
    try {
        const res = await axiosJWT.post(`/api/user/refresh-token`, {
            withCredentials: true
        });
        return res.data;
    } catch (error) {
        console.error("Error refreshing token:", error);
        throw error;
    }
};

export const logoutUser = async () => {
    const res = await axios.post(`/api/user/log-out`);
    return res.data;
};

export const updateUser = async (id, data, access_token) => {
    const res = await axiosJWT.put(`/api/user/update-user/${id}`, data, {
        headers: {
            token: `Bearer ${access_token}`,
        }
    });
};

export const deleteUser = async (id, access_token) => {
    const res = await axiosJWT.delete(`/api/user/delete-user/${id}`, {
        headers: {
            token: `Bearer ${access_token}`,
        }
    });
};

export const getAllUser = async (access_token) => {
    const res = await axiosJWT.get(`/api/user/getAll`, {
        headers: {
            token: `Bearer ${access_token}`,
        }
    });
    return res.data;
};
