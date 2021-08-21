import React from 'react';
import "./RecentTransaction.css"

//Logic functions
import { addCommasToNumber } from '../../../LogicFunctions';

//UI Functions
import { pickCorrectSvg } from '../../../UiFunctions';


const RecentTransaction = (props) => {

    return (
        <div className="recentTransactionContainer">
            <div className="recentTransactionImg">
                {pickCorrectSvg(props.category)}
            </div>
            <div className="recentTransactionInfoCon">
                <h5>{props.name}</h5>
                <p>{props.date}</p>
            </div>
            <h3 className="recentTransactionPrice"> ${addCommasToNumber(props.amount.toFixed(2))}</h3>
        </div>
    );
};

export default RecentTransaction;