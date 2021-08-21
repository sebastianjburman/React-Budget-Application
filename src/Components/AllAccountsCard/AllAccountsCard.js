import React from 'react';
import "./AllAccountsCard.css"

//Components
import AccountCard from './AccountCard/AccountCard';

//Logical Functions
import { calculateTotalAccountAmount } from '../../LogicFunctions';

const AllAccountsCard = (props) => {
    return (
        <div className = "allAccountsCardContainer">
            <h1>All Accounts</h1>
            <div className= "allAccountsComponentContainer">
                {props.allAccounts.map(account =>{
                    return <AccountCard key={account.accountId} name = {account.accountName}
                        accountBalance={calculateTotalAccountAmount(props.allAccounts, account.accountId)}
                        setToCurretAccount={() => {props.setCurrentAccountId(account.accountId)}}
                        currentAccountId={props.currentAccountId} thisAccountId = {account.accountId}
                        allAccounts={props.allAccounts} setAllUserAccounts={props.setAllUserAccounts}
                        setCurrentAccountId = {props.setCurrentAccountId}></AccountCard>
                })}
            </div>
        </div>
    );
};

export default AllAccountsCard;