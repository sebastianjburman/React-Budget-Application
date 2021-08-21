import React from 'react';
import "./NetWorthCard.css"

//Logical functions
import { addCommasToNumber } from '../../LogicFunctions';

const NetWorthCard = (props) => {
    return (
        <div className="netWorthContainer">
            <h2>Net Worth</h2>
            <h3>${addCommasToNumber(props.netWorth)}</h3>

            <h4>Current Account - {props.currentAccountName}</h4>
            <h3>${addCommasToNumber(props.curretAccountAmount)}</h3>
        </div>
    );
};

export default NetWorthCard;