import React from 'react';
import "./Homepage.css"

//Components
import NetWorthCard from '../../Components/NetWorthCard/NetWorthCard';
import RecentTransactionsCard from '../../Components/RecentTransactionsCard/RecentTransactionsCard';
import NewTransaction from '../../Components/NewTransaction/NewTransaction';
import { Bar } from 'react-chartjs-2';

//Logical functions
import {createListOfLabels, createListOfPriceAmounts} from '../../LogicFunctions';


const Homepage = (props) => {

    const graphData = {
        //Last 7 transactions labels
        labels: createListOfLabels(props.currentAccountTransactions).slice(0, 7),
        datasets: [
            {
                label: 'Last 7 Transactions On Account',
                backgroundColor: getComputedStyle(document.documentElement).getPropertyValue('--text-Color'),
                borderColor: getComputedStyle(document.documentElement).getPropertyValue('--component-Color-Two'),
                borderWidth: 1,
                //Last 7 Transactions In Account
                data: createListOfPriceAmounts(props.currentAccountTransactions).slice(0, 7)
            }
            
        ]
        
    }

    return (
        <div className="homePageContainer">
            <NetWorthCard netWorth={props.netWorth}
                currentAccountName={props.currentAccountName}
                curretAccountAmount={props.curretAccountAmount}></NetWorthCard>
            <div className="barGraphContainer">
                <Bar className="barGraph" options={{ maintainAspectRatio: false }} data={graphData}></Bar>
            </div>
            <RecentTransactionsCard currentAccountTransactions={props.currentAccountTransactions}></RecentTransactionsCard>
            <NewTransaction currentAccountTransactions={props.currentAccountTransactions}
                setAllUserAccounts={props.setAllUserAccounts} allAccounts={props.allAccounts}
                currentAccountId={props.currentAccountId}></NewTransaction>
        </div>
    );
};

export default Homepage;