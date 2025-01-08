import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "./NavbarComponent.scss";
import { useAuth } from "../../contexts/authContext";  // Import useAuth hook
import ImgAvt from "../../assets/img_profile_default.png"

const NavbarComponent = () => {
    const { isLoggedIn, avatarUrl, logout } = useAuth();  // Lấy dữ liệu từ context
    const navigate = useNavigate();

    const handleProfilePage = () => {
        navigate("/profilePage");  // Gọi logout từ context
    };

    const handleSignup = () => {
        navigate("/signup");
    };

    const handleMangaPage = () => {
        navigate("/mangaPage");
    };

    const handleManhuaPage = () => {
        navigate("/manhuaPage");
    };

    const handleManhwaPage = () => {
        navigate("/manhwaPage");
    };

    return (
        <div>
            <div className="navbar-all">
                <ul className="navbar">
                    <li>
                        COMICS
                        <ul className="dropdown">
                            <li onClick={handleManhwaPage}>TOP MANHWA</li>
                            <li onClick={handleManhuaPage}>TOP MANHUA</li>
                            <li onClick={handleMangaPage}>TOP MANGA</li>
                        </ul>
                    </li>
                    <li>NEW COMICS</li>
                    <li>
                        HOT MANHWA
                        <ul className="dropdown">
                            <li>Company</li>
                            <li>Team</li>
                            <li>Careers</li>
                        </ul>
                    </li>
                    <li>
                        MORE
                        <ul className="dropdown">
                            <li>Email</li>
                            <li>Phone</li>
                        </ul>
                    </li>
                    <li>RECOMMEND</li>
                    <li>GENRES</li>
                </ul>
                <div className="navbar-button-login-register">
                    {!isLoggedIn ? (
                        <>
                            <button onClick={() => navigate("/login")}>Sign in</button>
                            <button onClick={handleSignup}>Sign Up</button>
                        </>
                    ) : (
                        <div className="user-avatar">
                            <img
                                src={ImgAvt}  // Sử dụng avatar từ context (hoặc mặc định)
                                alt="Avatar"
                                className="avatar-img"
                                title="Click to Logout"
                                onClick={handleProfilePage}
                            />
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
};

export default NavbarComponent;
