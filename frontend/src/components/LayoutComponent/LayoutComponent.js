import React from "react";
import HeaderComponent from "../HeaderComponent/HeaderComponent.js";
import FooterComponent from "../FooterComponent/FooterComponent.js";
import NavbarComponent from "../NavbarComponent/NavbarComponent.js";
import "./LayoutComponent.scss"
const Layout = ({children}) => {
    return (
        <div>
            <HeaderComponent />    
            <NavbarComponent/>
            <div className="content">{ children}</div>
            <FooterComponent/>
        </div>
    );
};

export default Layout;