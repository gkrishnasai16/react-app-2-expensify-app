import React from 'react';
import NumberFormat from 'react-number-format';
import {connect} from 'react-redux';
import selectExpenses from './../selectors/expenses';
import getExpenseTotal from './../selectors/expenses-total';
import {Link} from 'react-router-dom';

const ExpensesSummary = ({expenseCount, expenseTotal}) =>{
    const expenseWord = expenseCount === 1 ? 'expense' : 'expenses';
    return (
        <div className="page-header">
            <div className="content-container">
                <h1 className="page-header__title">Viewing <span>{expenseCount}</span> {expenseWord} totalling <span><NumberFormat 
                thousandSeparator={true} thousandsGroupStyle="lakh" prefix={'₹'} value={expenseTotal} displayType={'text'}
                /></span></h1>
                <div className="page-header__actions">
                    <Link className ="button" to = "/create">Add Expense</Link>
                </div>
            </div>    
        </div>
    );
}

const mapStateToProps = (state) => {

    const visibleExpenses = selectExpenses(state.expenses, state.filters);

    return {
        expenseCount:visibleExpenses.length,
        expenseTotal:getExpenseTotal(visibleExpenses)
    };
}

export default connect(mapStateToProps)(ExpensesSummary);
