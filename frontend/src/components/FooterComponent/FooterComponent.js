import React from "react";
import "./FooterComponent.scss"
const FooterComponent = () => {
    return (
        <div className="FooterContainer">
            <ul className="footer-list">
                <li><a href="/">HOME</a></li>
                <li><a href="#contact">CONTACT</a></li>
                <li><a href="#about-us">ABOUT US</a></li>
                <li><a href="#cookie-policy">COOKIE POLICY</a></li>
                <li><a href="#dmca">DMCA</a></li>
                <li><a href="#privacy-policy">PRIVACY POLICY</a></li>
            </ul>


            <div>
                <p style={{
                    color: "gray",
                    fontSize: "14px",
                    display: "flex",
                    justifyContent: "center",
                }}>
                    © 2024 TOP MANHUA Inc. All rights reserved
                </p>
            </div>
        </div>
    );
};

export default FooterComponent;