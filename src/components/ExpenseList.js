import { connect }from 'react-redux';
import React from 'react';
import ExpenseListItem from './ExpenseListItem'
import selectExpenses from './../selectors/expenses';


const ExpenseList = (props) => (
    <div className="content-container">

        <div className="list-header">
            <div className="show-for-mobile">Expenses</div>
            <div className="show-for-desktop">Expense</div>
            <div className="show-for-desktop">Amount</div>
        </div>

        <div className="list-body">
        {props.expenses.length>0 ? props.expenses.map((expense)=><ExpenseListItem expense={expense} key={expense.id}/>) : 
        <div className="list-item list-item--message">
         <span>No expenses</span>
        </div>
        }
        </div>
    </div>
);

const mapStateToProps = (state) =>{
    return {
        expenses: selectExpenses(state.expenses,state.filters)
    };
}

export default connect(mapStateToProps)(ExpenseList);