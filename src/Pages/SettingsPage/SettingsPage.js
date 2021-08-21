import React from 'react';
import "./SettingsPage.css"

//Component
import SettingsCardComponent from '../../Components/SettingsCardComponent/SettingsCardComponent';

const SettingsPage = (props) => {
    return (
        <div className = "settingsPageContainer">
            <SettingsCardComponent toggleDarkMode={props.toggleDarkMode} setToggleDarkMode={props.setToggleDarkMode}></SettingsCardComponent>
        </div>
    );
};

export default SettingsPage;