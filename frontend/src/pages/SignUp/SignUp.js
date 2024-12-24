
import React from "react";
import "./SignUp.scss";
import { useNavigate } from "react-router-dom";

const SignUp = () => { 
    const navigate = useNavigate();
    const handleHome = () => {
        navigate("/");
    }
    return (
        <div className="signup-container">
            <h1>Sign Up</h1>
            <form>
                <div className="input-signup-css">
                    <span>Email:</span>
                    <input type="email" placeholder="Nhập email" required/>
                </div>

                <div className="input-signup-css">
                    <span>Password:</span>
                    <input type="password" placeholder="Nhập mật khẩu" required/>
                </div>
                <div className="input-signup-css">
                    <span>Password:</span>
                    <input type="password" placeholder="Nhập mật khẩu" required/>
                </div>
                <div className="remember-signup-css">
                    <label className="remember-signup__label">
                        <input type="checkbox" />
                            Remember me
                    </label>
                    <a href="#" className="forgot-password">Quên mật khẩu?</a>
                </div>

                <div className="button-container-signup">
                    <div className="button-signup-css">
                        <button>Đăng nhập</button>
                    </div>
                    <div className="button-signup-css" onClick={handleHome}>
                        <button>Trang chủ</button>
                    </div>    
                </div>
                
                
            </form>
            
        </div>
    )

}

export default SignUp;