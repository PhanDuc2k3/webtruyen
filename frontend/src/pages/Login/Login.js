import React from "react";
import "./Login.scss";
import { useNavigate } from "react-router-dom";

const Login = () => {
        const navigate = useNavigate();
    const handleHome = () => {
        navigate("/");
    }
    return (
        <div className="login-container">
            <h1>Login</h1>
            <form>
                <div className="input-login-css">
                    <span>Email:</span>
                    <input type="email" placeholder="Nhập email" required/>
                </div>

                <div className="input-login-css">
                    <span>Password:</span>
                    <input type="password" placeholder="Nhập mật khẩu" required/>
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
                        <button>Đăng nhập</button>
                    </div>
                    <div className="button-login-css" onClick={handleHome}>
                        <button>Trang chủ</button>
                    </div>    
                </div>
                
                
            </form>
            
        </div>
    )
}

export default Login;
