import React from 'react';
import "./BottomNavbar.css"

//Components
import BottomNavigatorBtn from './BottomNavbarComponents/bottomNavigatorBtn/BottomNavigatorBtn.js';

//Button Svgs
import { ReactComponent as HomeSvg } from '../../Svgs/dashboard.svg';
import { ReactComponent as TransactionSvg } from '../../Svgs/transactions.svg';
import { ReactComponent as AccountsSvg } from '../../Svgs/accounts.svg';
import { ReactComponent as SettingsSvg } from '../../Svgs/settings.svg';


const BottomNavbar = (props) => {
    return (
        <div className="bottomNavbarContainer">
            <BottomNavigatorBtn currentPage={props.currentPage} pageName={"homePage"} setCurrentPage={() => props.setCurrentPage("homePage")} btnName="Home" btnSvg={<HomeSvg></HomeSvg>}></BottomNavigatorBtn>
            <BottomNavigatorBtn currentPage={props.currentPage} pageName={"transactionsPage"} setCurrentPage={() => props.setCurrentPage("transactionsPage")} btnName="Transactions" btnSvg={<TransactionSvg></TransactionSvg>}></BottomNavigatorBtn>
            <BottomNavigatorBtn currentPage={props.currentPage} pageName={"accountsPage"} setCurrentPage={() => props.setCurrentPage("accountsPage")} btnName="Accounts" btnSvg={<AccountsSvg></AccountsSvg>}></BottomNavigatorBtn>
            <BottomNavigatorBtn currentPage={props.currentPage} pageName={"settingsPage"} setCurrentPage={() => props.setCurrentPage("settingsPage")} btnName="Settings" btnSvg={<SettingsSvg></SettingsSvg>}></BottomNavigatorBtn>
        </div>
    );
};

export default BottomNavbar;