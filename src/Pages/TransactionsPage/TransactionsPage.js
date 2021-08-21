import React from 'react';
import "./TransactionsPage.css"

//Components
import TransactionPageCard from "../../Components/TransactionPageCard/TransactionPageCard"


const TransactionsPage = (props) => {
    return (
        <div className = "transactionsPageContainer">
            {props.allAccounts.map(account=>{
                return <TransactionPageCard key={account.accountId} accountName={account.accountName} allAccounts={props.allAccounts}
                    accountId={account.accountId} transactions={account.accountTransactions} setAllUserAccounts={props.setAllUserAccounts} ></TransactionPageCard>
            })}
        </div>
    );
};

export default TransactionsPage;