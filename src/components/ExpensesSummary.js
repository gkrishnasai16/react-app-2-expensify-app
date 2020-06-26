import React from 'react';
import NumberFormat from 'react-number-format';
import {connect} from 'react-redux';
import selectExpenses from './../selectors/expenses';
import getExpenseTotal from './../selectors/expenses-total';

const ExpensesSummary = ({expenseCount, expenseTotal}) =>{
    const expenseWord = expenseCount === 1 ? 'expense' : 'expenses';
    return (
        <div>
            <h1>Viewing {expenseCount} {expenseWord} totalling <NumberFormat 
                thousandSeparator={true} thousandsGroupStyle="lakh" prefix={'₹'} value={expenseTotal} displayType={'text'}
                /></h1>
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
