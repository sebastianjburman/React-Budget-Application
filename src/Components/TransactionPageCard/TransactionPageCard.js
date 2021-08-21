import React from 'react';
import "./TransactionPageCard.css"

//Components
import TransactionComp from './TransactionComp/TransactionComp';

//Ui functions
import { messageIfNoTransactions } from '../../UiFunctions';

//Logical Functions
import { sortTransactionByDate } from '../../LogicFunctions';

const TransactionPageCard = (props) => {
    return (
        <div className="transactionPageCardContainer">
            <h2 className="accountNameH2">Account Name - {props.accountName}</h2>
            <div className="transactionPageCardTransactionsContainer">
                {messageIfNoTransactions(props.transactions.length)}
                {sortTransactionByDate(props.transactions).map(transaction => {
                    return <TransactionComp key={transaction.key} accountId={props.accountId} category={transaction.category}
                        name={transaction.name} setAllUserAccounts={props.setAllUserAccounts} allAccounts={props.allAccounts} date={transaction.date}
                        transactionKey={transaction.key} amount={transaction.amount}></TransactionComp>
                })}
            </div>
        </div>
    );
};

export default TransactionPageCard;