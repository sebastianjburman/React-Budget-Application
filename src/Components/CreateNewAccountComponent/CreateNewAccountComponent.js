import React from 'react';
import "./CreateNewAccountComponent.css"
import { useState } from 'react';

//Logical Functions
import { createAccount } from '../../LogicFunctions';


const CreateNewAccountComponent = (props) => {

    const [accountNameForm, setAccountNameForm] = useState("")

    return (
        <div className= "createNewAccountComponentContainer">
            <h3 className= "createNewAccountHeader">Create New Account</h3>
            <div className= "createNewAccountFormContainer">
                <div className= "createNewAccountFormLeftSide">
                    <label>Account Name</label>
                    <input maxLength = "16" type="text" value = {accountNameForm} onChange = {(e)=>setAccountNameForm(e.target.value)}></input>
                </div>
            </div>
            <div className = "createNewAccountBtnContainer">
                <button onClick={() => props.setAllUserAccounts(createAccount(accountNameForm, props.allAccounts), setAccountNameForm(""))}>Create Account</button>
            </div>
        </div>
    );
};

export default CreateNewAccountComponent;