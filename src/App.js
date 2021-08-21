import './App.css';
import './themes.css'
import { useEffect, useState } from 'react';

//Custom Hooks
import useLocalStorage from './CustomHooks/useLocalStorage';

//UserAccounts
import userAccounts from './userAccounts';

//Components
import TopNavbar from "./Components/TopNavbar/TopNavbar.js"
import BottomNavbar from './Components/BottomNavbar/BottomNavbar';
import SideNavbar from './Components/SideNavbar/SideNavbar';

//Pages
import Homepage from './Pages/Homepage/Homepage.js';
import TransactionsPage from "./Pages/TransactionsPage/TransactionsPage"
import AccountsPage from "./Pages/AccountsPage/AccountsPage"
import SettingsPage from "./Pages/SettingsPage/SettingsPage"


//Logical functions
import { getCurrentAccountObject,calculateNetWorth, calculateTotalAccountAmount } from './LogicFunctions';
import { themeSwitch } from './UiFunctions';


function App() {

    //Controls which page user is on
    const [currentPage, setCurrentPage] = useState("homePage")
    const [allUserAccounts, setAllUserAccounts] = useLocalStorage("allAccounts",userAccounts)
    const [currentAccountId, setCurrentAccountId] = useState(allUserAccounts[0].accountId)
    const [toggleDarkMode, setToggleDarkMode] = useLocalStorage("theme",false)

    //Selects theme from local storage
    useEffect(() => {
        let themeBoolean = JSON.parse(localStorage.getItem("theme"))
        themeSwitch(themeBoolean)
    }, [])

    const controlPage = (currentPage) => {
        switch (currentPage) {
            case "homePage":
                return <Homepage netWorth={calculateNetWorth(allUserAccounts)} allAccounts={allUserAccounts} currentAccountId={currentAccountId}
                    currentAccountTransactions={getCurrentAccountObject(allUserAccounts, currentAccountId).accountTransactions}
                    currentAccountName={getCurrentAccountObject(allUserAccounts, currentAccountId).accountName} curretAccountAmount= {calculateTotalAccountAmount(allUserAccounts, currentAccountId)}
                    setAllUserAccounts={setAllUserAccounts}></Homepage>
            case "transactionsPage":
                return <TransactionsPage allAccounts={allUserAccounts} setAllUserAccounts={setAllUserAccounts}></TransactionsPage>
            case "accountsPage":
                return <AccountsPage allAccounts={allUserAccounts} setAllUserAccounts={setAllUserAccounts} setCurrentAccountId={setCurrentAccountId}
                currentAccountId = {currentAccountId}></AccountsPage>
            case "settingsPage":
                return <SettingsPage toggleDarkMode = {toggleDarkMode} setToggleDarkMode = {setToggleDarkMode}></SettingsPage>
            default:
                return <Homepage netWorth={calculateNetWorth(allUserAccounts)} allAccounts={allUserAccounts} currentAccountId={currentAccountId}
                    currentAccountTransactions={getCurrentAccountObject(allUserAccounts, currentAccountId).accountTransactions}
                    currentAccountName={getCurrentAccountObject(allUserAccounts, currentAccountId).accountName} curretAccountAmount={calculateTotalAccountAmount(allUserAccounts, currentAccountId)}
                    setAllUserAccounts={setAllUserAccounts}></Homepage>
        }
    }


    return (
        
        <div className="App">
            <TopNavbar></TopNavbar>
            {controlPage(currentPage)}
            {/*Shows in mobile view only */}
            <BottomNavbar currentPage={currentPage} setCurrentPage={setCurrentPage}></BottomNavbar>
            <SideNavbar setCurrentPage={setCurrentPage}></SideNavbar>
        </div>
    );
}

export default App;