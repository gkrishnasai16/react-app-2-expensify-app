import React, { Component } from 'react';
import moment from 'moment';
import {SingleDatePicker} from 'react-dates';
import 'react-dates/lib/css/_datepicker.css';


export default class ExpenseForm extends Component{
    

    // constructor(props){
    //     super(props);

    //     this.state = {
    //         description:'',
    //         amount:'',
    //         note:'',
    //         createdAt: moment(),
    //         calendarFocused:false,
    //         error:'',
    //         ...props.expense
    //     };

    //     console.log(props.expense);
    // }

    state = {
                description:'',
                amount:'',
                note:'',
                calendarFocused:false,
                error:'',
                ...this.props.expense,
                createdAt: this.props.expense ? moment(this.props.expense.createdAt):moment(),
            };


    onDescriptionChange = (e) => {
        const description = e.target.value;
        this.setState(()=>({description}));
    }

    onAmountChange = (e) => {
        const amount = e.target.value;
        if(amount.match(/^\d{1,}(\.\d{0,2})?$/)|| !amount)
        this.setState(()=>({amount}));
    }

    onNoteChange =(e) => {
        const note = e.target.value;
        this.setState(()=>({note}));
    }

    onDateChange = (createdAt) =>{
        if(createdAt)
        this.setState(() =>({createdAt}));
    }

    onFocusChange = ({focused}) =>{
        this.setState(()=>({calendarFocused:focused}));
    }

    onSubmit = (e) => {
        e.preventDefault();
        if(!this.state.description || !this.state.amount)
        {
            this.setState(() => ({error:'Please provide description and amount'}));
        }else{
            this.setState(() => ({error:''}));

            this.props.onSubmit({
                description:this.state.description,
                amount:this.state.amount,
                note:this.state.note,
                createdAt:this.state.createdAt.valueOf()
            });
        }

    }

    render(){
        return(
            <form className="form" onSubmit= {this.onSubmit}>
            {this.state.error && <p className="form__error">{this.state.error}</p>}
                <input 
                    type="text"
                    className ="text-input"
                    placeholder='Description'
                    value={this.state.description}
                    onChange={this.onDescriptionChange}
                    autoFocus
                />
                <input 
                    type="number"
                    placeholder='Amount'
                    className ="text-input"
                    value={this.state.amount}
                    onChange={this.onAmountChange}
                />
                <SingleDatePicker 
                    date = {this.state.createdAt}
                    onDateChange = {this.onDateChange}
                    focused = {this.state.calendarFocused}
                    onFocusChange = {this.onFocusChange}
                    numberOfMonths = {1}
                    isOutsideRange = {()=>false}
                />
                <textarea 
                className="textarea"
                type="text"
                placeholder='Add a note for your expense (Optional)'
                value={this.state.note}
                onChange={this.onNoteChange}
                />
                <div>
                    <button className="button">Save Expense</button>
                </div>
                
            </form>
        );}
}
