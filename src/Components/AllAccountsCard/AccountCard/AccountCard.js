import React from 'react';
import "./AccountCard.css"

//Ui Functions
import { checkIfSelectedAccount } from '../../../UiFunctions';

//Logical Functions
import { deleteAccount,addCommasToNumber } from '../../../LogicFunctions';

const AccountCard = (props) => {
    return (
        <div className="accountCardContainer">
            <h4 className="accountCardName">{props.name}</h4>
            <h2 className="accountCardAmount">${addCommasToNumber(props.accountBalance)}</h2>
            <div className="accountCardBtnsContainer">
                <button onClick={()=>props.setToCurretAccount()} 
                className= "accountCardSelectBtn"
                    style={{ backgroundColor: checkIfSelectedAccount(props.currentAccountId, props.thisAccountId) ? "gray" : "green" }}>{checkIfSelectedAccount(props.currentAccountId, props.thisAccountId) ? "Selected Account" :"Select Account"}</button>
                <button className="accountCardDeleteBtn" onClick={() => { props.setAllUserAccounts(deleteAccount(props.allAccounts, props.thisAccountId, props.setCurrentAccountId))}}>Delete Account</button>
            </div>
        </div>
    );
};

export default AccountCard;