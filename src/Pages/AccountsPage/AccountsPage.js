import React from 'react';
import "./AccountsPage.css"

//Components
import AllAccountsCard from '../../Components/AllAccountsCard/AllAccountsCard';
import CreateNewAccountComponent from '../../Components/CreateNewAccountComponent/CreateNewAccountComponent';

const AccountsPage = (props) => {
    return (
        <div className="accountsPageContainer">
            <AllAccountsCard allAccounts={props.allAccounts} setCurrentAccountId={props.setCurrentAccountId} currentAccountId={props.currentAccountId}
            setAllUserAccounts={props.setAllUserAccounts}></AllAccountsCard>
            <CreateNewAccountComponent allAccounts={props.allAccounts} setAllUserAccounts={props.setAllUserAccounts}></CreateNewAccountComponent>
        </div>
    );
};

export default AccountsPage;