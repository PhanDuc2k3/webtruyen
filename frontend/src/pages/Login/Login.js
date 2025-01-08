import React, { useState } from "react";
import "./Login.scss";
import { useNavigate } from "react-router-dom";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import * as UserService from "../../services/UserService"; // Import UserService
import { useAuth } from "../../contexts/authContext";  // Import hook useAuth

const Login = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [loading, setLoading] = useState(false);
    const [avatarUrl, setAvatarUrl] = useState("");  // Thêm trạng thái avatarUrl
    const [isLoggedIn, setIsLoggedIn] = useState(false);  // Thêm trạng thái isLoggedIn
    const { login } = useAuth();  // Lấy hàm login từ context

    const navigate = useNavigate();

    const handleHome = () => {
        navigate("/");
    };

    const handleLogin = async (e) => {
        e.preventDefault();

        setLoading(true);

        try {
            const response = await UserService.loginUser({ email, password });

            if (response.status === "OK") {
                // Gọi hàm login từ context để cập nhật trạng thái
                login(response.access_token, response.avatarUrl);
                setTimeout(() => navigate("/"), 2000);
                toast.success("Đăng nhập thành công!", {
                    position: "top-right",
                    autoClose: 2000,
                });

                
            } else {
                toast.error(response.message || "Đăng nhập không thành công.", {
                    position: "top-right",
                });
            }
        } catch (err) {
            toast.error("Đã xảy ra lỗi, vui lòng thử lại.", {
                position: "top-right",
            });
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="login-container">
            <h1>Login</h1>
            <form onSubmit={handleLogin}>
                <div className="input-login-css">
                    <span>Email:</span>
                    <input
                        type="email"
                        placeholder="Nhập email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                    />
                </div>

                <div className="input-login-css">
                    <span>Password:</span>
                    <input
                        type="password"
                        placeholder="Nhập mật khẩu"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        required
                    />
                </div>

                <div className="remember-login-css">
                    <label className="remember-login__label">
                        <input type="checkbox" />
                        Remember me
                    </label>
                    <a href="#" className="forgot-password">Quên mật khẩu?</a>
                </div>

                <div className="button-container-login">
                    <div className="button-login-css">
                        <button type="submit" disabled={loading}>
                            {loading ? "Đang đăng nhập..." : "Đăng nhập"}
                        </button>
                    </div>
                    <div className="button-login-css" onClick={handleHome}>
                        <button type="button">Trang chủ</button>
                    </div>
                </div>
            </form>

            {/* ToastContainer để hiển thị thông báo */}
            <ToastContainer />
        </div>
    );
};

export default Login;
