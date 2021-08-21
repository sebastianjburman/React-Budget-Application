import React from 'react';
import "./RecentTransactionsCard.css"



//Components
import RecentTransaction from './RecentTransaction/RecentTransaction';


//Logical Functions
import { sortTransactionByDate } from '../../LogicFunctions';


//Ui functions
import { messageIfNoTransactions } from '../../UiFunctions';


const RecentTransactionsCard = (props) => {

    return (
        <div className="recentTransactionCardContainer">
            <h2>Recent Transactions</h2>
            <div className="recentTransactionsContainer">
                {messageIfNoTransactions(props.currentAccountTransactions.length)}
                {sortTransactionByDate(props.currentAccountTransactions).map(transaction => {
                    return <RecentTransaction key = {transaction.key} name={transaction.name}
                        category={transaction.category} date = {transaction.date}
                        amount = {transaction.amount}></RecentTransaction>
                })}

            </div>
        </div>
    );
};

export default RecentTransactionsCard;