import React from "react";
import "./ProfilePage.scss"
import ImgAvt from "../../assets/img_profile_default.png";
import { useAuth } from "../../contexts/authContext";  // Import useAuth hook
import { useNavigate } from "react-router-dom";
const ProfilePage = () => {
    const { logout } = useAuth();
    const navigate = useNavigate();
    const handleLogout = () => {
        logout();
        navigate("/");
    }
    return (
        <div className="container-ProfilePage">
            <div className="container_ProfilePage_img_inf">
                <div className="container_ProfilePage_img">
                    <div className="container_ProfilePage_img_change">
                        <img src={ ImgAvt} />
                    </div>
                </div>
                <div className="container_ProfilePage_inf">
                    inf
                </div>
            </div>
            <div className="container_Profile_button">
                <button>Đổi thông tin</button>
                <button>Đổi mật khẩu    </button>
                <button onClick={handleLogout}>Đăng xuất</button>
            </div>
        </div>
    )
}

export default ProfilePage;