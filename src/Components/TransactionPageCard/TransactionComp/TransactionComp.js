import React from 'react';
import "./TransactionComp.css"

//UI functions
import { pickCorrectSvg } from '../../../UiFunctions';

//Logical functions
import { deleteTransaction, addCommasToNumber } from '../../../LogicFunctions';

//Svgs
import { ReactComponent as DeleteSvg } from '../../../Svgs/delete.svg'

const TransactionComp = (props) => {
    return (
        <div className= "transactionCompContainer">
            <div className="transactionCompImg">
                {pickCorrectSvg(props.category)}
            </div>
            <div className= "recentTransactionInfoCon">
                <h5>{props.name}</h5>
                <p>{props.date}</p>
            </div>
            <h3 className="transactionCompPrice">${addCommasToNumber(props.amount.toFixed(2))}</h3>
            <button onClick={() => { props.setAllUserAccounts(deleteTransaction(props.accountId, props.transactionKey,props.allAccounts))}} className = "deleteTransactionBtn">
                <div>
                    <DeleteSvg className = "deleteSvg"></DeleteSvg>
                </div>
            </button>
        </div>
    );
};

export default TransactionComp;