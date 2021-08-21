import React from 'react';
import "./NewTransaction.css"
import { useState } from 'react';

//Logical functions
import { getCurrentAccountObject, formValidation } from '../../LogicFunctions';
import { highlightTransactionTypeBtn, highlightTransactionTypeBtnText } from '../../UiFunctions';


const NewTransaction = (props) => {


    const [transactionType, setTransactionType] = useState("Expense")
    const [transactionName, setTransactionName] = useState("")
    const [transactionAmount, setTransactionAmount] = useState("")
    const [transactionCategory, setTransactionCategory] = useState("food")
    const [transactionDate, setTransactionDate] = useState("")


    const clearInputValues = () => {
        setTransactionName("")
        setTransactionAmount("")
        setTransactionDate("")
        setTransactionCategory("food")
        setTransactionType("Expense")
    }

    const addNewTransaction = (currentActTransactions) => {
        //Checks form values
        const validationValue = formValidation(transactionName, transactionAmount, transactionDate)
        if (validationValue === false) {
            //Stops function
            return null
        }

        //transactionPrice string turned into integer
        let transactionPrice = parseFloat(parseFloat(transactionAmount).toFixed(2));
        //If transactionType is a expense make transaction amount negative
        if (transactionType === "Expense") {
            transactionPrice = transactionPrice * -1
        }
        //Create Random key for transaction
        const randomKey = (Math.random() + 1).toString(36).substring(7);
        //Create new current Account transactions
        const currentAccountTransactions = Array.from(currentActTransactions);

        //Create new transaction
        const newTransactionObject = {
            name: transactionName, key: randomKey, category: transactionCategory,
            date: transactionDate, amount: transactionPrice
        }
        //Add newTransaction to currentAccountTransactions
        currentAccountTransactions.unshift(newTransactionObject)
        //Get current Account Object
        const accountObject = getCurrentAccountObject(props.allAccounts, props.currentAccountId)
        //Get allAccounts object but filter current account out
        const filterOutAccountObject = props.allAccounts.filter(account => account.accountId !== props.currentAccountId)
        //Change accountTransactions in account object
        accountObject.accountTransactions = currentAccountTransactions
        //Add updated account object to filtered allUsersObject
        filterOutAccountObject.push(accountObject)
        //Set allUsersAccount to updated allUsersAccount
        props.setAllUserAccounts(filterOutAccountObject)
        clearInputValues()

    }

    return (
        <div className="newTransactionContainer">
            <h2 className="newTransactionHeader">New Transaction</h2>
            <div className="newTransactionFormContainer">
                <div className="newTransactionsBtnContainer">
                    <button onClick={() => setTransactionType("Expense")} style={{ backgroundColor: highlightTransactionTypeBtn(transactionType, "Expense"), color: highlightTransactionTypeBtnText(transactionType, "Expense") }}>Expense</button>
                    <button onClick={() => setTransactionType("Income")} style={{ backgroundColor: highlightTransactionTypeBtn(transactionType, "Income"), color: highlightTransactionTypeBtnText(transactionType, "Income") }}>Income</button>
                </div>
                <div className="newTransactionInputsContainer">
                    <div className="nameCategoryInputContainer">
                        <label>Name</label>
                        <input type="text" maxLength = "13" value={transactionName} placeholder="Transaction Name" onChange={(e) => setTransactionName(e.target.value)}></input>
                        <label>Category</label>
                        <select value={transactionCategory} onChange={(e) => setTransactionCategory(e.target.value)}>
                            <option value="food">Food</option>
                            <option value="income">Income</option>
                            <option value="housing">Housing</option>
                            <option value="transportation">Transportation</option>
                            <option value="utilities">Utilities</option>
                            <option value="insurance">Insurance</option>
                            <option value="medical">Medical</option>
                            <option value="transfer">Transfer</option>
                            <option value="personalSpending">Personal Spending</option>
                            <option value="entertainment">Entertainment</option>
                            <option value="miscellaneous">Miscellaneous</option>
                        </select>
                    </div>
                    <div className="amountDateInputContainer">
                        <label>Amount</label>
                        <input value={transactionAmount} onChange={(e) => setTransactionAmount(e.target.value)} type="number" placeholder="0.00"></input>
                        <label>Date</label>
                        <input value={transactionDate} type="date" onChange={(e) => setTransactionDate(e.target.value)}></input>
                    </div>
                </div>
                <button onClick={() => addNewTransaction(props.currentAccountTransactions)} className="addTransactionBtn"> Add {transactionType}</button>
            </div>
        </div>
    );
};

export default NewTransaction;