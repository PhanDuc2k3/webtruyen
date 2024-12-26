import React from "react";
import "./NavbarComponent.scss"
import { useNavigate } from "react-router-dom";
const NavbarComponent = () => {
    
    const nagivate = useNavigate();

    const handleSingin = () => {
        nagivate("/login");
    }

    const handleSignup = () => {
        nagivate("/signup");
    }
    
    const handleMangaPage = () => {
        nagivate("/mangaPage");
    }

    const handleManhuaPage = () => {
        nagivate("/manhuaPage");
    }

    const handleManhwaPage = () => {
        nagivate("/manhwaPage");
    }

    return (
        <div>
            <div class="navbar-all">
              <ul class="navbar">
                    <li>
                     COMICS
                        <ul class="dropdown">
                            <li onClick={handleManhwaPage}>TOP MANHWA</li>
                            <li onClick={handleManhuaPage}>TOP MANHUA</li>
                            <li onClick={handleMangaPage}>TOP MANGA</li>
                        </ul>
                    </li>
                    <li >
                    NEW COMICS                

                    </li>
                    <li>
                    HOT MANHWA
                        <ul class="dropdown">
                            <li>Company</li>
                            <li>Team</li>
                            <li>Careers</li>
                        </ul>
                    </li>
                    <li>
                    MORE
                        <ul class="dropdown">
                            <li>Email</li>
                            <li>Phone</li>
                        </ul>
                    </li>
                    <li>
                    RECOMNEND
                    </li>
                    <li>
                    GENRES
                    </li>
                </ul>
                <div className="navbar-button-login-register">
                    <button onClick={handleSingin}>
                        Sign in
                    </button>    
                    <button onClick={handleSignup}>
                        Sign Up
                    </button> 
                </div>
        </div>
        
        </div>
    )
}

export default NavbarComponent;