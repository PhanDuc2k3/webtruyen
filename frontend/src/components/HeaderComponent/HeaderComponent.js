import React, { useState } from "react";
import { Input, Button, Drawer } from "antd"; 
import { MenuOutlined, CloseOutlined } from "@ant-design/icons"; // Import icon 3 vạch và dấu X
import "./HeaderComponent.scss";
import IconWeb from "../../assets/iconWeb.png";
import { useNavigate } from "react-router-dom";
const { Search } = Input;

const HeaderComponent = () => {
    // Quản lý trạng thái đóng/mở Drawer
    const [open, setOpen] = useState(false);
    const [isMenuOpen, setIsMenuOpen] = useState(false); // State để kiểm tra menu đang mở hay không
    const gotoLogin = useNavigate();
    const gotoSignUp = useNavigate();
    const gotoHome = useNavigate();
    const handleSingin = () => {
        gotoLogin("/login");
    }

    const handleSignup = () => {
        gotoSignUp("/signup");
    }

    const handleHome = () => {
        gotoHome("/");
    }
    const showDrawer = () => {
        setOpen(true);
        setIsMenuOpen(true); // Khi mở menu, thay đổi icon thành dấu X
    };

    const closeDrawer = () => {
        setOpen(false);
        setIsMenuOpen(false); // Khi đóng menu, thay đổi lại icon thành 3 vạch
    };

    return (
        <div className="HeaderContainer">
            {/* Logo Website */}
            <img src={IconWeb} alt="Website Icon" className="HeaderIcon" onClick={handleHome} />

            {/* Thanh tìm kiếm */}
            <div className="custom-search-container">
                <Input
                    placeholder="Input search text"
                    allowClear
                    size="large"
                    className="custom-input"
                />
                <Button
                    type="primary"
                    size="large"
                    onClick={() => console.log("Search triggered")} // Hàm onSearch
                    className="custom-button"
                >
                    Search
                </Button>
            </div>

            {/* Icon 3 vạch và Drawer */}
            <div>
                <Button
                    icon={isMenuOpen ? <CloseOutlined /> : <MenuOutlined />} // Nếu menu mở thì hiển thị dấu X, ngược lại hiển thị 3 vạch
                    type="primary"
                    onClick={isMenuOpen ? closeDrawer : showDrawer} // Đóng mở Drawer khi nhấn vào
                    className="menu-icon"
                />

                <Drawer
                    title="Menu"
                    placement="left"
                    closable={true}
                    onClose={closeDrawer}
                    open={open}
                    className="custom-drawer"
                    style={{paddingTop:'20px'}}
                >
                    {/* Danh sách menu */}
                    <div className="div-container-button-slider"
                    style={{paddingTop:'20px'}}>
                        <button className="button-css-slider" onClick={handleSingin}>
                            Sign in
                        </button>
                        <button className="button-css-slider" onClick={handleSignup}>
                            Sign up
                        </button>
                        
                    </div>
                    <ul className="menu-list">
                        <li>HOME</li>
                        <li>LATEST UPDATES</li>
                        <li>TOP SEARCH</li>
                        <li>DISCORD</li>
                        <li>CONTACT US</li>
                        <li>SETTINGS</li>
                        <li>TOP MANHHUA</li>
                        <li>TOP MANHWA</li>
                        <li>LATEST MANGA UPDATE</li>
                        <li>TRENDING MANHHUA</li>
                        <li>TOP WEBTON MANHWA</li>
                        <li>SẼ GẦY</li>

                    </ul>
                </Drawer>

            </div>
        </div>
        
    );
};

export default HeaderComponent;
