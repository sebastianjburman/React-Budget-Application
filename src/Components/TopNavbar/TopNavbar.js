import React from 'react';
import "./TopNavbar.css"

import { ReactComponent as TopNavbarLogo } from "../../Svgs/topNavbarLogo.svg"

const TopNavbar = () => {
    return (
        <div className="topNavbarContainer">
            <div className= "topNavbarSvgContainer">
                <TopNavbarLogo className = "topNavbarSvg"></TopNavbarLogo>
            </div>
            <h1 className="topNavbarHeader">Budget App</h1>
        </div>
    );
};

export default TopNavbar;