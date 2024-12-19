import React from "react";
import "./Login.scss";

const Login = () => { 
    return (
        <div className="login-container">
            <h1>Sign In</h1>
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
                    
                        <input type="checkbox" />
                        Remember me
                
                </div>

                <div className="button-login-css">
                    <button>Đăng nhập</button>
                </div>
            </form>
        </div>
    )

}

export default Login;