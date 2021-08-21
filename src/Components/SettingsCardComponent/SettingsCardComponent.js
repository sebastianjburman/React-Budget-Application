import React from 'react';
import "./SettingsCardComponent.css"

//Ui Functions
import { themeSwitch } from '../../UiFunctions';

const SettingsCardComponent = (props) => {

    return (
        <div className="settingsCardComponentContainer">
            <h1 className="settingsCardHeader">Settings</h1>
            <div className="settingsCardListContainer">
                <div className="themeChangerContainer">
                    <h3>Change Theme</h3>
                    <label className="switch">
                        <input type="checkbox" defaultChecked={props.toggleDarkMode} onChange={() => { themeSwitch(!props.toggleDarkMode, props.setToggleDarkMode(!props.toggleDarkMode)) }}></input>
                        <span className="slider round"></span>
                    </label>
                </div>
                <div className="versionContainer">
                    <h3>Version 1.0</h3>
                </div>

            </div>

        </div>
    );
};

export default SettingsCardComponent;