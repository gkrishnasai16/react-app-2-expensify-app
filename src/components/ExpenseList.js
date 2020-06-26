import { connect }from 'react-redux';
import React from 'react';
import ExpenseListItem from './ExpenseListItem'
import selectExpenses from './../selectors/expenses';


const ExpenseList = (props) => (
    <div>
        <h1>Expense List</h1>
        {props.expenses.length>0 ? props.expenses.map((expense)=><ExpenseListItem expense={expense} key={expense.id}/>) : <p>No expenses</p>}
    </div>
);

const mapStateToProps = (state) =>{
    return {
        expenses: selectExpenses(state.expenses,state.filters)
    };
}

export default connect(mapStateToProps)(ExpenseList);