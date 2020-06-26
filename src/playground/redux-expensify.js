import { createStore, combineReducers, bindActionCreators } from 'redux';
import uuid from 'uuid';

const addExpense = (
    {descripton='',
    note='',
    amount=0,
    createdAt=0
    }={}
) =>({
    type: 'ADD_EXPENSE',
    expense:{
        id: uuid(),
        descripton,
        note,
        amount,
        createdAt
    }
})

const removeExpense = ({id}) => ({
    type: 'REMOVE_EXPENSE',
    id
})

const editExpense = ({id,updates}) =>({
    type:'EDIT_EXPENSE',
    id,
    updates
})

const setTextFilter = (text='') => ({
    type:'SET_TEXT_FILTER',
    text
})

const sortByAmount = () =>({
    type:'SORT_BY_AMOUNT'
})

const sortByDate = () =>({
    type:'SORT_BY_DATE'
})

const setStartDate =(date)=>({
    type:'SET_START_DATE',
    date
})

const setEndDate =(date)=>({
    type:'SET_END_DATE',
    date
})

const getVisibleExpenses = (expenses,{text,sortBy,startDate,endDate}) =>{
    return expenses.filter((expense)=>{
            const startDateMatch = typeof startDate!=='number' || startDate <= expense.createdAt;
            const endDateMatch = typeof endDate!=='number' || endDate >= expense.createdAt;
            const textMatch = expense.descripton.toLowerCase().includes(text.toLowerCase());

            return startDateMatch && endDateMatch && textMatch;
        }).sort((a,b)=>{
            switch (sortBy){
                case 'date': return a.createdAt < b.createdAt ? 1 : -1;
                case 'amount': return a.amount < b.amount ? 1 : -1;
            }
        });

}

//Expenses reducer
const expensesDefaultState = [];
const expensesReducer = (state=expensesDefaultState, action) => {
    switch(action.type){
        case 'ADD_EXPENSE':
            return [...state,action.expense];
        case 'REMOVE_EXPENSE' :
            return state.filter(({id})=>id !==action.id);
        case 'EDIT_EXPENSE' :
            return state.map((expense)=>{
                if(expense.id===action.id){
                    return{
                        ...expense,
                        ...action.updates
                    };
                }
                else{
                    return expense
                }
            });
        default:
            return state;


    }
}



//Filter reducer
const filtersDefaultState = {
    text:'',
    sortBy:'date',
    startDate:undefined,
    endDate:undefined
};

const filtersReducer = (state=filtersDefaultState, action) =>{
    switch(action.type){
        case 'SET_TEXT_FILTER':
            return{
                ...state,
                text:action.text
            }
        case 'SORT_BY_DATE':
            return{
                ...state,
                sortBy:'date'
            }
        case 'SORT_BY_AMOUNT':
            return{
                ...state,
                sortBy:'amount'
            }
        case 'SET_START_DATE':
            return{
                ...state,
                startDate:action.date
            }
        case 'SET_END_DATE':
            return{
                ...state,
                endDate:action.date
            }
        default:
            return state
    }
}

const store = createStore(
    combineReducers({
        expenses:expensesReducer,
        filters:filtersReducer
    })
);

store.subscribe(()=>{
    const state = store.getState();
    const visibleExpenses = getVisibleExpenses(state.expenses,state.filters);
    console.log(visibleExpenses);
});

store.dispatch(addExpense({descripton:'Rent',amount:100, createdAt:100}));
const expenseTwo = store.dispatch(addExpense({descripton:'Tea',amount:300, createdAt:50}));

// store.dispatch(editExpense({id: expenseTwo.expense.id, updates:{amount:1000}}));
// store.dispatch(removeExpense({id: expenseTwo.expense.id}));

//store.dispatch(setTextFilter('tea'));
// store.dispatch(setTextFilter());

store.dispatch(sortByAmount());
store.dispatch(sortByDate());

// store.dispatch(setStartDate(15));
// store.dispatch(setEndDate(125));
// store.dispatch(setStartDate());