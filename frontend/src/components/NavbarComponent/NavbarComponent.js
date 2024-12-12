import React from "react";
import "./NavbarComponent.scss"

const NavbarComponent = () => {
    return (
        <div>
            <div class="navbar-all">
    <ul class="navbar">
        <li>
            COMICS
            <ul class="dropdown">
                <li>TOP MANHWA</li>
                <li>TOP MANHUA</li>
                <li>TOP MANGA</li>
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
</div>

        </div>
    )
}

export default NavbarComponent;