import React from 'react';
import "./BottomNavigatorBtn.css"

const BottomNavigatorBtn = (props) => {




    return (
        <div className="bottomNavigatorBtnContainer">
            {/*Highlights bottomnav button based on what page user is on*/}
            <button className={(props.currentPage === props.pageName) ? "bottomNavigatorBtnContainerButtonHighlighted" : "bottomNavigatorBtnContainerNotHighlighted"} onClick={() => props.setCurrentPage()}>
                <div className="btnSvgContainer">
                    {props.btnSvg}
                </div>
                <h4>{props.btnName}</h4>
            </button>
        </div>
    );
};

export default BottomNavigatorBtn;