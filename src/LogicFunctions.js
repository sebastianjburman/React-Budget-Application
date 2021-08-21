//Takes in allaccounts array and calculates networth for all accounts
const calculateNetWorth = (allUserAccounts) => {
    let netWorth = 0;
    for (let i = 0; i < allUserAccounts.length; i++) {
        for (let j = 0; j < allUserAccounts[i].accountTransactions.length; j++) {
            netWorth += allUserAccounts[i].accountTransactions[j].amount
        }
    }
    
    //Rounds 2 decimal places
    return netWorth.toFixed(2);
}


//Gets the current account object based on the currentAccount id
const getCurrentAccountObject = (allUserAccounts, currentAccountId) => {
    let currentAccountObject;

    //Loop through all account and get currentAccount object
    allUserAccounts&&allUserAccounts.forEach(account => {
        if (account.accountId === currentAccountId) {
            currentAccountObject = account
        }
    });
    return currentAccountObject
}


//Calculates the total for current account
const calculateTotalAccountAmount = (allUserAccounts, currentAccountId) => {
    let currentAccountObject = getCurrentAccountObject(allUserAccounts, currentAccountId)
    let accountTotal = 0;
    for (let i = 0; i < currentAccountObject.accountTransactions.length; i++) {
        accountTotal += currentAccountObject.accountTransactions[i].amount
    }
    //Rounds 2 decimal places
    return accountTotal.toFixed(2);
}


//Creates list of lables for graph 
const createListOfLabels = (currentAccountTransactions) => {
    //List of labels for graph x axis
    let listOfLabels = []
    //Loop through all transactions in current account sorted by date and add to list of labels
    sortTransactionByDate(currentAccountTransactions).forEach(transaction => {
        listOfLabels.push(transaction.name)
    });
    return listOfLabels;
}


//Creates list of price amounts for graph 
const createListOfPriceAmounts = (currentAccountTransactions) => {
    //List of prices for graph y axis
    let listOfPriceAmounts = []
    //Loop through all transactions in current account sorted by date and add to list of prices
    sortTransactionByDate(currentAccountTransactions).forEach(transaction => {
        listOfPriceAmounts.push(transaction.amount)
    });
    return listOfPriceAmounts;
}

//Form validation for a new transaction
const formValidation = (name, amount, date) => {
    if (name.length > 0 && amount.length > 0 && date !== "") {
        return true;
    }
    else {
        alert("Fill Out Rest Of Form")
        return false;
    }
}

//Takes in a number and returns the number as a string with commas
const addCommasToNumber = (number) => {
    var str = number.toString().split(".");
    str[0] = str[0].replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    return str.join(".");
}

//Return allAccount object with deleted transaction
const deleteTransaction = (accountId, transactionId, allAccounts) => {
    var updatedAllAccounts = [...allAccounts];
    let updatedAccountTransactions;
    for (let i = 0; i < allAccounts.length; i++) {
        if (accountId === allAccounts[i].accountId) {
            updatedAccountTransactions = allAccounts[i]
                .accountTransactions.filter(transaction => transaction.key !== transactionId
                )
            updatedAllAccounts[i] = { ...updatedAllAccounts[i], accountTransactions: updatedAccountTransactions };
        }

    }
    return updatedAllAccounts;
}
//Return allAccounts object with new account added
const createAccount = (newAccountName, allAccounts) => {
    //Form Validation
    if (newAccountName.length < 3) {
        alert("Account Name Must Be More Than 3 Characters")
        //Return not updated allAccount
        return allAccounts
    }
    const randomId = (Math.random() + 1).toString(36).substring(7);
    let newAccountObject = {
        accountName: newAccountName, accountId: randomId, accountTransactions: []
    }
    return [...allAccounts, newAccountObject];
}

//Return allAccounts object with account deleted
const deleteAccount = (allAccounts, accountId, setCurrentAccountId) => {
    if (allAccounts.length > 1) {
        const updatedAllAccounts = allAccounts.filter(account => account.accountId !== accountId)
        //Sets the current account to a diffrent one 
        setCurrentAccountId(updatedAllAccounts[0].accountId)
        return updatedAllAccounts;
    }
    else {
        alert("Can't Delete Last Account")
        return allAccounts
    }
}
//Sort array of transactions by date
const sortTransactionByDate = (arrayOfTransactions) => {
    let sortedArray = [...arrayOfTransactions].sort(function (a, b) {
        return new Date(b.date) - new Date(a.date);
    });
    return sortedArray

}


export {
    getCurrentAccountObject, createListOfLabels,
    createListOfPriceAmounts, calculateNetWorth,
    calculateTotalAccountAmount, formValidation,
    addCommasToNumber, deleteTransaction, createAccount,
    deleteAccount, sortTransactionByDate
}