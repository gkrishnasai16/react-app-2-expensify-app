import React from 'react';
import {connect} from 'react-redux';
import {setTextFilter, sortByAmount, sortByDate, setStartDate, setEndDate} from './../actions/filters'
import {DateRangePicker} from 'react-dates';
import moment from 'moment';

class ExpenseListFilters extends React.Component{

    state = {
        calendarFocused:null
    };

    onFocusChange = (calendarFocused) => {
        this.setState(()=> ({calendarFocused}))   
    }

    onDatesChange = ({startDate, endDate}) => {

        this.props.dispatch(setStartDate(!startDate?undefined:startDate.valueOf()));
        this.props.dispatch(setEndDate(!endDate? undefined:endDate.valueOf()));
    }

    render() {
        return (
            <div>
        <input type ="text" value={this.props.filters.text} onChange={(e)=>{
            this.props.dispatch(setTextFilter(e.target.value));
        }}/>
        <select value={this.props.filters.sortBy} onChange={(e)=>{
            switch(e.target.value){
                case 'date': this.props.dispatch(sortByDate());break;
                case 'amount': this.props.dispatch(sortByAmount());break;
            }
        }}>
            <option value="date">Date</option>
            <option value="amount">Amount</option>
        </select>
        <DateRangePicker 
            startDate= {this.props.filters.startDate?moment(this.props.filters.startDate):undefined}
            endDate = {this.props.filters.endDate?moment(this.props.filters.endDate):undefined}
            onDatesChange ={this.onDatesChange}
            onFocusChange = {this.onFocusChange}
            focusedInput = {this.state.calendarFocused}
            isOutsideRange = {()=>false}
            numberOfMonths = {1}
            showClearDates ={true}
        />
    </div>
        );
    }
}

const mapStateToProps = (state) =>{
    return{
        filters:state.filters
    };
}

export default connect(mapStateToProps)(ExpenseListFilters);