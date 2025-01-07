import React, { useState } from "react";
import "./SignUp.scss";
import { useNavigate } from "react-router-dom";
import * as UserService from "../../services/UserService"; // Import UserService

const SignUp = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState("");

    const navigate = useNavigate();
    
    const handleHome = () => {
        navigate("/"); // Điều hướng về trang chủ
    }

    const handleSignUp = async (e) => {
        e.preventDefault();
        
        // Kiểm tra mật khẩu và xác nhận mật khẩu có khớp không
        if (password !== confirmPassword) {
            setError("Mật khẩu không khớp.");
            return;
        }

        setLoading(true);
        setError("");  // Xóa lỗi trước khi gửi yêu cầu

        try {
            // Gọi hàm đăng ký từ UserService
            const response = await UserService.singupUser({ email, password, confirmPassword });

            if (response.status === "OK") {
                // Lưu access_token vào localStorage sau khi đăng ký thành công
                localStorage.setItem("access_token", response.access_token);
                navigate("/"); // Điều hướng đến trang chính sau khi đăng ký thành công
            } else {
                setError(response.message || "Đăng ký không thành công.");
            }
        } catch (err) {
            setError("Đã xảy ra lỗi, vui lòng thử lại.");
        } finally {
            setLoading(false);
        }
    }

    return (
        <div className="signup-container">
            <h1>Sign Up</h1>
            <form onSubmit={handleSignUp}>
                <div className="input-signup-css">
                    <span>Email:</span>
                    <input
                        type="email"
                        placeholder="Nhập email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                    />
                </div>

                <div className="input-signup-css">
                    <span>Password:</span>
                    <input
                        type="password"
                        placeholder="Nhập mật khẩu"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        required
                    />
                </div>

                <div className="input-signup-css">
                    <span>Confirm Password:</span>
                    <input
                        type="password"
                        placeholder="Nhập lại mật khẩu"
                        value={confirmPassword}
                        onChange={(e) => setConfirmPassword(e.target.value)}
                        required
                    />
                </div>

                <div className="remember-signup-css">
                    <label className="remember-signup__label">
                        <input type="checkbox" />
                            Remember me
                    </label>
                    <a href="#" className="forgot-password">Quên mật khẩu?</a>
                </div>

                {error && <div className="error-message">{error}</div>} 

                <div className="button-container-signup">
                    <div className="button-signup-css">
                        <button type="submit" disabled={loading}>
                            {loading ? "Đang đăng ký..." : "Đăng ký"}
                        </button>
                    </div>
                    <div className="button-signup-css" onClick={handleHome}>
                        <button type="button">Trang chủ</button>
                    </div>    
                </div>
            </form>
        </div>
    );
};

export default SignUp;
