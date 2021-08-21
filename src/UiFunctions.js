//Transaction Svgs
import { ReactComponent as FoodSvg } from './Svgs/food.svg'
import { ReactComponent as HousingSvg } from './Svgs/housing.svg'
import { ReactComponent as TransportationSvg } from './Svgs/transportation.svg'
import { ReactComponent as UtilitiesSvg } from './Svgs/utilites.svg'
import { ReactComponent as InsuranceSvg } from './Svgs/insurance.svg'
import { ReactComponent as MedicalSvg } from './Svgs/medical.svg'
import { ReactComponent as TransferSvg } from './Svgs/transfer.svg'
import { ReactComponent as PersonalSpendingSvg } from './Svgs/personalSpending.svg'
import { ReactComponent as EntertainmentSvg } from './Svgs/entertainment.svg'
import { ReactComponent as MiscellaneousSvg } from './Svgs/miscellaneous.svg'
import { ReactComponent as IncomeSvg } from './Svgs/income.svg'

//Theme Objects
import { darkMode, lightMode } from './ThemeObjects.js'


//Highlights new transaction button in  NewTransactionsComponent
const highlightTransactionTypeBtn = (transactionTypeState, transactionBtn) => {
    if (transactionTypeState === transactionBtn) {
        //Get css variable value
        return getComputedStyle(document.documentElement).getPropertyValue('--text-Color');
    }
    else {
        return getComputedStyle(document.documentElement).getPropertyValue('--background-Color');;
    }
}


//Highlights new transaction button text in  NewTransactionsComponent
const highlightTransactionTypeBtnText = (transactionTypeState, transactionBtn) => {
    if (transactionTypeState === transactionBtn) {
        return getComputedStyle(document.documentElement).getPropertyValue('--background-Color')
    }
    else {
        return getComputedStyle(document.documentElement).getPropertyValue('--text-Color');
    }
}

//Picks correct svg based on transaction category
const pickCorrectSvg = (svgName) => {
    switch (svgName) {
        case "food":
            return <FoodSvg className="recentTransactionSvg"></FoodSvg>
        case "housing":
            return <HousingSvg className="recentTransactionSvg"></HousingSvg>
        case "transportation":
            return <TransportationSvg className="recentTransactionSvg"></TransportationSvg>
        case "utilities":
            return <UtilitiesSvg className="recentTransactionSvg"></UtilitiesSvg>
        case "insurance":
            return <InsuranceSvg className="recentTransactionSvg"></InsuranceSvg>
        case "medical":
            return <MedicalSvg className="recentTransactionSvg"></MedicalSvg>
        case "transfer":
            return <TransferSvg className="recentTransactionSvg"></TransferSvg>
        case "personalSpending":
            return <PersonalSpendingSvg className="recentTransactionSvg"></PersonalSpendingSvg>
        case "entertainment":
            return <EntertainmentSvg className="recentTransactionSvg"></EntertainmentSvg>
        case "miscellaneous":
            return <MiscellaneousSvg className="recentTransactionSvg"></MiscellaneousSvg>
        case "income":
            return <IncomeSvg className="recentTransactionSvg"></IncomeSvg>
        default:{
            return null
        }
    }
}

//If list of transactions is empty show this message
const messageIfNoTransactions = (amountOfTransactions) => {
    if (amountOfTransactions < 1) {
        return <h1>Add a Transaction</h1>
    }
}

//Checks if account is selected and returns a boolean
//Used for btn color. Green if not selected and grey if selected
const checkIfSelectedAccount = (currentAccount, accountId) => {
    if (currentAccount === accountId) {
        return true;
    }
    else{
        return false
    } 
}
//Changes css variable to light or dark mode
const themeSwitch = (toggleDarkMode) => {
    if (toggleDarkMode === true) {
        document.documentElement.style.setProperty('--background-Color', darkMode.backgroundColor);
        document.documentElement.style.setProperty('--text-Color', darkMode.textColor);
        document.documentElement.style.setProperty('--navBarBackground', darkMode.navBarBackground);
        document.documentElement.style.setProperty('--component-Background', darkMode.componentBackground);
        document.documentElement.style.setProperty('--component-Color-One', darkMode.componentColorOne);
        document.documentElement.style.setProperty('--component-Color-Two', darkMode.componentColorTwo);
    }
    if (toggleDarkMode === false) {
        document.documentElement.style.setProperty('--background-Color', lightMode.backgroundColor);
        document.documentElement.style.setProperty('--text-Color', lightMode.textColor);
        document.documentElement.style.setProperty('--navBarBackground', lightMode.navBarBackground);
        document.documentElement.style.setProperty('--component-Background', lightMode.componentBackground);
        document.documentElement.style.setProperty('--component-Color-One', lightMode.componentColorOne);
        document.documentElement.style.setProperty('--component-Color-Two', lightMode.componentColorTwo);
    }
}


export { highlightTransactionTypeBtn, highlightTransactionTypeBtnText, 
    pickCorrectSvg, messageIfNoTransactions, checkIfSelectedAccount, themeSwitch }