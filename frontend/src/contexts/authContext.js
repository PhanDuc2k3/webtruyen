// src/contexts/AuthContext.js
import React, { createContext, useContext, useState, useEffect } from "react";

// Tạo context để quản lý trạng thái đăng nhập và avatar
const AuthContext = createContext();

// Hook tùy chỉnh để dễ dàng sử dụng context
export const useAuth = () => useContext(AuthContext);

// Provider component để bao bọc ứng dụng và cung cấp dữ liệu cho các component con
export const AuthProvider = ({ children }) => {
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const [avatarUrl, setAvatarUrl] = useState("/path/to/default-avatar.png");

    useEffect(() => {
        const storedLoginStatus = localStorage.getItem("access_token");
        const storedAvatarUrl = localStorage.getItem("avatarUrl");

        if (storedLoginStatus && storedAvatarUrl) {
            setIsLoggedIn(true);
            setAvatarUrl(storedAvatarUrl);
        }
    }, []);

    const login = (accessToken, avatarUrl) => {
        localStorage.setItem("access_token", accessToken);
        localStorage.setItem("avatarUrl", avatarUrl || "/path/to/default-avatar.png");
        setIsLoggedIn(true);
        setAvatarUrl(avatarUrl || "/path/to/default-avatar.png");
    };

    const logout = () => {
        localStorage.removeItem("access_token");
        localStorage.removeItem("avatarUrl");
        setIsLoggedIn(false);
        setAvatarUrl("/path/to/default-avatar.png");
    };

    return (
        <AuthContext.Provider value={{ isLoggedIn, avatarUrl, login, logout }}>
            {children}
        </AuthContext.Provider>
    );
};
