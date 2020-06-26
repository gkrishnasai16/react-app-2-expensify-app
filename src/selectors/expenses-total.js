
export default (expenses) => {
    let total = 0;
    expenses.forEach((expense) =>{
        total+=parseInt(expense.amount);
    });

    return total;
}