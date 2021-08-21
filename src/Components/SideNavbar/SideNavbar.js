import React from 'react';
import { useState } from 'react';
import "./SideNavbar.css"

//Components
import SideNavbarNavigatorBtn from './SideNavbarNavigatorBtn/SideNavbarNavigatorBtn';

//Button Svgs
import { ReactComponent as MenuSvg } from '../../Svgs/menu.svg';
import { ReactComponent as HomeSvg } from '../../Svgs/dashboard.svg';
import { ReactComponent as TransactionSvg } from '../../Svgs/transactions.svg';
import { ReactComponent as AccountsSvg } from '../../Svgs/accounts.svg';
import { ReactComponent as SettingsSvg } from '../../Svgs/settings.svg';


const SideNavbar = (props) => {

    const [sideNavbarClass, setSideNavbarClass] = useState("sideNavbarContainer")

    //Toggle classes of sideNavbar between in and out
    const slideNavBarOut = () => {
        if (sideNavbarClass === "sideNavbarContainer") {
            setSideNavbarClass("sideNavbarContainerOut")
        }
        else {
            setSideNavbarClass("sideNavbarContainer")
        }
    }

    return (
        <div className={sideNavbarClass}>
            <button className="openSideNavBtn" onClick={() => slideNavBarOut()}>
                <div>
                    <MenuSvg className="sideNavSvgs"></MenuSvg>
                </div>
            </button>
            <SideNavbarNavigatorBtn setCurrentPage={() => props.setCurrentPage("homePage", setSideNavbarClass("sideNavbarContainer"))} btnName="Dashboard" btnSvg={<HomeSvg className="sideNavSvgs"></HomeSvg>} sideNavbarClass={sideNavbarClass}></SideNavbarNavigatorBtn>
            <SideNavbarNavigatorBtn setCurrentPage={() => props.setCurrentPage("transactionsPage", setSideNavbarClass("sideNavbarContainer"))} btnName="Transactions" btnSvg={<TransactionSvg className="sideNavSvgs"></TransactionSvg>} sideNavbarClass={sideNavbarClass}></SideNavbarNavigatorBtn>
            <SideNavbarNavigatorBtn setCurrentPage={() => props.setCurrentPage("accountsPage", setSideNavbarClass("sideNavbarContainer"))} btnName="Accounts" btnSvg={<AccountsSvg className="sideNavSvgs"></AccountsSvg>} sideNavbarClass={sideNavbarClass}></SideNavbarNavigatorBtn>
            <SideNavbarNavigatorBtn setCurrentPage={() => props.setCurrentPage("settingsPage", setSideNavbarClass("sideNavbarContainer"))} btnName="Settings" btnSvg={<SettingsSvg className="sideNavSvgs"></SettingsSvg>} sideNavbarClass={sideNavbarClass}></SideNavbarNavigatorBtn>
        </div>
    );
};

export default SideNavbar;