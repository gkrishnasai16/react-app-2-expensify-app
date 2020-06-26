
export default (expenses,{text,sortBy,startDate,endDate}) =>{
    return expenses.filter((expense)=>{
            const startDateMatch = typeof startDate!=='number' || startDate <= expense.createdAt;
            const endDateMatch = typeof endDate!=='number' || endDate >= expense.createdAt;
            const textMatch = expense.description.toLowerCase().includes(text.toLowerCase());

            return startDateMatch && endDateMatch && textMatch;
        }).sort((a,b)=>{
            switch (sortBy){
                case 'date': return a.createdAt < b.createdAt ? 1 : -1;
                case 'amount': return a.amount < b.amount ? 1 : -1;
            }
        });

}