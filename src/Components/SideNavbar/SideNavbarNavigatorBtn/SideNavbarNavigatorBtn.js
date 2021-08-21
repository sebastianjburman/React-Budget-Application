import React from 'react';
import "./SideNavbarNavigatorBtn.css"
const SideNavbarNavigatorBtn = (props) => {
    return (
        <div className="sideNavbarNavigatorBtnContainer" onClick={() => props.setCurrentPage()}>
            <button>
                <div>
                    {props.btnSvg}
                </div>
            </button>
            {/*Hide text on button if sideNavbar is in and show if sideNavbar is out*/}
            <p style={{ display: (props.sideNavbarClass === "sideNavbarContainer") ? "none" : "flex" }}>
                {props.btnName}
            </p>
        </div>
    );
};

export default SideNavbarNavigatorBtn;