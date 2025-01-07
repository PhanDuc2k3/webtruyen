import React, { useState } from "react";
import "./Login.scss";
import { useNavigate } from "react-router-dom";
import * as UserService from "../../services/UserService"; // Import UserService

const Login = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState("");
    
    const navigate = useNavigate();
    
    const handleHome = () => {
        navigate("/");
    };
    
    const handleLogin = async (e) => {
        e.preventDefault();
        
        setLoading(true);
        setError("");

        try {
            // Gọi hàm loginUser từ UserService
            const response = await UserService.loginUser({ email, password });

            if (response.status === "OK") {
                // Lưu access_token vào localStorage sau khi đăng nhập thành công
                localStorage.setItem("access_token", response.access_token);
                navigate("/"); // Điều hướng đến trang chính sau khi đăng nhập thành công
            } else {
                setError(response.message || "Đăng nhập không thành công.");
            }
        } catch (err) {
            setError("Đã xảy ra lỗi, vui lòng thử lại.");
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

                {error && <div className="error-message">{error}</div>}

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
        </div>
    );
};

export default Login;
